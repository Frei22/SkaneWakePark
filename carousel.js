document.querySelectorAll('.hero-carousel').forEach(function (root) {
  var slides = root.querySelectorAll('.slide');
  var dots = root.querySelectorAll('.dot');
  var i = 0;

  function show(n) {
    i = ((n % slides.length) + slides.length) % slides.length;
    slides.forEach(function (s, idx) { s.classList.toggle('active', idx === i); });
    dots.forEach(function (d, idx) { d.classList.toggle('active', idx === i); });
  }

  dots.forEach(function (d, idx) {
    d.addEventListener('click', function () { show(idx); });
  });

  setInterval(function () { show(i + 1); }, 6000);
  show(0);
});
