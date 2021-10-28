const express = require('express');
const controlAuth = require('../controlador/controlAuth');

const rutaAuth = express.Router();

rutaAuth.post('/google',controlAuth.googleAuth);

module.exports= rutaAuth;