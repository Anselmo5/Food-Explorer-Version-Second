const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const routes = express.Router();

// Middleware for session
routes.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

routes.use(bodyParser.json());

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
    // Store user information in the session
    req.session.user = user;
    return res.status(200).json({ redirect: user.page });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

// Example protected route
routes.get('/dashboard1', isAuthenticated, (req, res) => {
  res.status(200).json({ message: 'Welcome to Dashboard 1!' });
});

// Example protected route
routes.get('/dashboard2', isAuthenticated, (req, res) => {
  res.status(200).json({ message: 'Welcome to Dashboard 2!' });
});

module.exports = routes;
