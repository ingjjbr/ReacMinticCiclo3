import React from "react";
//imagenes
import IconUpdate from '../../img/IconUpdate.ico'
import IconDelete from '../../img/IconDelete.ico'
class VentaList extends React.Component{
  render(){
      const ventas = this.props.ventas;
      const ventaRow = ventas.map((vt, index)=>{
        return <tr key={index}>
          <td>{vt._id.slice(20)}</td>
          <td>{vt.valorTotal}</td>
          <td>{vt.fecha.slice(0,10)}</td>
          <td>{vt.fecha.slice(11,19)}</td>
          <td>{vt.nombreCliente}</td>
          <td>{vt.nId}</td>
          <td>{vt.state}</td>
          <td>
            <button type="button" onClick={()=>this.props.onEditVenta(vt)}><img src={IconUpdate} className="imagen"
            alt="editar"/></button>
            <button type="button" onClick={()=>this.props.onDeleteVenta(vt._id)}><img src={IconDelete} className="imagen"
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
            {ventaRow}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VentaList;