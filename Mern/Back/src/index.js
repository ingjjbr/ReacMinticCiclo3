const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
require('dotenv').config();
const mongoose = require('./database/connection');
const rutaVentas = require('./rutas/rutaVentas');
const rutaUsuarios = require('./rutas/rutaUsuarios');
const rutaAuth = require('./rutas/rutaAuth');
const rutaProductos = require('./rutas/rutaProductos');

app.use('/ventas',rutaVentas);
app.use('/usuarios',rutaUsuarios);
app.use('/auth',rutaAuth);
app.use('/productos',rutaProductos);
//const ventaModel = require('./modelado/venta');

app.listen(process.env.PORT, ()=>{
    console.log('El servidor esta corriendo en el puerto 3001');
});