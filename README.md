# jansouza.com

Source for the [jansouza.com](https://jansouza.com) homepage. Plain HTML, no build step and no dependencies.

## Languages

Each language has its own page, and they all share the same CSS and JS:

| Language   | File            | URL     |
|------------|-----------------|---------|
| Portuguese | `index.html`    | `/`     |
| English    | `en/index.html` | `/en/`  |
| Spanish    | `es/index.html` | `/es/`  |

Styles and scripts live in `assets/style.css` and `assets/main.js`. When you change text, a link or a
quote, make the same change on all three pages. To add a language, create its folder, add its link to
the language switcher and to the `hreflang` tags on every page, and add its URL to `sitemap.xml`.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

The site is published on Cloudflare Pages straight from the repository root, with no build command.
