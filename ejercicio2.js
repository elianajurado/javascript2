function cuenta(titular,cantidad){
    this.titular = titular;
    this.cantidad = cantidad;

    if(titular.length <= 0){
        alert("Debes ingresar el nombre del titular");
    }else{
        console.log("El nombre del titular es " + titular + " y la cantidad es " + cantidad)
        if(cantidad.length <= 0){
            cantidad = parseInt(prompt("Ingresa la cantidad"));
        }else{
            console.log("La cantidad es " + cantidad);
        }
        const retirar = prompt("deseas retirar la cantidad? solo si o no");
        if(retirar === "si"){
            const valor = parseInt(prompt("Cuanto deseas retirar?"));
            console.log("has retirado "+valor);
            const total = cantidad - valor; 
            console.log("El valor total es de " + total);
        }
    }
}

let objetoCuenta = new cuenta ("Eliana", 458900);