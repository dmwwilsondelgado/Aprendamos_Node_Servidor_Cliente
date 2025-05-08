import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host:"localhost",
    user:"wilsondelgado",
    password:"1102717619",
    database:"node",
});

export default connection;