var intervalo = 3000;

function slide1() {
  document.getElementById("motores").src = "assets/mercury.png";
  setTimeout("slide2()",intervalo);
}

function slide2() {
  document.getElementById("motores").src = "assets/yamaha.png"
  setTimeout("slide3()",intervalo);
}

function slide3() {
  document.getElementById("motores").src = "assets/evinrude.png"
  setTimeout("slide1()",intervalo);
}
