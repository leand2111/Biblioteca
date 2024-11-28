const db = require('../config/db');
const bcrypt = require('bcrypt');

const Bibliotecario = {
    async create(mail, pass) {
        const hashedPass = await bcrypt.hash(pass, 10);
        const query = 'INSERT INTO bibliotecario (mail, pass) VALUES (?, ?)';
        const [result] = await db.execute(query, [mail, hashedPass]);
        return result.insertId;
    },

    async findByMail(mail) {
        const query = 'SELECT * FROM bibliotecario WHERE mail = ?';
        const [rows] = await db.execute(query, [mail]);
        return rows[0];
    },
};

module.exports = Bibliotecario;

