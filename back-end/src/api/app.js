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

const orders = require('../database/controllers/OrderController');

const admin = require('../database/controllers/AdminController');

const salesProducts = require('../database/controllers/SalesProductsController');

const sales = require('../database/controllers/SaleController');

app.post('/login', isEmailValid, isPasswordValid, login.loginController);

app.post('/register', isNameValid, isEmailValid, isPasswordValid, user.createUser);

app.get('/products', validateJWT, products.getAllProducts);

app.post('/orders', validateJWT, orders.createOrder);

app.get('/user', validateJWT, user.getAllSellers);

app.post('/admin', validateJWT, admin.createUserByAdmin);

app.get('/admin', validateJWT, admin.getAllUsers);

app.get('/orders/:id', validateJWT, salesProducts.getSalesProductsById);

app.patch('/orders/:id', validateJWT, sales.updateSaleStatusById);

app.get('/orders', validateJWT, orders.getAllOrders);

app.delete('/admin/:id', validateJWT, admin.deleteUser);

module.exports = app;
