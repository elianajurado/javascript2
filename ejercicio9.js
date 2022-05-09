function chimuela (joules){
    joules = 0;
    this.comer = function(gramos){
        console.log("Tienes " + joules + " joules de energía");
        joules = joules+(gramos*4);
        console.log("Ahora tienes " + joules +" joules");
    }

    this.volar= function(volar){
        const residuo_gasto = joules - volar;
        if(residuo_gasto < 10 ){
            console.log("Lo sentimos, chimuela esta demasiado cansada para volar :c");
            joules = joules;
        }else{
            joules = residuo_gasto - 10;
            console.log("El gasto por volar " + volar + " kilometros es de "+ volar + " joules");
            console.log("Ahora cuentas con "+ residuo_gasto + " joules de energía");
            console.log("Actualmente chimuela cuenta con " + joules + " de energía");
        }
    }

    this.cuantoQuiereVolar = function(cuantoQuiereVolar){
        cuantoQuiereVolar = 0;
        vuelo = volar/cuantoQuiereVolar;
        console.log(vuelo);
    }
    this.estaDebil = function(){
        if(joules<50){
            console.log("Chimuela esta debil");
        }else{
            console.log("Chimuela se encuentra bien");
        }
    }

    this.estaFeliz = function(){
        if(joules=> 500 && joules<=1000){
            console.log("Chimuela está feliz")
        }else{
            console.log("Chimuela está bien")
        }
    }
}

let objetoChimuela = new chimuela();