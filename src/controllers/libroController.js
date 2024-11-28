const Libro = require('../models/libro');

const createLibro = async (req, res) => {
    const { nombre, autor, isbn } = req.body;

    try {
        const id = await Libro.create(nombre, autor, isbn);
        res.status(201).json({ id, message: 'Libro creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listLibros = async (req, res) => {
    try {
        const libros = await Libro.findAll();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getLibro = async (req, res) => {
    const { id } = req.params;

    try {
        const libro = await Libro.findById(id);
        if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });

        res.json(libro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateLibro = async (req, res) => {
    const { id } = req.params;
    const { nombre, autor, isbn } = req.body;

    try {
        const affectedRows = await Libro.update(id, nombre, autor, isbn);
        if (!affectedRows) return res.status(404).json({ message: 'Libro no encontrado' });

        res.json({ message: 'Libro actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteLibro = async (req, res) => {
    const { id } = req.params;

    try {
        const affectedRows = await Libro.delete(id);
        if (!affectedRows) return res.status(404).json({ message: 'Libro no encontrado' });

        res.json({ message: 'Libro eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createLibro, listLibros, getLibro, updateLibro, deleteLibro };
