var articulo = document.getElementById("articulo");
var monto = document.getElementById("monto");

var parrafoTotal = document.querySelector("p");
var lista = document.querySelector("ul");

var total = 0;

function calcularTotal() {
  var articuloValue = articulo.value;
  var montoValue = monto.value;

  total = total + parseInt(montoValue);

  var elemento = document.createElement("li");
  elemento.innerHTML = `${articuloValue}.......<strong>$${montoValue}</strong>`;

  lista.appendChild(elemento);

  parrafoTotal.innerHTML = `<strong>Total..........$${total}</strong>`;

  articulo.value = "";
  monto.value = "";
}
