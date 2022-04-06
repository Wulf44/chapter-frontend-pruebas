import logo from './logo.svg';
import './App.css';
import React from 'react';
import CrudApp from './components/CrudApp';


function App() {
  return (
    <div> 
      <h1>Listado de personajes</h1> 
      <CrudApp/>
    </div>
  );
}

export default App;
