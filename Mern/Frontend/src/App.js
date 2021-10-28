import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Login} from './componentes/Login';
import {Productos} from './componentes/Productos/Productos';
import { Ventas } from './componentes/Ventas/Ventas';
import { Usuarios } from './componentes/Usuarios/Usuarios';
require('dotenv').config();


//class App extends React.Component{
//<Route exact path="/ventas" component={Ventas}></Route>
/*<Router>
    <div>
      <Route exact path="/ventas" component={Ventas}></Route>
    </div>
  </Router>*/
/*
 <nav>
              <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">About</Link>
            </li>
            <li>
              <Link to="/ventas">Users</Link>
            </li>
          </ul>
        </nav> */
function App() {
  return (
    <Router>
      <div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/ventas">Ventas</Link>
              </li>
              <li>
                <Link to="/productos">Productos</Link>
              </li>
              <li>
                <Link to="/usuarios">Usuarios</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/" exact>    
          </Route>
          <Route path="/Login" exact>
            <Login></Login>   
          </Route>
          <Route path="/ventas" exact>
            <Ventas></Ventas>    
          </Route>
          <Route path="/productos" exact>
            <Productos></Productos>
          </Route>
          <Route path="/usuarios" exact>
            <Usuarios></Usuarios>
          </Route>
        </Switch>
      </div>
    </Router>
  );

  /*
  URL = 'http://localhost:3000';
  constructor(props){
    super(props);
    console.log('constructor:',window.location.pathname);

      this.state = {
      isVentasVisible:window.location.pathname === '/ventas',
      isProductosVisible:window.location.pathname === '/productos'
    }
  }

  showVentas = ()=>{
    console.log('showventas');
    this.setState({isVentasVisible:true,isProductosVisible:false});
  }
  showProductoss = ()=>{
    console.log('showproductos');
    this.setState({isProductosVisible:true,isVentasVisible:false});
  }


  
  render(){
    console.log(window.location.pathname);
    let contenToShow = <div>pagina incorrecta</div>
    if(this.state.isProductosVisible){
      window.history.pushState({},'','/productos');
      contenToShow=<Productos/>;
    }
    if(this.state.isVentasVisible){
      window.history.pushState({},'','/ventas');
      contenToShow=<Ventas/>;
    }
    if(!sessionStorage.getItem('token')){
      window.history.pushState({},'','/login');
      contenToShow=<Login/>;
      {/* <button type="button" onClick={this.showVentas}>Ventas</button>}
    }
    return(
      <div className="container"> 
        <div>
          <a href='/ventas'>ventas</a>
          <a href='/productos'>productos</a>
          {contenToShow}
        </div>
      </div>
    );
  }*/
}
export default App;