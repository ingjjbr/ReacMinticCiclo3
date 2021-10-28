const usuarioModel = require('../modelado/usuario');
listUsuarios = (req,res)=>{ /*traer los datos*/
    console.log(req.params);
    usuarioModel.find().then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};

getUsuarios = (req,res)=>{ /*traer un solo dato*/
    console.log(req.params);
    usuarioModel.find({_id: req.params.id}).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};

createUsuarios=  (req,res)=>{ /*crear*/
    console.log(req.params, req.body,req.headers);
    usuarioModel.create(req.body).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};

modifyUsuarios=(req,res)=>{ /*modificar*/
    console.log(req.parmas, req.body, req.headers);
    usuarioModel.findByIdAndUpdate(req.params.id, req.body).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};


deleteUsuarios = (req,res)=>{ /*eliminar*/
    console.log(req.params);
    usuarioModel.findByIdAndDelete(req.params.id).then(data =>{
        res.json(data);
    }).catch(err =>{
        res.send(err);
    });
};

module.exports = {
    listUsuarios,
    getUsuarios,
    createUsuarios,
    modifyUsuarios,
    deleteUsuarios
}