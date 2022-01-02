document.onscroll = function () {
  if (window.scrollY > 300) {
    document.querySelector('.scroll').style.display = 'flex'
  } else {
    document.querySelector('.scroll').style.display = 'none'
  }
};
document.querySelector('.scroll').onclick = function () {
  document.documentElement.scrollTop = 0 ;
}