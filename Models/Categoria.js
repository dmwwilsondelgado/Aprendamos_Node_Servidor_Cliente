import connection from "../util/db.js";
// importamos la conexion de la base de datos
class Categoria{// creamos la clase
    // constructor( nombre, descripcion){
    //     this.nombre = nombre;
    //     this.descripcion = descripcion;// inicializamos las variables
    // }
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
    async create(nombre){
        try {
            const [result] = await connection.query("INSERT INTO categorias (nombre, descripcion) VALUES (?,?)", [this.nombre, this.descripcion]); // ejecutamos la consulta para insertar los datos
        return{
            id: result.insertId,
            nombre,descripcion
        }
        } catch (error) {
            throw new Error("Errror al crear la Categoria");            
        }
        
    }
    async update(id){
        try {
            console.log("desde la clase ",nombre,descripcion,id); // mostramos en consola los datos obtenidos
            const [result] = await connection.query("UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?", [nombre, descripcion,id]); // ejecutamos la consulta para actualizar los datos
            if (result.affectedRows === 0) {
                throw new Error("No se encontro la categoria"); // si no se encuentra la categoria mostramos un mensaje en consola
            }
            return {
                id,nombre,descripcion
            } // devolvemos los datos actualizados
        } catch (error) {
            console.log(error.mesage); // mostramos en consola los datos obtenidos
            throw new Error("Error al actualizar la Categoria"); // si hay un error mostramos un mensaje en consola
            
        }
    }
    async updateParcial(id){
        try {
            const [result] = await connection.query("UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?", [this.nombre, this.descripcion, id]); // ejecutamos la consulta para actualizar los datos
            if (result.affectedRows === 0) {
                throw new Error("No se encontro la categoria"); // si no se encuentra la categoria mostramos un mensaje en consola
            }
            return {
                id: id,
                nombre: this.nombre,
                descripcion: this.descripcion
            } // devolvemos los datos actualizados
        } catch (error) {
            console.log(error.mesage); // mostramos en consola los datos obtenidos
            throw new Error("Error al actualizar la Categoria"); // si hay un error mostramos un mensaje en consola
            
        }
    }
    async pacth(id,campos){
        try {
        
            let sql = "UPDATE categorias SET "; // creamos la consulta para actualizar los datos
            for (let cont = 0; cont < Object.keys(campos).length ; cont++) {
                console.log(campos[Object.keys(campos)[cont]]); // mostramos en consola los campos obtenidos
                let values = campos[Object.keys(campos)[cont]]; // obtenemos los valores de los campos
                sql += `SET  ${values} = '${campos[values]}' `; // creamos la consulta para actualizar los datos
                if (cont < Object.keys(campos).length - 1) {
                    sql += " "; // si no es el ultimo campo agregamos una coma
                }
                else  
                {
                    sql += " "; // si es el ultimo campo agregamos un espacio  
                }
    
                sql += `WHERE id = ${id}`; // agregamos la condicion para actualizar los datos
                console.log(sql); // mostramos en consola la consulta
            }
        
        } catch (error) {
            
        }
    }
}
export default Categoria; // exportamos la clase Categoria para usarla en 