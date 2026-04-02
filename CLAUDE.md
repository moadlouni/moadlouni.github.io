# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML portfolio website for Mo Adlouni, hosted on GitHub Pages at `moadlouni.github.io`. No build system, no package manager, no server-side code.

## Local Development

There are no build or compile steps. To preview locally, serve the files with any static file server:

```bash
# Python (usually available)
python -m http.server 8080

# Node.js (if available)
npx serve .
```

Then open `http://localhost:8080` in a browser. Alternatively, open any `.html` file directly in a browser, though some features may behave differently without a server.

## Architecture

**Multi-page static site** — 4 HTML pages sharing a single stylesheet and script:

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Bootstrap carousel landing page |
| About | `about.html` | Bio and background |
| Work | `work.html` | Work experience + resume download |
| Contact | `contact.html` | Contact form via Formspree |

**Dependencies (CDN only, no local installs):**
- Bootstrap 4.3.1 (grid, navbar, carousel, buttons)
- jQuery 3.4.1 (DOM manipulation, AJAX)
- Formspree (contact form backend — form posts to `formspree.io/modullah@gmail.com`)

**Shared assets:**
- `css/main.css` — all custom styles for all pages
- `js/script.js` — all JavaScript for all pages
- `images/` — static images referenced in HTML and CSS

## Key Patterns

- **Navbar** is duplicated in each HTML file (not a component). Changes to navigation must be applied to all 4 files.
- **Background images** use `background-attachment: fixed` for a parallax effect; paths are set in `main.css` using relative `../images/` paths.
- **Hero sections** use an overlay `<div class="overlay">` for text readability over dark background images.
- **Resume download** opens `Mo_Adlouni_Resume_2025.pdf` in a new tab via `window.open()` in `script.js`.
- The contact form uses AJAX (XMLHttpRequest) to submit to Formspree without a page reload.

## Deployment

Push to the `master` branch — GitHub Pages serves the site automatically with no CI/CD pipeline.
