// Nav scroll shadow
(function () {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
})();

// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.site-nav__links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    var expanded = links.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded);
  });

  // Close menu on link click
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Scroll fade-in observer
(function () {
  var els = document.querySelectorAll('.fade-in');
  if (!els.length || !('IntersectionObserver' in window)) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList.add('visible');
    }
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(function (el) { observer.observe(el); });
})();
