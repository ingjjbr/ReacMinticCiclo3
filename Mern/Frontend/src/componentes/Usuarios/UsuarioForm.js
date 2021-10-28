import React from "react";
class UsuarioForm extends React.Component{
    onStatusChange=(evt)=>{
        const usuario = this.props.usuario;
        const newUsuario = {...usuario,state:evt.target.value};
        console.log('cambio el estado',evt.target.value,usuario,newUsuario);
        this.props.onFormChange(newUsuario);
    }

    
    render(){
        const usuario = this.props.usuario;
        return (
            <aside className="formulario" onSubmit={this.props.onSaveUsuario} id='form'>
                <form className='f'>
                    <div className="campos">
                        <label >Nombre: </label>
                        <input type="text" 
                        onChange={(evt) => this.props.onFormChange({ ...usuario, name: evt.target.value})} />
                    </div>
                    <div className="campos">
                        <label >email: </label>
                        <input type="text" 
                        onChange={(evt) => this.props.onFormChange({ ...usuario, email: evt.target.value })} />
                    </div>
                    <div className="campos">
                        <label >contraseña: </label>
                        <input type="text" 
                        onChange={(evt) => this.props.onFormChange({ ...usuario, password: evt.target.value })} />
                    </div>
                    <div className="botones">
                        <input type="submit" value="Guardar"/> 
                    </div>
                </form>
            </aside>
        );
    }
}

export default UsuarioForm;