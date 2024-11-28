const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; // Extrae el header de autorización
    if (!authHeader) return res.status(403).json({ message: 'Token no proporcionado' });

    const token = authHeader.split(' ')[1]; // Obtén el token después de "Bearer"
    console.log('Token recibido:', token); // Imprime el token después de definirlo

    if (!token) return res.status(403).json({ message: 'Token mal formado' });

    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Token inválido' });

        req.userId = decoded.id; // Guarda el ID del usuario decodificado
        next(); // Pasa al siguiente middleware
    });
};

module.exports = verifyToken;

