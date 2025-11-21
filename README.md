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


Developments 2

# Upload 2 – Modules & State Architecture

This submission extends the Upload 1 foundation with a full modular JavaScript architecture, including a state store, routing system, domain models, and core UI logic.

---

##  Deliverables

### 1. Module Structure
All JavaScript functionality is now organized inside the `src/` folder:

- `router/` – hash-based router
- `store/` – Redux-style store + pure reducers
- `modules/` – domain models, factories, services
- `ui/components/` – reusable UI pieces
- `ui/views/` – page-level rendering functions
- `utils/` – pure utility functions

### 2. Class / Factory Design
- `TourModel.js` defines a Tour class
- `BookingFactory.js` produces new booking objects
- Actions and service logic separated into modules

### 3. State Store
A lightweight Redux-inspired store implements:
- `getState()`
- `dispatch()`
- `subscribe()`
- Pure reducers controlling state transitions

### 4. Routing (Hash Routing)
A minimal router based on `location.hash`:
- `#/` → Home
- `#/data` → Destinations
- `#/form` → Booking page

Works with static hosting, Docker, GitHub Pages.

### 5. Core UI Logic
Views dynamically render content into the app container:
- Home, Destinations, and Form views
- Card and Form components
- Integrated with store and router

---

##  Evidence

### 1. Source Tree
The full folder structure has been exported to evidence 

