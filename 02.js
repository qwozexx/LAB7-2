var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myHeader").style.top = "0";
  } else {
    document.getElementById("myHeader").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
document.getElementById('buy-button').addEventListener('click', function() {
    document.getElementById('buy-form').classList.remove('hidden');
});
