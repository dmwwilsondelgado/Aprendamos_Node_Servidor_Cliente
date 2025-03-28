import connection from "../util/db.js";
// importamos la conexion de la base de datos
class Categoria{// creamos la clase
    constructor( nombre, descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;// inicializamos las variables
    }
    /**
     * Metodo para obtener todas los Registros de la bases de Datos
     * @returns {array}                                                 
     */
    async getAll(){// creamos un metodo para obtener todo
        try {
            const  [rows] = await connection.query("SELECT * FROM categorias"); // ejecutamos lla consulta 
            return rows; // devolvemos lo que se obtiene de la consulta
        } catch (error) {
            throw new Error("Error no se puede establecer la conexion a la base de datos"); // si hay un error mostramos un mensaje en consola
        }
    }
    async create(){
        try {
            const [result] = await connection.query("INSERT INTO categorias (nombre, descripcion) VALUES (?,?)", [this.nombre, this.descripcion]); // ejecutamos la consulta para insertar los datos
        return{
            id: result.insertId,
            nombre: this.nombre,
            descripcion: this.descripcion
        }
        } catch (error) {
            throw new Error("Errror al crear la Categoria");            
        }
        
    }
}
export default Categoria; // exportamos la clase Categoria para usarla en 