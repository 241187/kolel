
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:

    function doWhile(num) {
        var contador=0;
         do{
            num=num+5;
            contador++;
        }
        while(contador<8);
        console.log(num);}
doWhile(2);