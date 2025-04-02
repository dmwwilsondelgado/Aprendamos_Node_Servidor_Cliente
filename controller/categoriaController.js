import { json } from "body-parser";
import Categoria from "../Models/Categoria.js"; // Importamos el modelo Categoria

class CategoriaController{
    static getAllCategorias = async (req,res)=>{
        // console.log("Listado de Categorias");
        const objcategoria = new Categoria();
        objcategoria.getAllCategorias(); // llamamos al metodo getAllCategorias de la clase Categoria
        const categorias = await objcategoria.getAll();
        res.json(categorias); // devolvemos las categorias en formato json
    }
    static createCategoria= async (req,res)=>{
        try {
            const { nombre, descripcion } = req.body; // obtenemos los datos del body
            console.log(nombre, descripcion); // mostramos en consola los datos obtenidos
            const categoria = await objcategoria.create(nombre,descripcion);
            res.status(201);
            json(categoria); // creamos un objeto de la clase Categoria
        //
        } catch (error) {
           res.status(500).json({error: error.message}); // si hay un error mostramos un mensaje en consola 
        }
    }
    static actulizarCategoria = async (req,res)=>{
        const {nombre,descripcion} = req.body; // obtenemos los datos del body
        try {
            const objcategoria = new Categoria(nombre,descripcion); 
            objcategoria.update(id);// creamos un objeto de la clase Categoria

        } catch (error) {
            res.status(500).json({error: error.message}); // si hay un error mostramos un mensaje en consola 
        }
    }
}
export default CategoriaController; // exportamos la clase CategoriaController para usarla en app.js