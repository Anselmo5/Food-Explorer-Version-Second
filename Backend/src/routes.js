const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const routes = express.Router();

routes.use(bodyParser.json());

const secretKey = 'your-secret-key';

const users = [
  {
    id: 1,
    name: 'Anselmo',
    email: 'Anselmo@gmail.com',
    password: '1234',
    page: '/home', // Set the page for this user
  },
  {
    id: 2,
    name: 'Bruno',
    email: 'Brunobandeira@gmail.com',
    password: '1234',
    page: '/adm', // Set the page for this user
  },
];

routes.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    // Gerar um token JWT
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

    return res.status(200).json({ token, redirect: user.page });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Middleware para verificar se o usuário está autenticado
function isAuthenticated(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    // Verificar o token JWT
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      } else {
        req.userId = decoded.userId;
        return next();
      }
    });
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

// Exemplo de rota protegida
routes.get('/home', isAuthenticated, (req, res) => {
  res.status(200).json({ message: 'Welcome to Dashboard 1!' });
});

// Exemplo de rota protegida
routes.get('/adm', isAuthenticated, (req, res) => {
  res.status(200).json({ message: 'Welcome to Dashboard 2!' });
});

module.exports = routes;
