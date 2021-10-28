var express = require('express');
var rutaVentas = express.Router();
const controlVentas = require('../controlador/controlVentas');
const tokenMW = require('../middlewares/tokenMW');

//rutaVentas.use(tokenMW.verifyToken);
rutaVentas.route('/')
    .get(controlVentas.listVentas)
    .post(controlVentas.createVentas);

rutaVentas.route('/:id')
    .get(controlVentas.getVentas)
    .put(controlVentas.modifyVentas)
    .delete(controlVentas.deleteVentas);


module.exports = rutaVentas;