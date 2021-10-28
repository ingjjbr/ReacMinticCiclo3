const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    codigo: {type: String, required: true, unique: true},
    nombreProd: {type: String, required: true},
    descripcion: {type: String, required: true},
    categoria: { type: String, required: true},
    valorUnitario:{type: Number, required: true},
    estado: {type: String, required: true},
    fecha:{type: Date, default: Date.now }
});

const productoModel = mongoose.model('producto',productoSchema);
module.exports=productoModel;