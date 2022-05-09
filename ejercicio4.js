function persona(nombre, edad, cedula, sexo, peso, altura){
    this.nombre = nombre;
    this.edad = edad;
    this.cedula = cedula;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;

    this.calcularIMC = function(){
        const pesoIdeal = (peso/(altura^2));
        if(pesoIdeal<20){
            return -1;
        }else if(pesoIdeal=>20 && pesoIdeal<= 25){
            return 0;
        }else if(pesoIdeal>25){
            return 1;
        }
    }

    this.esMayordeEdad = function(){
        if(edad=>18){
            return true;
        }else{
            return false;
        }
    }

    this.comprobarSexo = function(){
        if(sexo === "M" || sexo ==="H"){
            console.log("El sexo introducido es: " + sexo);
        }else{
            sexo = "H";
            console.log("Tu sexo es: " + sexo);
        }
    }
}

let objetoPersona = new persona ("Eliana", 21, 1007227111, "k", 50, 1.63)