# Professional Profile - John Guiller A. Balo

**Live site: https://neoraltech.github.io/profilepage/**

A data-driven professional profile for a Technical OutSystems Lead based in Auckland, New Zealand. Built as a dependency-free static site to demonstrate the same engineering principles I apply to enterprise delivery: clean separation of concerns, no unnecessary abstraction, and a codebase someone else can maintain without a handover.

**Technical OutSystems Lead / Senior Software Engineer** - 10+ years delivering scalable enterprise systems with OutSystems and .NET across New Zealand, Australia, Singapore and the Philippines. [LinkedIn](https://www.linkedin.com/in/john-guiller-balo/)

---

## Why it is built this way

A profile page is a small problem. Most of the engineering value is in *not* overbuilding it.

| Decision | Reasoning |
| --- | --- |
| **No framework** | React or Vue would add a toolchain, a build step and roughly 40 KB of runtime for a page that renders once and never mutates server state. The requirement did not justify the dependency. |
| **No build step** | The repository is the deployment artefact. What you read here is byte-for-byte what the browser runs, so there is no source map indirection when debugging. |
| **Content as a data layer** | All content lives in [`assets/js/data.js`](assets/js/data.js) as plain objects. Rendering never hardcodes content, and content never contains markup. Updating the CV touches one file. |
| **Progressive disclosure** | 13 projects across 7 roles will not fit on a readable page. Collapsed cards plus self-generating filters let the reader choose their own depth rather than forcing a scroll. |
| **Semantic HTML first** | Sections, headings, buttons and landmarks are real elements, so keyboard navigation and screen readers work without ARIA patching over a div soup. |

The same reasoning drives my platform work: solve the actual problem, keep the dependency surface small, and leave something the next engineer can reason about.

## Architecture

```
index.html              Semantic shell - landmarks, headings, empty mount points
assets/js/data.js       Content layer - PROFILE, EXPERIENCE, PROJECTS, SKILLS, CERTIFICATIONS
assets/js/app.js        Render + behaviour - one pure render function per section
assets/css/styles.css   Design tokens, layout, print stylesheet
.github/workflows/      GitHub Actions deployment to Pages
```

Strict one-way flow: **data → render → DOM**. No state is read back out of the DOM as a source of truth, so there is nothing to desynchronise.

### Self-generating project filters

The filter bar is derived from the data rather than declared. Sector chips come from the distinct `sector` values; technology chips are the six most common `tech` entries that appear in two or more projects. Adding a project to `data.js` updates the filter bar, the counts and the headline statistics with no other change.

This is the same instinct behind the dynamic Access Matrix and Approval Matrix work in my MES delivery: derive configuration from data instead of hardcoding it, so the system absorbs change rather than needing a release.

### Relational content model

`PROJECTS[].employer` is a foreign key to `EXPERIENCE[].id`. The career timeline resolves its own projects through that relation and renders cross-links that expand and scroll to the matching card. One relation, two views, no duplicated content.

## Engineering characteristics

- **62.5 KB** total uncompressed across HTML, CSS and JS. Zero runtime dependencies; the only external request is Google Fonts.
- **Accessible by construction** - skip link, visible focus rings, `aria-expanded` on every disclosure, `aria-pressed` on filters, live region on the filter count, and proficiency ratings exposed as text to assistive technology rather than colour alone.
- **Honours `prefers-reduced-motion`** - the typing animation, scroll reveals and pointer glow all disable, with content shown in its final state rather than stuck invisible.
- **Themed via CSS custom properties** - dark and light are two token sets, not two stylesheets. Theme resolves before first paint to avoid a flash of the wrong theme.
- **Print stylesheet** - "Save as PDF" force-expands every collapsed card and strips navigation and filters, so the printed output is a complete CV rather than a screenshot of a collapsed page.
- **Responsive without horizontal scroll** - verified at 390 px through 1440 px.

Verified in-browser: no console errors, 0 px horizontal overflow at 390 px, all sections rendering from data, filter and disclosure interactions behaving as specified.

## Running locally

```bash
git clone https://github.com/neoraltech/profilepage.git
cd profilepage
python -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly from the filesystem also works, since there are no module imports or `fetch` calls.

## Maintaining the content

Everything is in [`assets/js/data.js`](assets/js/data.js):

| Export | Controls |
| --- | --- |
| `PROFILE` | Name, rotating role titles, location, contact links, summary, headline statistics |
| `EXPERIENCE` | Career timeline. `id` is the key projects join against |
| `PROJECTS` | Project cards. `employer` must match an `EXPERIENCE.id` |
| `SKILLS` | Grouped skills. `level` is 1-5 and renders as dots |
| `CERTIFICATIONS` | Certification list, dates in DD/MM/YYYY |

Optional per-project fields: `featured: true` adds it to the Featured filter, and `metric: { label, from, to }` renders a before/after callout.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which publishes the repository root to GitHub Pages. `.nojekyll` prevents Jekyll from processing the files. The workflow also supports `workflow_dispatch` for manual runs.

Requires **Settings → Pages → Source → GitHub Actions**.

## Browser support

Modern evergreen browsers. Uses `IntersectionObserver` (with a no-observer fallback that reveals all content), CSS custom properties, animated `grid-template-rows` for disclosure, and `color-mix()`. No polyfills, no transpilation.

## Contact

**Email:** john.guiller.a.balo@outlook.com
**LinkedIn:** https://www.linkedin.com/in/john-guiller-balo/
**Location:** Auckland, New Zealand

---

Licensed under the terms in [LICENSE](LICENSE). The content describes my professional history; the code is yours to learn from.
