const db = require('../config/db');

const Persona = {
    async create(nombre, apellido, dni, telefono) {
        const query = 'INSERT INTO persona (nombre, apellido, dni, telefono) VALUES (?, ?, ?, ?)';
        const [result] = await db.execute(query, [nombre, apellido, dni, telefono]);
        return result.insertId;
    },

    async findAll() {
        const query = 'SELECT * FROM persona';
        const [rows] = await db.execute(query);
        return rows;
    },

    async findById(id) {
        const query = 'SELECT * FROM persona WHERE id = ?';
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    },

    async delete(id) {
        const query = 'DELETE FROM persona WHERE id = ?';
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    },
};

module.exports = Persona;
