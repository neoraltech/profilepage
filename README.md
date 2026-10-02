# Profile Page - John Guiller A. Balo

A single-page professional profile built from my CV. No frameworks, no build step - plain HTML, CSS and JavaScript.

## Live site

Once GitHub Pages is enabled (see below), the site publishes to:

```
https://<your-github-username>.github.io/<repo-name>/
```

## Running locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8080
# then open http://localhost:8080
```

A plain `file://` open works too, since there are no module imports or fetch calls.

## Updating the content

All content lives in [assets/js/data.js](assets/js/data.js). Nothing else needs touching to change what the page says.

| Export | Controls |
| --- | --- |
| `PROFILE` | Name, title, rotating role strings, location, email, LinkedIn, summary, headline stats |
| `EXPERIENCE` | The career timeline. `id` links a job to its projects |
| `PROJECTS` | Project cards. `employer` must match an `EXPERIENCE.id` |
| `SKILLS` | Skill groups. `level` is 1-5 and renders as dots |
| `CERTIFICATIONS` | Certification list. `date` is DD/MM/YYYY |

Notes:

- **Project filters build themselves.** Sector filters come from the distinct `sector` values; technology filters are the six most common `tech` entries that appear in more than one project. Add a project and the filter bar updates on its own.
- **Featured projects** (`featured: true`) get their own filter chip.
- **`metric`** is optional on a project. When present it renders a before/after callout - used on QCS Connect for the caching improvement.
- Project names in the Experience timeline are clickable and jump to the matching card.

## Enabling GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

That is all. [.github/workflows/deploy.yml](.github/workflows/deploy.yml) deploys the repository root on every push to `main`. The `.nojekyll` file stops GitHub trying to run Jekyll over the files.

### Custom domain

Add a `CNAME` file at the repository root containing your domain, then point a `CNAME` DNS record at `<your-github-username>.github.io`.

## Features

- Sticky sidebar navigation with scroll-spy (desktop) and sticky section labels (mobile)
- Typing role rotator in the header
- Career timeline with current-role marker and cross-links to projects
- Filterable, expandable project cards with technology highlighting
- Skills grid with 1-5 proficiency indicators
- Dark and light themes, remembered in `localStorage` and defaulting to the system preference
- Pointer-tracking ambient glow (desktop, dark theme)
- Print stylesheet - **Save as PDF** expands every project card and strips the chrome
- Honours `prefers-reduced-motion`; skip link, focus rings and ARIA labelling throughout

## Browser support

Modern evergreen browsers. Uses `IntersectionObserver` (with a fallback), CSS custom properties, `grid-template-rows` animation and `color-mix()`. No polyfills.
