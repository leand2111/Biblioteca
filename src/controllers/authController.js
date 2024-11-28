const Bibliotecario = require('../models/bibliotecario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const { mail, pass } = req.body;

    try {
        const user = await Bibliotecario.findByMail(mail);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        const isMatch = await bcrypt.compare(pass, user.pass);
        if (!isMatch) return res.status(401).json({ message: 'Contraseña incorrecta' });

        const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
        console.log('Token generado:', token);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Función para crear un bibliotecario
const crearBibliotecario = async (req, res) => {
    const { mail, pass } = req.body;

    // Verificar que se pasen ambos parámetros
    if (!mail || !pass) {
        return res.status(400).json({ message: 'Mail y contraseña son requeridos.' });
    }

    try {
        // Llamar al modelo para crear el bibliotecario
        const bibliotecarioId = await Bibliotecario.create(mail, pass);
        res.status(201).json({ message: 'Bibliotecario creado exitosamente', id: bibliotecarioId });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el bibliotecario', error: error.message });
    }
};

module.exports = { login, crearBibliotecario };


