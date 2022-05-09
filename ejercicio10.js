function calculadora (numero){
    this.numero = numero;

    this.cargarNumero = function(numero){
        numero = numero;
        console.log("El numero ingresado es " + numero);
    }

    this.sumar = function(suma){
        suma = numero + suma;
        console.log("La suma de " + numero + " + " + suma + " es igual a " + suma);
        numero = suma;
    }

    this.restar = function(resta){
        resta = numero - resta;
        console.log("La resta de " + numero + " - " + resta + " es igual a " + resta);
        numero = resta;
    }

    this.multiplicar = function(multiplicacion){
        multiplicacion = numero * multiplicacion;
        console.log("La multiplicación de " + numero + " * "+ multiplicacion + " es igual " + multiplicacion);
        numero = multiplicacion;
    }

    this.valorActual = function(){
        console.log("El valor actual es " + numero);
    }
}

let objetoCalculadora = new calculadora(0)