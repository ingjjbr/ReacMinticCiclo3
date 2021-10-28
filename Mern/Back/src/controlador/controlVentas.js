const ventaModel = require('../modelado/venta');
listVentas = (req,res)=>{ /*traer los datos*/
    console.log(req.params);
    ventaModel.find().then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};

getVentas = (req,res)=>{ /*traer un solo dato*/
    console.log(req.params);
    ventaModel.find({_id: req.params.id}).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};

createVentas =  (req,res)=>{ /*crear*/
    console.log(req.params, req.body,req.headers);
    ventaModel.create({
        valorTotal: 2000000,
        nombreCliente:"Victor rodriguez",
        nId: 10408870,
        state: "En proceso"
    }).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};

modifyVentas=(req,res)=>{ /*modificar*/
    console.log(req.parmas, req.body, req.headers);
    ventaModel.findByIdAndUpdate(req.params.id, req.body).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.send(err);
    });
};


deleteVentas = (req,res)=>{ /*eliminar*/
    console.log(req.params);
    ventaModel.findByIdAndDelete(req.params.id).then(data =>{
        res.json(data);
    }).catch(err =>{
        res.send(err);
    });
};

module.exports = {
    listVentas,
    getVentas,
    createVentas,
    modifyVentas,
    deleteVentas
}