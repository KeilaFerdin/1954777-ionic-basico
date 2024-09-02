var usuarioTxt = document.getElementById("usuarioTxt");
var passwordTxt = document.getElementById("passwordTxt");

var parrafo = document.querySelector("p");

function iniciarSesion() {
  //....
  var usuarioValor = usuarioTxt.value;
  //parrafo.innerHTML = "Login correcto " + usuarioValor;

  parrafo.innerHTML = `Login correcto <strong>${usuarioValor}</strong>`;
}

function registro() {
  //...
  var usuarioValor = usuarioTxt.value;
  //parrafo.innerHTML = "Registro con éxito " + usuarioValor;
  parrafo.innerHTML = `Registro con éxito <strong>${usuarioValor}</strong>`;
}