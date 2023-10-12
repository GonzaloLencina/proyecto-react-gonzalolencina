import './App.css'
import React from 'react';
import ItemListContainer from './ItemListContainer';
import Navbar from './Navbar'; 

function App() {
  return (
    <div>
      <Navbar /> 
      <ItemListContainer Greeting="¡Bienvenido!" />
    </div>
  );
}

export default App;

