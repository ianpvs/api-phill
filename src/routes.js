const express = require('express');

const UserController = require('./controllers/UserController');

const routes = new express.Router();

routes.get('/', (req, res) => {
    res.send('hello')
})
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

module.exports = routes;