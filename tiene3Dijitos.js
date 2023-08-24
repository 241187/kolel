
// Si el número recibido tiene tres dígitos retornar true.
// Caso contrario, retornar false.
// Tu código:
function tieneTresDigitos(num) {
   if (num > 99 && num < 1000) {
      console.log(true);
   }
   else {
      console.log(false);
   }
}
tieneTresDigitos(99);
