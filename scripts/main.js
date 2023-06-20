const topBtn = document.getElementById("goTotopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.classList.add('visible')
  } else {
    topBtn.classList.remove('visible')
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
