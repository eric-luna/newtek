function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
event.preventDefault();
  document.getElementById("mySidenav").style.width = "0";
}

let button = document.getElementById('button');
let close = document.getElementById('close');
button.addEventListener('click', openNav);
close.addEventListener('click', closeNav);