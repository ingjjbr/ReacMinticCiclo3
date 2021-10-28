import React from 'react';
import axios from 'axios';
//import'./App.css';
import UsuarioForm from './UsuarioForm';
import UsuarioList from './UsuarioList';

//export class Ventas extends React.Component
//const urlb = this.process.env.REACT_APP_BACKEND;
//console.log(urlb);
export class Usuarios extends React.Component {
  constructor(props) {
    super(props);
    //this.ruta = process.env.REACT_APP_BACKEND'/usuarios';
    this.ruta=`${this.props.BACKEND}/usuarios`;
    this.emptyUsuario = { _id: -1, name: '', email: '', password: '' };
    /*const initVentas = [
      {Id:3,valorTotal:50000,fecha:'10/10/2010',nombreCliente:'juan',nId:395049,state:'en proceso'}
    ];*/
    this.state = {
      usuarios: [],
      selectedUsuario: this.emptyUsuario
    };
    this.onFormChange = this.onFormChange.bind(this);
    this.onEditUsuario = this.onEditUsuario.bind(this);
    this.onDeleteUsuario = this.onDeleteUsuario.bind(this);
    this.onClearUsuario = this.onClearUsuario.bind(this);
    this.onSaveUsuario = this.onSaveUsuario.bind(this);
  }

  componentDidMount() {
    axios.get(this.ruta, {
      headers: {
        'token': sessionStorage.getItem('token')
      }
    }).then((resp) => {
      console.log('Esta es la respuesta de listar ventas', resp);
      //const ventas = resp.data.filter(st => st.nId===10408970);
      this.setState({ usuarios: resp.data });
    }).catch(err => {
      console.log('Hubo un error', err);
    });
  }
  //resp.data
  onFormChange(usuarioCurrentState) {
    console.log('cambio el formulario', usuarioCurrentState);
    this.setState({ selectedUsuario: usuarioCurrentState });
  }

  onEditUsuario(usuario) {
    console.log('quiero editar una venta', usuario);
    this.setState({ selectedUsuario: usuario });
  }

  onDeleteUsuario(usuarioId) {
    console.log('quiero eliminar una venta', usuarioId);
    var confirmar = window.confirm("El elemento se eliminara permanentemente");
    if (confirmar === true) {
      axios.delete(`${this.ruta}/${usuarioId}`, {
        headers: {
          'token': sessionStorage.getItem('token')
        }
      }).then(data => {
        this.setState((state, props) => ({
          ventas: this.state.usuarios.filter(st => st._id !== usuarioId),
          selectedUsuario: this.emptyUsuario
        }))
      }).catch(err => { console.log('error borrando') });
    }
  }

  onClearUsuario() {
    console.log('limpiar');
    document.getElementById('form').style.display = 'none';
    //this.setState({selectedVentas: this.emptyVenta});
  }

  onSaveUsuario(evt) {
    evt.preventDefault();
    const usuario= this.state.selectedUsuario;
    if (this.state.selectedUsuario._id === -1) {
      console.log('vamos a hacer un POST', this.state.selectedUsuario);
      axios.post(this.ruta, { ...usuario ,_id:null}, {
        headers: {
          'token': sessionStorage.getItem('token')
        }
      }).then((resp) => {
        console.log('Todo bien con el post', resp);
        this.setState((state, props) => ({
          usuarios: [...state.usuarios, resp.data],
          selectedUsuario: this.emptyUsuario
        }))
      }).catch(err => {
        console.log('error al hacer post', err);
      });
    }
  }
  
  render() {
    return (
      <div className="container">
        <div className="banner">
          <h1>Administración ventas</h1>
          <input type="text" placeholder="Buscar.." className="buscador" />
        </div>
        <UsuarioList usuario={this.state.usuarios}
          onEditUsuario={this.onEditUsuario}
          onDeleteUsuario={this.onDeleteUsuario}
        />
        <UsuarioForm usuario={this.state.selectedUsuario}
          onFormChange={this.onFormChange}
          onClearUsuario={this.onClearUsuario}
          onSaveUsuario={this.onSaveUsuario}
        />
      </div>
    );
  }
}
//export default Ventas;