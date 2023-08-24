
    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:
    function esEntero(num) {
        if(Number.isInteger(num)){
        console.log(true);}
        else{
            console.log(false);
        }
        }
        esEntero(1.2);