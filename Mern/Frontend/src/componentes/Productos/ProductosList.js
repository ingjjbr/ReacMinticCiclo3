import React from "react";
//imagenes
import IconUpdate from '../../img/IconUpdate.ico'
import IconDelete from '../../img/IconDelete.ico'

class ProductoList extends React.Component{
  render(){
      const productos = this.props.productos;
      const productoRow = productos.map((pr, index)=>{
        return <tr key={index}>
          <td>{pr._id.slice(20)}</td>
          <td>{pr.nombreProducto}</td>
          <td>{pr.descripcion}</td>
          <td>{pr.categoria}</td>
          <td>{pr.valorUnitario}</td>
          <td>{pr.estadoprod}</td>
          <td>{pr.fecha.slice(0,10)}</td>
          <td>{pr.fecha.slice(11,19)}</td>
          <td>
            <button type="button" onClick={()=>this.props.onEditproducto(pr)}><img src={IconUpdate} className="imagen"
            alt="editar"/></button>
            <button type="button" onClick={()=>this.props.onDeleteproducto(pr._id)}><img src={IconDelete} className="imagen"
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
              <td>Nombre</td>
              <td>Descripcion</td>
              <td>Categoria</td>
              <td>Valor Unitario</td>
              <td>Estado</td>
              <td>Fecha</td>
              <td>Hora</td>
              <td>Acción</td>
             
            </tr>
          </thead>
          <tbody>
            {productoRow}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductoList;