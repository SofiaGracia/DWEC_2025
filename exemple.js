// "use strict"
// var x = 2;
// var y = 3;
// var z = x + y;
// console.log(z);

// var mensaje = "mensaje de prueba";
// function muestraMensaje(){
//   alert(mensaje);
// }

var mensaje = "gana la de fuera";
function muestraMensaje() {
    var mensaje = "gana la de dentro";
    alert(mensaje);
}
alert(mensaje);
muestraMensaje();
alert(mensaje);
