const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5174;

// Simulando una base de datos muy simple en memoria
const users = {
    admin: { password: 'password123' } // Asegúrate de usar un método más seguro en producción
};

// Ruta para manejar el login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username].password === password) {
        const token = jwt.sign({ username }, 'tu_secreto', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
});

// Middleware para proteger rutas
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, 'tu_secreto', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Ruta protegida
app.get('/api/secret', authenticateToken, (req, res) => {
    res.json({ message: "Success", user: req.user });
});

// Configuración para servir el frontend en producción
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '..', 'dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
  
