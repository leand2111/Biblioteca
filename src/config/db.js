const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'biblioteca',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const db = mysql.createPool({
    host: 'localhost',  // Cambiar si usas otro host
    user: 'root',       // Usuario de la base de datos
    password: 'admin',       // Contraseña de la base de datos
    database: 'biblioteca', // Nombre de tu base de datos
    port: 3306          // Puerto de MySQL
});


module.exports = db;

