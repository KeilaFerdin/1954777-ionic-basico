var campoTexto = document.getElementById("campoTxt");

function imprimirTexto() {
  var texto = campoTexto.value;

  console.log(texto);
}

function borrarTexto() {
  campoTexto.value = "";
}
