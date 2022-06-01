const express = require('express');

const app = express();

app.use(express.json());

const {
  isEmailValid,
  isPasswordValid,
  isNameValid,
} = require('../database/middlewares/LoginMiddleware');

const validateJWT = require('../database/middlewares/auth');

const login = require('../database/controllers/LoginController');

const user = require('../database/controllers/UserController');

app.post('/login', isEmailValid, isPasswordValid, login.loginController);

app.post('/register', isNameValid, isEmailValid, isPasswordValid, user.createUser)

module.exports = app;
