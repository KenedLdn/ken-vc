(function () {
  'use strict';

  var slider = document.getElementById('lifeWorkSlider');
  if (!slider) return;

  var hero = document.querySelector('.hero');
  var tagline = document.getElementById('tagline');
  var blurb = document.getElementById('blurb');
  var descriptors = document.getElementById('descriptors');

  // Read stops array from data attribute
  var stops = JSON.parse(hero.getAttribute('data-stops'));
  var N = stops.length;
  if (N < 2) return;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function hexToRgb(hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  }

  var workRgb = hexToRgb('#069AA8');
  var lifeRgb = hexToRgb('#f26522');

  var interacted = false;
  var nudging = false;

  function update() {
    var t = slider.value / 100;  // 0..1

    // Colour interpolation — continuous across full range
    var r = Math.round(lerp(workRgb[0], lifeRgb[0], t));
    var g = Math.round(lerp(workRgb[1], lifeRgb[1], t));
    var b = Math.round(lerp(workRgb[2], lifeRgb[2], t));
    var accentColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    hero.style.background = 'radial-gradient(ellipse at 50% 30%, rgba(' + r + ',' + g + ',' + b + ', 0.1) 0%, transparent 70%)';

    // Map t to a float position in [0, N-1], then snap to nearest stop
    var stopPos = t * (N - 1);
    var idx = Math.round(stopPos);
    var current = stops[idx];

    // Crossfade opacity: 1 at a stop, dips to ~0.6 halfway between stops
    var dist = Math.abs(stopPos - idx);  // 0..0.5
    var opacity = 1 - dist * 0.8;        // 1..0.6

    tagline.textContent = current.tagline;
    tagline.style.opacity = opacity;
    blurb.textContent = current.blurb;
    blurb.style.opacity = opacity;

    var html = '';
    for (var i = 0; i < current.descriptors.length; i++) {
      html += '<span class="tag" style="border-color:' + accentColor + ';color:' + accentColor + '">' + current.descriptors[i] + '</span>';
    }
    descriptors.innerHTML = html;
  }

  slider.addEventListener('input', function() {
    if (!nudging && !interacted) {
      interacted = true;
      dismissHint();
    }
    update();
  });

  function dismissHint() {
    var hint = document.getElementById('sliderHint');
    if (!hint) return;
    hint.classList.add('slider-hint--hidden');
    hint.addEventListener('transitionend', function() {
      hint.style.display = 'none';
    }, { once: true });
  }

  // Auto-nudge: fires 800ms after load, animates 50→65→50 over 800ms
  setTimeout(function() {
    if (interacted) return;
    var steps = 0;
    var total = 32; // 32 × 25ms = 800ms
    var interval = setInterval(function() {
      if (interacted) { clearInterval(interval); return; }
      nudging = true;
      if (steps < total / 2) {
        slider.value = 50 + (steps / (total / 2)) * 15;
      } else {
        slider.value = 65 - ((steps - total / 2) / (total / 2)) * 15;
      }
      slider.dispatchEvent(new Event('input'));
      nudging = false;
      steps++;
      if (steps >= total) {
        clearInterval(interval);
        if (!interacted) { nudging = true; slider.value = 50; slider.dispatchEvent(new Event('input')); nudging = false; }
      }
    }, 25);
  }, 800);

  // Initial render
  update();
})();
