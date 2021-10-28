const productoModel = require('../modelado/producto');
listProductos = (req,res)=>{ /*traer los datos*/
    console.log(req.params);
    productoModel.find().then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};

getProductos = (req,res)=>{ /*traer un solo dato*/
    console.log(req.params);
    productoModel.find({_id: req.params.id}).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};

createProductos =  (req,res)=>{ /*crear*/
    console.log(req.params, req.body,req.headers);
    productoModel.create({
        
    }).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};

modifyProductos=(req,res)=>{ /*modificar*/
    console.log(req.parmas, req.body, req.headers);
    productoModel.findByIdAndUpdate(req.params.id, req.body).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};


deleteProductos = (req,res)=>{ /*eliminar*/
    console.log(req.params);
    productoModel.findByIdAndDelete(req.params.id).then(data =>{
        res.json(data);
    }).catch(err =>{
        res.send(err);
    });
};

module.exports = {
    listProductos,
    getProductos,
    createProductos,
    modifyProductos,
    deleteProductos
}