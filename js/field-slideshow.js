document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('fieldSlideshow');
  if (!root) return;

  var base = 'assets/field-photos/';

  // Fixed order, set by hand. Work-in-action shots lead, then scenery/wildlife.
  var order = [
    'field-05.jpg', 'field-25.jpg', 'field-24.jpg', 'field-19.jpg', 'field-28.jpg',
    'field-23.jpg',
    'field-06.jpg', 'field-35.jpg', 'field-36.jpg', 'field-39.jpg', 'field-07.jpg',
    'field-11.jpg', 'field-08.jpg', 'field-09.jpg', 'field-10.jpg', 'field-34.jpg',
    'field-12.jpg', 'field-43.jpg', 'field-47.jpg', 'field-21.jpg', 'field-26.jpg',
    'field-41.jpg', 'field-37.jpg', 'field-17.jpg', 'field-18.jpg',
    'field-20.jpg', 'field-14.jpg', 'field-15.jpg', 'field-42.jpg', 'field-13.jpg',
    'field-16.jpg', 'field-45.jpg', 'field-31.jpg', 'field-33.jpg', 'field-01.jpg'
  ];

  var slidesEl = document.getElementById('fieldSlides');
  var prevBtn = document.getElementById('fieldPrev');
  var nextBtn = document.getElementById('fieldNext');

  order.forEach(function (src, i) {
    var slide = document.createElement('div');
    slide.className = 'field-slide' + (i === 0 ? ' active' : '');
    var img = document.createElement('img');
    img.src = base + src;
    img.loading = 'lazy';
    img.alt = 'Field photo from EARTH science fieldwork';
    slide.appendChild(img);
    slidesEl.appendChild(slide);
  });

  var slideEls = slidesEl.querySelectorAll('.field-slide');
  var total = slideEls.length;
  var current = 0;
  var timer = null;

  function show(index) {
    slideEls[current].classList.remove('active');
    current = (index + total) % total;
    slideEls[current].classList.add('active');
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(next, 4500);
  }
  function stopAutoplay() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  if (nextBtn) nextBtn.addEventListener('click', function () { next(); startAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', function () { prev(); startAutoplay(); });
  root.addEventListener('mouseenter', stopAutoplay);
  root.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
});
