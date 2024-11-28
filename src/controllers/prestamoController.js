const Prestamo = require('../models/prestamo');

const createPrestamo = async (req, res) => {
    const { id_persona, id_libro, desde, hasta } = req.body;

    try {
        const id = await Prestamo.create(id_persona, id_libro, desde, hasta);
        res.status(201).json({ id, message: 'Préstamo creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamo.findAll();
        res.json(prestamos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const deletePrestamo = async (req, res) => {
    const { id } = req.params;

    try {
        const affectedRows = await Prestamo.delete(id);
        if (!affectedRows) {
            return res.status(404).json({ message: 'Préstamo no encontrado' });
        }
        res.json({ message: 'Préstamo eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = { createPrestamo, listPrestamos, deletePrestamo };

