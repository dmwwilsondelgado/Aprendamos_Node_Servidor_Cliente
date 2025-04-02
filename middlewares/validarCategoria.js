export const validarCategoria = (req, res, next) => {
    const {nombre,descripcion} = req.body; // destructuramos el body de la peticion
    if (!nombre.trim() === ""||!descripcion.trim() === "") { // verificamos que el nombre y la descripcion no esten vacios
        return res.status(400).json("el nombre en la categoria es obligatorio"); // devolvemos un error 400 si no llegan los datos     
    }
    if (!descripcion.trim() === ""||!nombre.trim() === "") {
        return res.status(400).json("la descripcion en la categoria es obligatorio"); // devolvemos un error 400 si no llegan los datos
    }   
    next();
}