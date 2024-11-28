const express = require('express');
const {
    createPrestamo,
    listPrestamos,
    deletePrestamo,
} = require('../controllers/prestamoController');

const router = express.Router();

router.post('/', createPrestamo); // Crear un préstamo
router.get('/', listPrestamos);  // Listar todos los préstamos
router.delete('/:id', deletePrestamo); // Eliminar un préstamo

module.exports = router;
