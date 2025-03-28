import mysql from 'mysql2/promise';
// creamos la conxeion ala base de datos

const connection = await mysql.createConnection({
    host:"localhost",
    user:"Wilsondelgadomoreno",
    password:"1102717619",
    database:"node_adso_wili",
});
