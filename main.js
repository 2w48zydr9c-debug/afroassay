// AfroAssay — main.js
// Pure vanilla JS, no dependencies

document.addEventListener('DOMContentLoaded', function () {
  // ── Hamburger menu toggle (all pages) ──
  var toggle = document.getElementById('menu-toggle');
  if (toggle) {
    toggle.addEventListener('change', function () {
      document.body.classList.toggle('menu-open', toggle.checked);
    });
  }

  // ── Active nav link highlight ──
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.style.color = 'var(--gold)';
      a.style.fontWeight = '700';
    }
  });

  // ── Form submission via fetch (graceful fallback for Netlify) ──
  var forms = document.querySelectorAll('form[data-netlify="true"]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      // Let Netlify Forms handle it natively; no JS拦截 needed.
      // If user replaces with Formspree, add: e.preventDefault(); fetch(...)
    });
  });
});
