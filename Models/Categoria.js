
import connection from "../utils/db.js";
// importamos la conexion de la base de datos

class Categoria{// creamos la clase
    constructor(id, nombre, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;// inicializamos las variables
    }
    /**
     * Metodo para obtener todas los Registros de la bases de Datos
     * 
     * @returns {array}                                                 
     */
    async getId(){// creamos un metodo para obtener todo
        try {
            const  [rows] = await connection.query("SELECT * FROM categorias"); // ejecutamos lla consulta 
            console.log(rows); // mostramos en consola lo que se obtiene de la consulta
        } catch (error) {
            throw new Error("Errro no se pede establecer la conexion a la base de datos"); // si hay un error mostramos un mensaje en consola
        }
        
    }

}

export default Categoria; // exportamos la clase Categoria para usarla en 