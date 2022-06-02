const express = require('express');
const cors = require('cors');

const app = express();

// https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static('public'));

const {
  isEmailValid,
  isPasswordValid,
  isNameValid,
} = require('../database/middlewares/LoginMiddleware');

const validateJWT = require('../database/middlewares/auth');

const login = require('../database/controllers/LoginController');

const user = require('../database/controllers/UserController');

const products = require('../database/controllers/ProductController');

app.post('/login', isEmailValid, isPasswordValid, login.loginController);

app.post('/register', isNameValid, isEmailValid, isPasswordValid, user.createUser);

app.get('/products', validateJWT, products.getAllProducts);

module.exports = app;
