var express = require('express');
var rutaProductos = express.Router();
const controlProductos = require('../controlador/controlProductos');
const tokenMW = require('../middlewares/tokenMW');

//rutaProductos.use(tokenMW.verifyToken);
rutaProductos.route('/')
    .get(controlProductos.listProductos)
    .post(controlProductos.createProductos);

rutaProductos.route('/:id')
    .get(controlProductos.getProductos)
    .put(controlProductos.modifyProductos)
    .delete(controlProductos.deleteProductos);


module.exports = rutaProductos;