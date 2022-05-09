function formulas (numeroUno, numeroDos){
    this.numeroUno = numeroUno;
    this.numeroDos = numeroDos;

    this.sumar = function(){
        return numeroUno + numeroDos;
    }
}

function fibonacci (limit){
    this.limit = limit;
    this.fibonacciMethod = function(){
        const fib = [0, 1];
        for(let i = 2; i < limit; i++){
            fib[i] = fib[i-1] + fib[i - 2];
        }
        return fib;
    }  
}

function operacion_modulo(cantidad){
    this.cantidad = cantidad;
    this.cantidadResiduo = function(){
        if((cantidad%2)==0){
            return true;
        }else{
            return false;
        }
    }
}

let objetoFormulas = new formulas (37, 27);
let objetoFibonacci = new fibonacci(5);
let objetoResiduo = new operacion_modulo(30);