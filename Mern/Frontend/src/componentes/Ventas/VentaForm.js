import React from "react";
class VentaForm extends React.Component{
    onStatusChange=(evt)=>{
        const venta = this.props.venta;
        const newVenta = {...venta,state:evt.target.value};
        console.log('cambio el estado',evt.target.value,venta,newVenta);
        this.props.onFormChange(newVenta);
    }

    
    render(){
        const venta = this.props.venta;
        return (
            <aside className="formulario" onSubmit={this.props.onSaveVenta} id='form'>
                <form className='f'>
                    <div className="campos">
                        <label >Id: </label>
                        <input type="text" value={venta._id} disabled/>
                    </div>
                    <div className="campos">
                        <label >Valor Total: </label>
                        <input type="number" value={venta.valorTotal}disabled/>
                    </div>
                    <div className="campos">
                        <label >Fecha: </label>
                        <input type="text" value={venta.fecha} disabled/>
                    </div>
                    <div className="campos">
                        <label>Nombre del cliente: </label>
                        <input type="text" value={venta.nombreCliente}disabled/>
                    </div>
                    <div className="campos">
                        <label>Numero de identificacion: </label>
                        <input type="number" value={venta.nId}disabled/>
                    </div>
                    <div className="campos">
                        <label>Modificar estado: </label>
                        <select name="estado" onChange={this.onStatusChange}>
                            <option value="en proceso">en proceso</option>
                            <option value="cancelado">cancelado</option>
                            <option value="entregado">entregado</option>
                        </select>
                    </div>
                    <div className="botones">
                        <input type="submit" value="Guardar"/>
                        <input type="button" value="Cerrar" onClick={this.props.onClearVenta}/>
                    </div>
                </form>
            </aside>
        );
    }
}

export default VentaForm;