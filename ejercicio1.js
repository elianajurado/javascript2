function persona(nombre, edad, cedula){
    this.nombre = nombre;
    this.edad = edad;
    this.cedula = cedula;

    this.mostrar = function(){
        console.log("tu nombre es: " + nombre + ", tienes " + edad + " años y tu numero de cedula es " + cedula)
    } 

    this.mayorDeEdad = function(){
        if(edad >= 18){
            console.log("Eres mayor de edad");
        }else{
            console.log("Eres menor de edad");
        }
    }
}

let objetoPersona = new persona ("Eliana", 18, 1007227111);
objetoPersona.mostrar();
objetoPersona.mayorDeEdad();