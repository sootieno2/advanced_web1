    # Tournow - Upload 1 Skeleton
    This repository contains a starter skeleton for the Upload 1 (Week 9) submission for Advanced Web Design & Applications.

    ## What is included
    - `public/index.html` — landing page with hero and highlights
    - `public/views/data.html` — destinations/content page
    - `public/views/form.html` — booking/contact form page
    - `public/css/tokens.css` and `public/css/base.css` — design tokens and base styling (mobile-first)
    - `public/js/a11y.js` — small accessibility helpers (skip-link is CSS-only)
    - `wireframes/` — placeholder folder for exported wireframe images
    - `evidence/` — place to add Lighthouse report and screenshots

## How to run locally
You can serve the `public` folder with any static server. Example (Node):

```bash
npx serve public
```

Open http://localhost:5000 in your browser.

## Notes
- The design uses a dark aesthetic with warm orange accents inspired by your provided image.
- Focus styles use `:focus-visible` and a visible outline color that contrasts well with the dark background.
- Add your wireframes and Lighthouse report into the `wireframes` and `evidence` folders respectively.

# Tournow 

Accessible, responsive travel showcase built for the **Advanced Web Design & Applications** course.

---

## How to Run Locally

### Option 1: Run with Docker (recommended)
```bash
# Build and start the container
docker-compose up --build
Then open http://localhost:8080

Option 2: Run without Docker
If you have Node.js installed, use a simple dev server:

bash
Copy code
npm install -g serve
serve public
This serves index.html at http://localhost:3000

