const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para login
router.post('/login', authController.login);

// Ruta para crear un bibliotecario
router.post('/crear', authController.crearBibliotecario);

module.exports = router;
