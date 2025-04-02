import express from 'express'; // importamos express para declara rutas
import CategoriaController from '../controller/categoriaController.js';
import validarCategoria from '../middlewares/validarCategoria.js'; // importamos el middleware para validar la categoria

const router = express.Router(); // creamos una constante router que es igual a express.Router() para crear rutas


// creamos un parametro para el servidor  con req res que envia y recive datos
router.get('/',CategoriaController.getAllCategorias);


// --------------------------------------------------------------------

router.post('/',validarCategoria,CategoriaController.createCategoria); // creamos la ruta para crear una categoria}

router.put('/:id',CategoriaController.actulizarCategoria); // creamos la ruta para actualizar una categoria


router.patch('/:id',CategoriaController.actualizarParcial); // creamos la ruta para actualizar una categoria


export default router; // exportamos el router para usarlo en app.js