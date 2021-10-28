var express = require('express');
var rutaUsuarios = express.Router();
const controlUsuarios = require('../controlador/controlUsuarios');
const tokenMW = require('../middlewares/tokenMW');

//rutaUsuarios.use(tokenMW.verifyToken);
rutaUsuarios.route('/')
    .get(controlUsuarios.listUsuarios)
    .post(controlUsuarios.createUsuarios);

rutaUsuarios.route('/:id')
    .get(controlUsuarios.getUsuarios)
    .put(controlUsuarios.modifyUsuarios)
    .delete(controlUsuarios.deleteUsuarios);


module.exports = rutaUsuarios;