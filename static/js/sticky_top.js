/*
StickyTop when scroll up
*/

window.addEventListener('DOMContentLoaded', function() {
  let c = document.querySelectorAll('#desctop_scroll');
  let lastScrollTop = 0;

  window.addEventListener("scroll", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (st > lastScrollTop) {
      // Downscroll code
      c.forEach(element => {
        element.classList.remove('black_bg_op');
        element.classList.remove('fixed-top');
      });
    } else if (st < lastScrollTop) {
      // Upscroll code
      c.forEach(element => {
        element.classList.add('black_bg_op');
        element.classList.add('fixed-top');
      });
    }
    
    lastScrollTop = st <= 0 ? 0 : st;
  }, false);

});