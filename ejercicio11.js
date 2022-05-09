function libro (num_ejem_libro, num_ejem_prestados){
    this.num_ejem_libro = num_ejem_libro;
    this.num_ejem_prestados = num_ejem_prestados;

    this.prestamo = function(num_ejem_prestados){
        if(num_ejem_libro > num_ejem_prestados){
            num_ejem_libro = num_ejem_libro - num_ejem_prestados;
            return true;
        }else{
            return false;
        }
    }

    this.devolucion = function(devolucion_libros){
        if(devolucion_libros>num_ejem_prestados){
            return false;
        }else{
            num_ejem_prestados = num_ejem_prestados - devolucion_libros;
            return true;
        }
    }

    this.toString = function(){
        console.log("El numero de ejemplares disponibles son " + num_ejem_libro);
        console.log("El numero de ejemplares prestados son " + num_ejem_prestados);
    }
}

let objetoLibros = new libro(40, 5)