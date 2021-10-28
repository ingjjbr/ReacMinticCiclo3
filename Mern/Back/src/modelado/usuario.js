const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    admin:{type:Boolean, default:false},
    password:{type: String},
    estado:{type: String, default:'pendiente'},
    fecha:{type: Date, default: Date.now }
});

   /* name:{type:String, required:true},
    email:{type:String, required:true},
    admin:{type:Boolean, required:true, default:false}*/
const UsuarioModel = mongoose.model('usuario',UsuarioSchema);
module.exports = UsuarioModel;