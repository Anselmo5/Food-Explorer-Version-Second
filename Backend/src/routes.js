const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const routes = express.Router();

routes.use(bodyParser.json());

const secretKey = 'your-secret-key';

let users = [
  {
    id: 1,
    name: 'Anselmo',
    email: 'Anselmo@gmail.com',
    password: '1234',
    page: '/home',
  },
  {
    id: 2,
    name: 'Bruno',
    email: 'Brunobandeira@gmail.com',
    password: '1234',
    page: '/adm',
  },
];

routes.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

    return res.status(200).json({ token, redirect: user.page });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

routes.post('/create-user', (req, res) => {
  const { nome, email, senha } = req.body;

  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ message: 'Email already in use' });
  }

  const newUser = {
    id: users.length + 1,
    name: nome,
    email: email,
    password: senha,
    page: '/adm',
  };

  users.push(newUser);

  return res.status(201).json({ message: 'User created successfully', user: newUser });
});

// Restante do código...

module.exports = routes;
