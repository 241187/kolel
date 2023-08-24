
    // La función recibe tres números distintos.
    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    // Si todos los argumentos son cero, retornar ---> "Error".
    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
    // Tu código:

    function operadoresLogicos(num1, num2, num3) {
        if (num1,num2,num3===0){
            console.log("Error");}
        else if(num1>num2 && num1>num3 && num1>0){
            console.log("Numero 1 es mayor y positivo");}
            else if(num1<0 ||num2<0 ||num3<0){
                console.log("Hay negativos");}
                else if(num3>num1 && num3>num2){
                    console.log(num3+1);}
            else{
                console.log(false);
            }}
          
                    operadoresLogicos(0,0,0);

                    
                        

                   

                          