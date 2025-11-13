# html-snippets.md - examples for evidence pack

## Landmark template
<header role="banner"> ... </header>
<nav role="navigation" aria-label="Primary"> <ul> ... </ul> </nav>
<main id="main" tabindex="-1" role="main"> ... </main>
<footer role="contentinfo"> ... </footer>

## Skip link
<a class="skip-link" href="#main">Skip to main content</a>

## Example form group
<div class="form-group">
  <label for="email">Email address</label>
  <input id="email" type="email" required>
  <small class="helper">We'll use this to contact you.</small>
</div>

## ARIA usage example
<a href="/views/data.html" aria-current="page">Destinations</a>

## Keyboard-operable disclosure (pattern)
<button aria-expanded="false" aria-controls="more-info">More</button>
<div id="more-info" hidden>Details...</div>
