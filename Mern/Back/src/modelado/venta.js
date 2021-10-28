const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    valorTotal:{ type: Number, required: true },
    fecha:{ type: Date, default: Date.now},
    nombreCliente:{type:String,required:true},
    nId:{type:Number,required:true},
    state:{type:String,required:true}
});

const ventaModel = mongoose.model('venta',ventaSchema);
module.exports=ventaModel;

