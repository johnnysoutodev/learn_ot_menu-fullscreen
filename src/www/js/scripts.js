function menuToogle(){
  var nav = document.getElementById('menu-overlay');
  nav.classList.toggle('active');

  var icon = document.getElementById('toogleIcon');
  icon.classList.toggle('active');
}