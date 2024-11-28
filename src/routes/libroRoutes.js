const express = require('express');
const {
    createLibro,
    listLibros,
    getLibro,
    updateLibro,
    deleteLibro,
} = require('../controllers/libroController');

const router = express.Router();

router.post('/', createLibro); // Crear un libro
router.get('/', listLibros);  // Listar todos los libros
router.get('/:id', getLibro); // Obtener un libro por ID
router.put('/:id', updateLibro); // Actualizar un libro
router.delete('/:id', deleteLibro); // Eliminar un libro

module.exports = router;
