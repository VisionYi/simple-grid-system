function handleScrollToTop(e) {
  e.preventDefault();
  var speed = 12, bufferSpeed = 10;
  var scrollToTop = window.setInterval(function() {
    var nowPosition = window.scrollY;
    if (nowPosition > 0) {
      window.scrollTo(0, nowPosition - (nowPosition / bufferSpeed));
    } else {
      window.clearInterval(scrollToTop);
    }
  }, speed);
}

var allTop = document.querySelectorAll('.top');
allTop.forEach(function (item) {
  item.addEventListener('click', handleScrollToTop);
});
