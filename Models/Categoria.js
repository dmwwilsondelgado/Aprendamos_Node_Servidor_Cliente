import connection from "../utils/db.js";

class Categoria{
  /**
   * Metodo para obtener los registros de la base de datos
   * @returns  {Array} listado de las categorias en un arreglo
   */
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM categorias");
      return rows;
    } catch (error) {
      throw new Error("ERROR: al obtener categorias");
    }
  }

  async create(nombre,descripcion) {
    try {
      const [result] = await connection.query("INSERT INTO categorias (nombre,descripcion) VALUES (?,?)",
        [nombre, descripcion]);
      return { id: result.id, nombre,  descripcion }
    } catch (error) {
      throw new Error("ERROR: Al crear la categoria");
    }
  }
  async update(nombre,descripcion,id) {
    try {
      const [result] = await connection.query("UPDATE categorias SET nombre = ? ,descripcion = ? WHERE id = ?",
        [nombre, descripcion, id]);
      
      if (result.affectedRows === 0) {
        throw new Error("Categoria no encontrada");
      }
      return { id, nombre, descripcion }
    } catch (error) {
      throw new Error("ERROR: Al Actualizar la categoria");
    }
  }
}
export default Categoria;