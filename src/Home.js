import React, { useState } from 'react'; // import './App.css';
import axios from 'axios';

function Home(props) {

  const [usuario, setUsuario] = useState('');
  const urlUserRepo = `https://api.github.com/users/${usuario}/repos`;

  function handlePesquisa() {
    axios
      .get(urlUserRepo)
      .then(r => console.log("r", r.data))
      .catch(error => console.log(`O usuário ${usuario} ou NÃO EXISTE ou o nome está errado.`))
    ;
  }

  return (

    <>
    <h1>Formulário do {usuario}. </h1>
    <input className="usuarioInput" placeholder="Usuário." value={usuario} onChange={e => setUsuario(e.target.value)} />
    <br />
    <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default Home;
