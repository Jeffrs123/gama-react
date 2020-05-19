import React from 'react';

// import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App(props) {

  // const [ usuario, setUsuario ] = useState('Jefferson')

  return (
    <>
      <h1>FORMULÁRIO</h1>
      <input placeholder="usuário" name="usuario" id="usuario" className="usuarioInput" /> 
      <br />
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;
