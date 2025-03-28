import express from 'express'; // importamos una funcion express
import bodyParser from "body-parser";
import categoriasRoutes from "./routes/categoriasRoutes.js"; // importamos las rutas de categoriasRoutes.js

//app.use('routes/categorias', categoriasRoutes); // usamos las rutas de categoriasRoutes.js en la ruta /categorias
//p.use('/categorias', categoriasRoutes); // usamos las rutas de categoriasRoutes.js en la ruta /categorias

app.use()



// Falta Linea de codigo 

const app = express(); // creamos y damos a esta funcion que sea constante  este es el servidor

app.use(bodyParser.json()); // usamos el body parser para que el servidor pueda leer los datos que le enviamos desde postman

app.use(express.urlencoded({ "extended": true })); //Vamos a ahiliotar urlCond
// creamos un parametro para el servidor  con req res que envia y recive datos
app.listen(3000,()=>{// iniciamos el servidor en el puerto 3000
    console.log("Server started on port 3000");// mostramos un mensaje en consola que el servidor se ha iniciado
});