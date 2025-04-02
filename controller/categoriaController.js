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
            const categoria = await objcategoria.update(id); // llamamos al metodo update de la clase Categoria
            res.json(categoria);// devolvemos la categoria actualizada en formato json

        } catch (error) {
            res.status(500).json({error: error.message}); // si hay un error mostramos un mensaje en consola 
        }
    }
    static actualizarParcialCategoria = async ( req, res) =>{
        const{id} = req.body; // obtenemos los datos del body
        console.log(Object.keys(campos).length); // mostramos en consola la cantidad de campos obtenidos
        // let sql = "UPDATE categorias SET "; // creamos la consulta para actualizar los datos
        // for (let cont = 0; cont < Object.keys(campos).length ; cont++) {
        //     console.log(campos[Object.keys(campos)[cont]]); // mostramos en consola los campos obtenidos
        //     let values = campos[Object.keys(campos)[cont]]; // obtenemos los valores de los campos
        //     sql += `SET  ${values} = '${campos[values]}' `; // creamos la consulta para actualizar los datos
        //     if (cont < Object.keys(campos).length - 1) {
        //         sql += " "; // si no es el ultimo campo agregamos una coma
        //     }
        //     else  
        //     {
        //         sql += " "; // si es el ultimo campo agregamos un espacio  
        //     }

        //     sql += `WHERE id = ${id}`; // agregamos la condicion para actualizar los datos
        //     console.log(sql); // mostramos en consola la consulta
        // }
        
        
        // const {nombre,descripcion} = req.body // obtenemos los datos 
        // const {id} = req.params; // obtenemos el id de la categoria
        // const objcategoria = new Categoria(nombre,descripcion); // creamos un objeto de la clase Categoria
        // try{
        //     const categotia = await objcategoria.update(id); // llamamos al metodo update de la clase Categoria
        //     res.json(categotia); // devolvemos la categoria actualizada en formato json
        // }
        // catch (error) {
        //     res.status(500).json({error: error.message}); // si hay un error mostramos un mensaje en consola 
        // }
    }
}
export default CategoriaController; // exportamos la clase CategoriaController para usarla en app.js