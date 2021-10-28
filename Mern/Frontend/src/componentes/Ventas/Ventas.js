import React from 'react';
import axios from 'axios';
//import'./App.css';
import VentaForm from './VentaForm';
import VentaList from './VentaList';

//export class Ventas extends React.Component
export class Ventas extends React.Component{
  constructor(props){
    super(props);
    //this.ruta = 'http://localhost:3001/ventas';
    this.ruta=`${this.props.BACKEND}/ventas`;
    this.emptyVenta = { _id:'',valorTotal:'',fecha:'',nombreCliente:'',nId:'',state:''};
    /*const initVentas = [
      {Id:3,valorTotal:50000,fecha:'10/10/2010',nombreCliente:'juan',nId:395049,state:'en proceso'}
    ];*/
    this.state = {
      ventas :[],
      selectedVentas: this.emptyVenta
    };
    this.onFormChange = this.onFormChange.bind(this);
    this.onEditVenta = this.onEditVenta.bind(this);
    this.onDeleteVenta = this.onDeleteVenta.bind(this);
    this.onClearVenta = this.onClearVenta.bind(this);
    this.onSaveVenta = this.onSaveVenta.bind(this);
  }

  componentDidMount(){
    axios.get(this.ruta,{
      headers:{
        'token':sessionStorage.getItem('token')
      }
    }).then((resp)=>{
      console.log('Esta es la respuesta de listar ventas',resp);
      //const ventas = resp.data.filter(st => st.nId===10408970);
      this.setState({ventas:resp.data});
    }).catch(err =>{
      console.log('Hubo un error',err);
    });
  }
//resp.data
  onFormChange(ventaCurrentState){
    console.log('cambio el formulario',ventaCurrentState);
    this.setState({selectedVentas: ventaCurrentState});
  }

  onEditVenta(venta){
    console.log('quiero editar una venta',venta);
    document.getElementById('form').style.display='block';
    this.setState({selectedVentas:venta});
  }

  onDeleteVenta(ventaId){
    console.log('quiero eliminar una venta',ventaId);
    var confirmar = window.confirm("El elemento se eliminara permanentemente");
    if(confirmar===true){
      axios.delete(`${this.ruta}/${ventaId}`,{
        headers:{
          'token':sessionStorage.getItem('token')
        }
      }).then(data=>{
        this.setState((state,props)=>({
          ventas:this.state.ventas.filter(st=>st._id !== ventaId),
          selectedVentas:this.emptyVenta
        }))
      }).catch(err =>{console.log('error borrando')});
    }
  }

  onClearVenta(){
    console.log('limpiar');
    document.getElementById('form').style.display='none';
    //this.setState({selectedVentas: this.emptyVenta});
  }

  onSaveVenta(evt){
    evt.preventDefault();
    const venta = this.state.selectedVentas;
    console.log('vamos a hacer un PUT', this.state.selectedVentas);
      axios.put(`${'http://localhost:3001/ventas'}/${venta._id}`, { ...venta },{
        headers:{
          'token':sessionStorage.getItem('token')
        }
      }).then((resp) => {
        console.log('Todo correcto', resp);
        this.setState((state, props) => ({
          ventas: state.ventas.map(st => st._id === venta._id ? venta : st),
          selectedVentas: this.emptyVenta
        }))
        document.getElementById('form').style.display='none';
        alert('cambios guardados correctamente');
      }).catch(err => {
        console.log('error al hacer post', err);
      });
    }
  
  render(){
    return(
      <div className="container"> 
        <div className="banner">
          <h1>Administración ventas</h1>
          <input type="text" placeholder="Buscar.." className="buscador"/> 
        </div> 
      <VentaList ventas={this.state.ventas} 
      onEditVenta={this.onEditVenta}
      onDeleteVenta={this.onDeleteVenta}
      />
      <VentaForm venta={this.state.selectedVentas} 
      onFormChange={this.onFormChange}
      onClearVenta = {this.onClearVenta}
      onSaveVenta={this.onSaveVenta}
      />
      </div>
    );
  }
}
//export default Ventas;