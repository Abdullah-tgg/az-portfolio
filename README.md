# Nexmax — Portfolio (`az-portfolio`)

Portfolio website for **Nexmax**, a small studio that ships polished design and
software under one roof. We work across two crafts:

- **Design** — lead-magnet ebooks, KDP book covers and brand collateral, by **Abeera Zafar**.
- **Mobile development** — production iOS & Android apps (React Native), by **Abdullah**.

Built as a single-page React application with client-side routing, deployed as
a static site to GitHub Pages.

> Live site: <https://abdullah-tgg.github.io/az-portfolio>

---

## Features

- **Hero** with the Nexmax brand and a one-line studio pitch.
- **Recent Work carousel** — horizontal Swiper carousel that auto-bundles every
  image dropped into `src/assets/images/recents/` (no JSON to maintain).
- **What We Do** — three service cards: Ebooks & Lead Magnets, KDP Book Covers, Mobile Apps.
- **About Nexmax** with team avatars (Abeera + Abdullah) and a link to a
  longer studio page.
- **Testimonials** carousel of client feedback.
- **Contact form** powered by [EmailJS](https://www.emailjs.com/) (no backend).
- **WhatsApp** floating quick-contact button.

### Sections by craft

**Design pages** (credit Abeera Zafar):

- `/ebooks-designing` — eBook & lead-magnet showcase, modal carousel per item.
- `/kdp-designs` — KDP/Kindle book cover showcase.
- `/ebook-details/:id` — long-form detail page for a single ebook.

**Mobile development pages** (credit Abdullah):

- `/mobile-apps` — grid of mobile app projects.
- `/mobile-apps/:id` — detail page with screenshots, stack, platforms and
  optional store links.

## Tech Stack

| Area | Library |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite 8](https://vite.dev/) (Rolldown) |
| Routing | [React Router 7](https://reactrouter.com/) |
| Styling | [Bootstrap 5](https://getbootstrap.com/) + custom CSS |
| Carousels | [Swiper 12](https://swiperjs.com/) & [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel) |
| Email | [@emailjs/browser](https://www.emailjs.com/) |
| Linting | [ESLint 9](https://eslint.org/) (flat config) |
| Deployment | [gh-pages](https://www.npmjs.com/package/gh-pages) → GitHub Pages |

## Project Structure

```
az-portfolio/
├── index.html                  # Vite entry HTML
├── vite.config.js              # Vite config (base path, dev server)
├── eslint.config.js            # ESLint flat config
├── package.json
└── src/
    ├── main.jsx                # App bootstrap (ReactDOM + BrowserRouter)
    ├── App.jsx                 # Top-level routes
    ├── App.css                 # Global styles
    ├── assets/
    │   ├── data/               # JSON data driving the showcase pages
    │   │   ├── ebooks.json
    │   │   ├── kdp-books.json
    │   │   ├── mobile-apps.json
    │   │   └── testimonials.json
    │   ├── images/
    │   │   ├── apps/           # mobile app mockups (placeholder.png for now)
    │   │   ├── backgrounds/    # hero & section backgrounds
    │   │   ├── brand/          # nexmax-logo.png, favicon
    │   │   ├── design/         # all eBook / KDP design images (flat)
    │   │   ├── icons/          # icon-whatsapp.png, etc.
    │   │   ├── recents/        # images shown in the home Recent Work carousel
    │   │   ├── services/       # 3 service-card thumbnails
    │   │   └── team/           # abeera-zafar.png, abdullah.png
    │   └── imageMap.js         # eager glob → resolveImage(filename)
    └── components/
        ├── Header.jsx          # Navbar with Design dropdown + Mobile Apps
        ├── Footer.jsx
        ├── Hero.jsx            # Reusable hero (accepts content + image props)
        ├── About.jsx
        ├── Portfolio.jsx       # 3-card "What We Do" grid
        ├── RecentsCarousel.jsx # Auto-globs images/recents
        ├── Testimonials.jsx
        ├── Contact.jsx
        ├── Whatsapp.jsx
        └── pages/
            ├── Home.jsx
            ├── DetailedAbout.jsx
            ├── Blogs.jsx
            ├── EbooksDesigning.jsx
            ├── EbookDetails.jsx
            ├── KDPDesigns.jsx
            ├── MobileApps.jsx
            └── MobileAppDetails.jsx
```

### How images are loaded

Vite only bundles assets that are statically `import`ed (or referenced through
`import.meta.glob`). Image paths stored as plain strings inside JSON files
aren't seen by the bundler and would 404 in production. To handle that:

- **`src/assets/imageMap.js`** uses `import.meta.glob('./images/**/*.{png,...}', { eager: true })`
  to bundle every image under `src/assets/images/`. It exposes `resolveImage(path)`
  which strips a path string to its filename and returns the bundled URL.
- **JSON data files** can use any path style (`"placeholder.png"`,
  `"images/apps/foo.png"`, etc.) — only the filename is used for lookup.
- **Components** wrap image src values from JSON with `resolveImage(...)`.
- **`RecentsCarousel`** has its own `import.meta.glob` over `images/recents/`
  so dropping a new image into that folder is enough — no config required.

## Routes

| Path | Component | Description |
| --- | --- | --- |
| `/` | `Home` | Hero, recents carousel, services, about, testimonials, contact |
| `/DetailedAbout` | `DetailedAbout` | Long-form studio page with team bios |
| `/blogs` | `Blogs` | Blog listing |
| `/ebooks-designing` | `EbooksDesigning` | eBook design showcase (Abeera) |
| `/ebook-details/:id` | `EbookDetails` | Individual eBook detail page |
| `/kdp-designs` | `KDPDesigns` | KDP cover design showcase (Abeera) |
| `/mobile-apps` | `MobileApps` | Mobile app project grid (Abdullah) |
| `/mobile-apps/:id` | `MobileAppDetails` | App detail with stack & store links |

The router is mounted with `basename="/az-portfolio"` so the site works under
the GitHub Pages sub-path.

## Adding content

### A new mobile app

Add an entry to `src/assets/data/mobile-apps.json`:

```json
{
  "id": "my-app",
  "title": "My App",
  "tagline": "One-line pitch",
  "description": "Longer description shown on the detail page.",
  "platforms": ["iOS", "Android"],
  "stack": ["React Native", "TypeScript"],
  "role": "Mobile developer",
  "year": "2026",
  "links": {
    "playStore": "https://play.google.com/...",
    "appStore": "https://apps.apple.com/...",
    "website": "https://...",
    "github": "https://github.com/..."
  },
  "thumbnail": "my-app-cover.png",
  "images": ["my-app-1.png", "my-app-2.png"]
}
```

`links` is **optional** — apps that aren't published yet can omit it entirely
or include only some keys (e.g. just `playStore`). Drop the referenced images
into `src/assets/images/apps/` and they're picked up automatically.

### A new ebook or KDP cover

Add an entry to `ebooks.json` or `kdp-books.json` and drop the image files
into `src/assets/images/design/`. The filename is what gets matched.

### A new "recent work" carousel item

Drop an image into `src/assets/images/recents/`. That's it — no JSON, no
import. `RecentsCarousel` sorts by filename, so prefix with a number if you
want to control the order.

## Getting Started

### Prerequisites

- **Node.js** ≥ 20.19 (required by Vite 8)
- **npm** ≥ 10

### Install

```bash
git clone https://github.com/abdullah-tgg/az-portfolio.git
cd az-portfolio
npm install
```

### Run the dev server

```bash
npm run dev
```

The app runs at <http://localhost:3000/az-portfolio/> with hot module replacement.

### Lint

```bash
npm run lint
```

### Build for production

```bash
npm run build
```

The production bundle is emitted to `dist/`.

### Preview the production build locally

```bash
npm run preview
```

## Deployment

The site is deployed to GitHub Pages from the `dist/` folder via `gh-pages`:

```bash
npm run deploy
```

This runs `npm run build` first (via `predeploy`) and then publishes `dist/`
to the `gh-pages` branch.

> **Note:** the `base` in `vite.config.js` and the `basename` on `BrowserRouter`
> in `src/main.jsx` are both set to `/az-portfolio/`. If you fork this project
> under a different repository name, update both values to match.

## Configuration

### EmailJS

The contact form uses EmailJS. To make it work in your own deployment, set up
an EmailJS account and update the service / template / public key inside
`src/components/Contact.jsx`.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the source tree |
| `npm run deploy` | Build and publish to GitHub Pages |

## Credits

- **Design** — all design work in this portfolio is by **Abeera Zafar** (Nexmax Lead Designer).
- **Mobile development** — apps and the site itself are built by **Abdullah** (Nexmax Mobile Developer).
