const express = require('express');
const authRoutes = require('./routes/authRoutes');
const libroRoutes = require('./routes/libroRoutes');
const personaRoutes = require('./routes/personaRoutes');
const prestamoRoutes = require('./routes/prestamoRoutes');
const verifyToken = require('./middlewares/authMiddleware');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Para poder leer el cuerpo de las solicitudes en formato JSON


// Rutas públicas
app.use('/auth', authRoutes);

// Rutas protegidas
app.use('/libros', verifyToken, libroRoutes);
app.use('/personas', verifyToken, personaRoutes);
app.use('/prestamos', verifyToken, prestamoRoutes);



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
