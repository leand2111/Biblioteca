const db = require('../config/db');

const Prestamo = {
    async create(id_persona, id_libro, desde, hasta) {
        const query =
            'INSERT INTO prestamo (id_persona, id_libro, desde, hasta) VALUES (?, ?, ?, ?)';
        const [result] = await db.execute(query, [id_persona, id_libro, desde, hasta]);
        return result.insertId;
    },

    async findAll() {
        const query = `
            SELECT p.id, pe.nombre AS persona, pe.apellido, l.nombre AS libro, p.desde, p.hasta
            FROM prestamo p
            JOIN persona pe ON p.id_persona = pe.id
            JOIN libro l ON p.id_libro = l.id
        `;
        const [rows] = await db.execute(query);
        return rows;
    },
    async delete(id) {
        const query = 'DELETE FROM prestamo WHERE id = ?';
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    },
    
    
};

module.exports = Prestamo;
