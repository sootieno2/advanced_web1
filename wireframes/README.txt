# Wireframes — Tournow

These are **low-fidelity wireframes** created in Figma to plan the page structure, tab order, and accessibility landmarks for the Tournow web app.

Each screen shows:
- Semantic **landmarks** (`header`, `nav`, `main`, `footer`)
- **Tab order** (numbered sequence for keyboard navigation)
- Key **responsive sections** that adapt at 480 px, 768 px, and 1024 px breakpoints

---

##  `home.png`
- Represents the **Landing Page (`index.html`)**
- Landmarks: Header (brand + nav), Main (hero + highlights), Footer
- Tab order: skip link → nav → main CTA → feature cards → footer links

---
##  `data.png`
- Represents the **Destinations Page (`views/data.html`)**
- Landmarks: Header, Nav, Main (featured destinations grid), Footer
- Highlights use accessible card layout (`<ul><li>` structure)
- Tab order: skip link → navigation → destination cards → footer

---

##  `form.png`
- Represents the **Contact / Booking Page (`views/form.html`)**
- Landmarks: Header, Nav, Main (form), Footer
- Includes labeled form groups, helper text, and ARIA live region area
- Tab order: skip link → name → email → destination → message → submit → footer

---

###  Notes
- All wireframes follow **mobile-first layout**, scaling gracefully to tablet and desktop.
- Color contrast and visual hierarchy tested in the final implementation.
- These mockups served as the blueprint for the semantic HTML and responsive CSS grid in Upload 1.
