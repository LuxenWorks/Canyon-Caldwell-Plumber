(function () {
  var head = document.querySelector('.mainhead');
  var btn = document.querySelector('.burger');
  if (!head || !btn) return;
  function set(open) {
    head.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function () { set(!head.classList.contains('open')); });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && head.classList.contains('open')) { set(false); btn.focus(); }
  });
})();
