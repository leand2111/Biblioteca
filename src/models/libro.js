const db = require('../config/db');

const Libro = {
    async create(nombre, autor, isbn) {
        console.log('Datos recibidos para crear libro:', { nombre, autor, isbn });

        const query = 'INSERT INTO libro (nombre, autor, isbn) VALUES (?, ?, ?)';
        const [result] = await db.execute(query, [nombre, autor, isbn]);
        return result.insertId;
    },

    async findAll() {
        const query = 'SELECT * FROM libro';
        const [rows] = await db.execute(query);
        return rows;
    },

    async findById(id) {
        const query = 'SELECT * FROM libro WHERE id = ?';
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    },

    async update(id, nombre, autor, isbn) {
        const query = 'UPDATE libro SET nombre = ?, autor = ?, isbn = ? WHERE id = ?';
        const [result] = await db.execute(query, [nombre, autor, isbn, id]);
        return result.affectedRows;
    },

    async delete(id) {
        const query = 'DELETE FROM libro WHERE id = ?';
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    },
};

module.exports = Libro;

