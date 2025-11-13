// a11y.js - small helpers
document.addEventListener('DOMContentLoaded', function(){
  // set current year in footer
  var y = new Date().getFullYear();
  var spans = document.querySelectorAll('#year');
  spans.forEach(function(s){ s.textContent = y; });
  // simple menu toggle for small screens (progressive enhancement)
  var btn = document.querySelector('.menu-btn');
  if(btn){
    btn.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
    });
  }
});

// --- Animate cards on scroll (accessible + efficient) ---
document.addEventListener('DOMContentLoaded', function(){
  const animatedItems = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    }, { threshold: 0.2 });
    animatedItems.forEach(item => observer.observe(item));
  } else {
    // fallback: just show all if browser doesn’t support observer
    animatedItems.forEach(item => item.classList.add('visible'));
  }
});
// --- end animate cards on scroll ---  
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const feedback = document.getElementById('form-feedback');

  if (form && feedback) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      //  validation
      const valid = form.checkValidity();
      if (valid) {
        feedback.textContent = "Form submitted successfully. We'll be in touch soon!";
        feedback.classList.remove('error-text');
      } else {
        feedback.textContent = "Please correct the highlighted fields before submitting.";
        feedback.classList.add('error-text');
      }
    });
  }
});
