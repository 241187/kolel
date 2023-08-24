
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   function obtenerMayor(x, y) {
  if (x<y){
    console.log (y);}
    else if (x>y){
        console.log(x);}
        else{
        console.log (x||y);}
    }
  
  obtenerMayor(8,4);