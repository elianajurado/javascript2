function contador (contador){
    let contador = 0;

    this.dec = function(){
        contador--;
        console.log(contador);
    }

    this.inc = function(){
        contador++;
        console.log(contador);
    }

    this.reset = function(){
        contador = 0;
        console.log(contador);
    }

    this.valorActual = function(){
        console.log(contador)
    }
}

let objetoContador = new contador(0);

