const express = require('express');
const routet = express.Router();
const userController = require('./user.conttroller');
routet.post('/register',userController.register);
routet.post('/login',userController.login);
routet.get('/allUsers',userController.allUsers);

module.exports = routet;