import React from "react";
//imagenes
import IconUpdate from '../../img/IconUpdate.ico'
import IconDelete from '../../img/IconDelete.ico'
class UsuarioList extends React.Component{
  render(){
      const usuarios = this.props.usuario;
      const usuarioRow = usuarios.map((us, index)=>{
        return <tr key={index}>
          <td>{us._id}</td>
          <td>{us.name}</td>
          <td>{us.email}</td>
          <td>{us.fecha}</td>
          <td>{us.estado}</td>
          <td>
            <button type="button" onClick={()=>this.props.onEditUsuario(us)}><img src={IconUpdate} className="imagen"
            alt="editar"/></button>
            <button type="button" onClick={()=>this.props.onDeleteUsuario(us._id)}><img src={IconDelete} className="imagen"
            alt="eliminar"/></button>
          </td>
        </tr>    
      });
    return(
      <div className="lista">
        <table>
          <thead className='encabezado'>
            <tr>
              <td>Id</td>
              <td>Valor total</td>
              <td>Fecha</td>
              <td>Hora</td>
              <td>Nombre del cliente</td>
              <td>Numero de identificación</td>
              <td>Estado</td>
              <td>Acción</td>
            </tr>
          </thead>
          <tbody>
            {usuarioRow}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsuarioList;