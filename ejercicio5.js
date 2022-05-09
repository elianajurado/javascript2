function contrasena(longitud, contrasena){
    this.longitud = longitud;
    this.contrasena = contrasena;

    this.esFuerte = function(){
        var mayusculas =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","Z"];
        var contrasena_array = contrasena.split(" ");
        var rep_mayuscu =0;
        for (let i = 0; i < mayusculas.length; i++) {
            for (let j = 0; j < contrasena_array.length; j++) {
                if(mayusculas[i] == contrasena_array[j]){
                    return true;
                }if(mayusculas[i] !== contrasena_array[j]){
                    return false;
                }
            }
            
        }
    }
}

let objetoContrasena = new contrasena (10, "ABCDEFGHIJKLMNOPQRSTUVZ");