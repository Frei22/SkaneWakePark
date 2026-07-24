document.querySelectorAll('.hero-carousel').forEach(function (root) {
  var track = root.querySelector('.slide-track');
  var slides = root.querySelectorAll('.slide');
  var dots = root.querySelectorAll('.dot');
  var i = 0;

  function show(n) {
    i = ((n % slides.length) + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (i * 100) + '%)';
    dots.forEach(function (d, idx) { d.classList.toggle('active', idx === i); });
  }

  dots.forEach(function (d, idx) {
    d.addEventListener('click', function () { show(idx); });
  });

  setInterval(function () { show(i + 1); }, 6000);
  show(0);
});
