const express = require('express');
const {
    createPersona,
    listPersonas,
    deletePersona,
} = require('../controllers/personaController');

const router = express.Router();

router.post('/', createPersona); // Crear una persona
router.get('/', listPersonas);  // Listar todas las personas
router.delete('/:id', deletePersona); // Eliminar una persona

module.exports = router;
