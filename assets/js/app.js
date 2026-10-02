/* Profile page behaviour. Rendering is driven entirely by data.js. */

(function () {
  "use strict";

  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  /* ------------------------------------------------------------- Identity */

  function renderIdentity() {
    $("#avatar").textContent  = PROFILE.initials;
    $("#name").textContent    = PROFILE.name;
    $("#loc").textContent     = PROFILE.location;
    $("#tagline").textContent = PROFILE.tagline;
    $("#summary").textContent = PROFILE.summary;

    var mailto = "mailto:" + PROFILE.email;
    ["#emailBtn", "#emailBtn2", "#mailIcon"].forEach(function (s) {
      var n = $(s);
      if (n) n.href = mailto;
    });
    $("#emailText").textContent = PROFILE.email;

    ["#liBtn", "#liBtn2"].forEach(function (s) {
      var n = $(s);
      if (n) n.href = PROFILE.linkedin;
    });

    document.title = PROFILE.name + " - " + PROFILE.title;

    var stats = $("#stats");
    PROFILE.stats.forEach(function (s) {
      var box = el("div", "stat");
      box.appendChild(el("div", "v", s.value));
      box.appendChild(el("div", "l", s.label));
      stats.appendChild(box);
    });
  }

  /* -------------------------------------------------------- Role rotator */

  function roleRotator() {
    var line = $("#roleLine");
    var cursor = el("span", "cursor");
    var textNode = document.createTextNode("");
    line.appendChild(textNode);
    line.appendChild(cursor);

    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || PROFILE.roles.length < 2) {
      textNode.nodeValue = PROFILE.roles[0];
      cursor.remove();
      return;
    }

    var i = 0, pos = 0, deleting = false;

    function tick() {
      var word = PROFILE.roles[i];
      pos += deleting ? -1 : 1;
      textNode.nodeValue = word.slice(0, pos);

      var delay = deleting ? 28 : 55;
      if (!deleting && pos === word.length) {
        deleting = true;
        delay = 2100;
      } else if (deleting && pos === 0) {
        deleting = false;
        i = (i + 1) % PROFILE.roles.length;
        delay = 320;
      }
      setTimeout(tick, delay);
    }
    tick();
  }

  /* ----------------------------------------------------------- Timeline */

  function renderTimeline() {
    var wrap = $("#timeline");

    EXPERIENCE.forEach(function (job) {
      var node = el("article", "job" + (job.current ? " is-current" : ""));
      node.appendChild(el("span", "dot"));

      var period = el("p", "period");
      period.appendChild(document.createTextNode(job.period));
      if (job.current) period.appendChild(el("span", "pill", "CURRENT"));
      node.appendChild(period);

      node.appendChild(el("h3", null, job.position));

      var co = el("p", "co");
      co.appendChild(document.createTextNode(job.company));
      co.appendChild(el("span", "sep", "/"));
      co.appendChild(document.createTextNode(job.country));
      node.appendChild(co);

      if (job.note) node.appendChild(el("p", "note", job.note));

      var mine = PROJECTS.filter(function (p) { return p.employer === job.id; });
      if (mine.length) {
        var list = el("div", "job-projects");
        mine.forEach(function (p) {
          var b = el("button", "job-link", p.name);
          b.type = "button";
          b.addEventListener("click", function () { jumpToProject(p); });
          list.appendChild(b);
        });
        node.appendChild(list);
      }

      wrap.appendChild(node);
    });
  }

  /* ----------------------------------------------------------- Projects */

  /* label -> filter kind. Authoritative in JS; the DOM is only a projection. */
  var filterKinds = {};
  /* Parallel to PROJECTS: { project, el, tags }. Avoids recovering state from data-*. */
  var cardIndex = [];
  var filterButtons = [];

  function buildFilters() {
    var sectors = {};
    PROJECTS.forEach(function (p) { sectors[p.sector] = (sectors[p.sector] || 0) + 1; });

    var techTally = {};
    PROJECTS.forEach(function (p) {
      p.tech.forEach(function (t) { techTally[t] = (techTally[t] || 0) + 1; });
    });

    /* Only offer tech filters that appear in more than one project. */
    var techs = Object.keys(techTally)
      .filter(function (t) { return techTally[t] > 1; })
      .sort(function (a, b) { return techTally[b] - techTally[a]; })
      .slice(0, 6);

    var defs = [{ label: "All", kind: "all", count: PROJECTS.length }];

    defs.push({ label: "Featured", kind: "featured",
      count: PROJECTS.filter(function (p) { return p.featured; }).length });

    Object.keys(sectors).sort().forEach(function (s) {
      defs.push({ label: s, kind: "sector", count: sectors[s] });
    });

    techs.forEach(function (t) {
      defs.push({ label: t, kind: "tech", count: techTally[t] });
    });

    var box = $("#filters");
    filterButtons = [];
    defs.forEach(function (d) {
      filterKinds[d.label] = d.kind;
      var b = el("button", "filter");
      b.type = "button";
      b.setAttribute("aria-pressed", d.label === "All" ? "true" : "false");
      b.appendChild(document.createTextNode(d.label));
      b.appendChild(el("span", "n", String(d.count)));
      b.addEventListener("click", function () { applyFilter(d.label); });
      box.appendChild(b);
      filterButtons.push({ label: d.label, el: b });
    });
  }

  function matches(project, label) {
    var kind = filterKinds[label] || "all";
    if (kind === "all") return true;
    if (kind === "featured") return !!project.featured;
    if (kind === "sector") return project.sector === label;
    return project.tech.indexOf(label) !== -1;
  }

  function applyFilter(label) {

    filterButtons.forEach(function (f) {
      f.el.setAttribute("aria-pressed", f.label === label ? "true" : "false");
    });

    var shown = 0;
    cardIndex.forEach(function (entry) {
      var ok = matches(entry.project, label);
      entry.el.hidden = !ok;
      if (ok) shown++;

      entry.tags.forEach(function (t) {
        t.el.classList.toggle("is-match", label !== "All" && t.name === label);
      });
    });

    $("#empty").hidden = shown > 0;
    $("#filterNote").textContent =
      label === "All"
        ? "Showing all " + PROJECTS.length + " projects."
        : "Showing " + shown + " of " + PROJECTS.length + " projects matching " + label + ".";
  }

  function renderProjects() {
    var wrap = $("#projects");

    PROJECTS.forEach(function (p, idx) {
      var card = el("article", "card");
      var bodyId = "proj-body-" + idx;

      var btn = el("button", "card-btn");
      btn.type = "button";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-controls", bodyId);

      var top = el("div", "card-top");
      var left = el("div");
      left.appendChild(el("h3", null, p.name));

      var meta = el("p", "meta");
      meta.appendChild(el("span", "role", p.role));
      meta.appendChild(el("span", "sep", "/"));
      meta.appendChild(document.createTextNode(p.client));
      meta.appendChild(el("span", "sep", "/"));
      meta.appendChild(document.createTextNode(p.period));
      meta.appendChild(el("span", "sep", "/"));
      meta.appendChild(document.createTextNode(p.type));
      left.appendChild(meta);
      top.appendChild(left);

      var chev = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      chev.setAttribute("class", "chev");
      chev.setAttribute("viewBox", "0 0 24 24");
      chev.setAttribute("fill", "none");
      chev.setAttribute("stroke", "currentColor");
      chev.setAttribute("stroke-width", "2");
      chev.setAttribute("stroke-linecap", "round");
      chev.setAttribute("stroke-linejoin", "round");
      chev.setAttribute("aria-hidden", "true");
      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "m6 9 6 6 6-6");
      chev.appendChild(path);
      top.appendChild(chev);

      btn.appendChild(top);
      btn.appendChild(el("p", "summary", p.summary));

      var tags = el("div", "tags");
      var tagRefs = [];
      p.tech.forEach(function (t) {
        var node = el("span", "tag", t);
        tags.appendChild(node);
        tagRefs.push({ name: t, el: node });
      });
      btn.appendChild(tags);

      card.appendChild(btn);

      /* Collapsible detail */
      var body = el("div", "card-body");
      body.id = bodyId;
      var scroller = el("div");
      var inner = el("div", "card-body-inner");

      var ul = el("ul", "hl");
      p.highlights.forEach(function (h) { ul.appendChild(el("li", null, h)); });
      inner.appendChild(ul);

      if (p.metric) {
        var m = el("div", "metric");
        m.appendChild(el("span", "lbl", p.metric.label + ":"));
        m.appendChild(el("span", "from", p.metric.from));
        m.appendChild(el("span", "arrow", "\u2192"));
        m.appendChild(el("span", "to", p.metric.to));
        inner.appendChild(m);
      }

      scroller.appendChild(inner);
      body.appendChild(scroller);
      card.appendChild(body);

      btn.addEventListener("click", function () {
        var open = card.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });

      wrap.appendChild(card);
      cardIndex.push({ project: p, el: card, btn: btn, tags: tagRefs });
    });

    var empty = el("p", "empty", "No projects match that filter.");
    empty.id = "empty";
    empty.hidden = true;
    wrap.appendChild(empty);
  }

  function jumpToProject(project) {
    applyFilter("All");
    var entry = null;
    cardIndex.forEach(function (c) { if (c.project === project) entry = c; });
    if (!entry) return;
    if (!entry.el.classList.contains("is-open")) entry.btn.click();
    entry.el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ------------------------------------------------------------- Skills */

  function renderSkills() {
    var wrap = $("#skills");
    SKILLS.forEach(function (group) {
      var box = el("div", "skill-group");
      box.appendChild(el("h3", null, group.category));
      group.items.forEach(function (item) {
        var row = el("div", "skill-row");
        row.appendChild(el("span", "nm", item.name));
        var dots = el("div", "dots");
        dots.setAttribute("role", "img");
        dots.setAttribute("aria-label", item.name + ": " + item.level + " out of 5");
        for (var i = 1; i <= 5; i++) {
          dots.appendChild(el("i", i <= item.level ? "on" : null));
        }
        row.appendChild(dots);
        box.appendChild(row);
      });
      wrap.appendChild(box);
    });
  }

  /* ------------------------------------------------------------- Certs */

  function renderCerts() {
    var wrap = $("#certs");
    CERTIFICATIONS.forEach(function (c) {
      var row = el("div", "cert");
      row.appendChild(el("span", "d", c.date));
      var txt = el("div");
      txt.appendChild(el("div", "n", c.name));
      txt.appendChild(el("div", "i", c.issuer));
      row.appendChild(txt);
      wrap.appendChild(row);
    });
  }

  /* ---------------------------------------------------- Nav + scrollspy */

  var SECTIONS = [
    ["about", "About"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["skills", "Skills"],
    ["certifications", "Certifications"],
    ["contact", "Contact"]
  ];

  /* section id -> nav anchor, populated at render time. */
  var navLinks = {};

  function renderNav() {
    var nav = $("#nav");
    SECTIONS.forEach(function (s) {
      var a = document.createElement("a");
      a.href = "#" + s[0];
      a.appendChild(el("span", "bar"));
      a.appendChild(document.createTextNode(s[1]));
      nav.appendChild(a);
      navLinks[s[0]] = a;
    });
  }

  function scrollSpy() {
    var links = navLinks;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].classList.remove("active"); });
        if (links[e.target.id]) links[e.target.id].classList.add("active");
      });
    }, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });

    SECTIONS.forEach(function (s) {
      var n = document.getElementById(s[0]);
      if (n) obs.observe(n);
    });
  }

  /* ------------------------------------------------------- Scroll reveal */

  function reveal() {
    var nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(nodes, function (n) { n.classList.add("shown"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("shown");
          o.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    Array.prototype.forEach.call(nodes, function (n) { obs.observe(n); });
  }

  /* -------------------------------------------------------------- Theme */

  function theme() {
    var btn = $("#themeToggle");
    btn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ------------------------------------------------------- Pointer glow */

  function pointerGlow() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    var raf = null;
    window.addEventListener("pointermove", function (e) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        document.documentElement.style.setProperty("--mx", e.clientX + "px");
        document.documentElement.style.setProperty("--my", e.clientY + "px");
        raf = null;
      });
    });
  }

  /* -------------------------------------------------------------- Print */

  function printing() {
    $("#printBtn").addEventListener("click", function () { window.print(); });
  }

  /* ---------------------------------------------------------------- Init */

  renderIdentity();
  roleRotator();
  renderNav();
  renderTimeline();
  renderProjects();
  buildFilters();
  applyFilter("All");
  renderSkills();
  renderCerts();
  reveal();
  scrollSpy();
  theme();
  pointerGlow();
  printing();
})();
