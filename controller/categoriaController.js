
import Categoria from "../Models/Categoria.js"; // Importamos el modelo Categoria


class CategoriaController{
    static getAllCategorias = async (req,res)=>{
        // console.log("Listado de Categorias");
        const objcategoria = new Categoria();
        objcategoria.getAllCategorias(); // llamamos al metodo getAllCategorias de la clase Categoria
        const categorias = await objcategoria.getAll();
        res.json(categorias); // devolvemos las categorias en formato json
    }
}
export default CategoriaController; // exportamos la clase CategoriaController para usarla en app.js