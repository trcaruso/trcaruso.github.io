document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.readmore').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.card');
      var open = card.classList.toggle('is-open');
      btn.textContent = open ? 'Read less' : 'Read more';
      btn.setAttribute('aria-expanded', String(open));
    });
  });
});
