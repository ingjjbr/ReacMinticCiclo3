import React from 'react';
import axios from 'axios';
//import'./App.css';
//import ProductoForm from './ProductosForm';
import ProductoList from './ProductosList';
import IconLupa from '../../img/lupa.png';


export class Productos extends React.Component{
  constructor(props){
    super(props);
    this.ruta = 'http://localhost:3001/productos';
    this.emptyProducto = { _id:'',nombreProducto:'',descripcion:'',categoria:'',valorUnitario:'',estadoprod:'',fecha:''};
    /*const initProductos = [
      {Id:3,valorTotal:50000,fecha:'10/10/2010',nombreCliente:'juan',nId:395049,state:'en proceso'}
    ];*/
    this.state = {
      productos :[],
      selectedProductos: this.emptyProducto
    };
    this.onFormChange = this.onFormChange.bind(this);
    this.onEditProducto = this.onEditProducto.bind(this);
    this.onDeleteProducto = this.onDeleteProducto.bind(this);
    this.onClearProducto = this.onClearProducto.bind(this);
    this.onSaveProducto = this.onSaveProducto.bind(this);
  }

  componentDidMount(){
    axios.get(this.ruta,{
      headers:{
        'token':sessionStorage.getItem('token')
      }
    }).then((resp)=>{
      console.log('Esta es la respuesta de listar productos',resp);
      const filtrarproductos = resp.data.filter(st => st._id===this.state.busqueda);
      this.setState({productos:filtrarproductos});
    }).catch(err =>{
      console.log('Hubo un error',err);
    });
  }
//resp.data
  onFormChange(productoCurrentState){
    console.log('cambio el formulario',productoCurrentState);
    this.setState({selectedProductos: productoCurrentState});
  }

  onEditProducto(producto){
    console.log('quiero editar una producto',producto);
    document.getElementById('form').style.display='block';
    this.setState({selectedProductos:producto});
  }

  onDeleteProducto(productoId){
    console.log('quiero eliminar una producto',productoId);
    var confirmar = window.confirm("El elemento se eliminara permanentemente");
    if(confirmar===true){
      axios.delete(`${this.ruta}/${productoId}`,{
        headers:{
          'token':sessionStorage.getItem('token')
        }
      }).then(data=>{
        this.setState((state,props)=>({
          productos:this.state.productos.filter(st=>st._id !== productoId),
          selectedProductos:this.emptyProducto
        }))
      }).catch(err =>{console.log('error borrando')});
    }
  }

  onClearProducto(){
    console.log('limpiar');
    this.setState({selectedProductos: this.emptyProducto});
  }

  onSaveProducto(evt){
    evt.preventDefault();
    const producto = this.state.selectedProductos;
    console.log('vamos a hacer un PUT', this.state.selectedProductos);
      axios.put(`${'http://localhost:3001/productos'}/${producto._id}`, { ...producto },{
        headers:{
          'token':sessionStorage.getItem('token')
        }
      }).then((resp) => {
        console.log('Todo correcto', resp);
        this.setState((state, props) => ({
          productos: state.productos.map(st => st._id === producto._id ? producto : st),
          selectedProductos: this.emptyProducto
        }))
        document.getElementById('form').style.display='none';
        alert('cambios guardados correctamente');
      }).catch(err => {
        console.log('error al hacer post', err);
      });
    }
  //<input type="text" placeholder="Buscar.." className="buscador"/> 
  //Busqueda
  state={
    busqueda: '',
   
  }

onChange=async e=>{
    e.persist();
    await this.setState({busqueda: e.target.value});
    //this.filtrarElementos();
    console.log(this.state.busqueda);
  }

  render(){
    return(
      <div className="container"> 
        <div className="banner">
          <h1>Administración productos</h1>
          <input type="text" placeholder="Buscar.." className="buscador" name="busqueda" value={this.state.busqueda}onChange={this.onChange}/>
          -<button type="button" className="btnBuscar" /*onClick={onClear}*/>
              {" "}
              <img src={IconLupa} className="imagen"
            alt="buscar"/>
            
            </button>
        </div> 
      <ProductoList productos={this.state.productos} 
      onEditProducto={this.onEditProducto}
      onDeleteProducto={this.onDeleteProducto}
      />
   
     
      </div>
    );
  }
}