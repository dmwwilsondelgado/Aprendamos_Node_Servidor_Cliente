import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host:"localhost",
    user:"Wilsondelgadomoreno",
    password:"1102717619",
    database:"node_adso2894667",
});

export default connection;