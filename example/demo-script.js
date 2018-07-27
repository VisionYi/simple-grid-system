function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - (c / 7));
  }
}

const allTop = document.querySelectorAll('.top');

allTop.forEach(function (item) {
  item.addEventListener('click', scrollToTop);
});
