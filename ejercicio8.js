function chimuela (joules){
    joules = 0;
    this.comer = function(gramos){
        console.log("Tienes " + joules + " joules de energía");
        joules = joules+(gramos*4);
        console.log("Ahora tienes " + joules +" joules");
    }

    this.volar= function(volar){
        const residuo_gasto = joules - volar;
        joules = residuo_gasto - 10;
        if(residuo_gasto < 10 ){
            console.log("Lo sentimos, chimuela esta demasiado cansada para volar :c");
        }else{
            console.log("El gasto por volar " + volar + " kilometros es de "+ volar + " joules");
            console.log("Ahora cuentas con "+ residuo_gasto + " joules de energía");
            console.log("Actualmente chimuela cuenta con " + joules + " de energía");
        }
    }
}

let objetoChimuela = new chimuela();