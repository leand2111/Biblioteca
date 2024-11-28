const Persona = require('../models/persona');

const createPersona = async (req, res) => {
    const { nombre, apellido, dni, telefono } = req.body;

    try {
        const id = await Persona.create(nombre, apellido, dni, telefono);
        res.status(201).json({ id, message: 'Persona creada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listPersonas = async (req, res) => {
    try {
        const personas = await Persona.findAll();
        res.json(personas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePersona = async (req, res) => {
    const { id } = req.params;

    try {
        const affectedRows = await Persona.delete(id);
        if (!affectedRows) return res.status(404).json({ message: 'Persona no encontrada' });

        res.json({ message: 'Persona eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createPersona, listPersonas, deletePersona };
