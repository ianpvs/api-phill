const express = require('express');

const UserController = require('./controllers/UserController');
const PhillController = require('./controllers/PhillController');

const routes = new express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/phill', PhillController.index);
routes.post('/phill', PhillController.store);

module.exports = routes;