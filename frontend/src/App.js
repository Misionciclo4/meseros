import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navegacion from './components/Navegacion';
import ListProductos from './components/ListProductos';
import CreateProductos from './components/CreateProductos';
import CreateUser from './components/CreateUser';
import login from './components/login';


function App() {
  return (
    <Router>
      <Navegacion/>
      <div className='container p-5'>
      <Route path="/"  exact component={ListProductos}/>
      <Route path="/edit/:id" component={CreateProductos}/>
      <Route path="/create" component={CreateProductos}/>
      <Route path="/user" component={CreateUser}/>
      <Route path="/Login" component={login}/>

      </div>

    </Router>
  
  );
}

export default App;
