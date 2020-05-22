import React, { useState } from 'react'; // import './App.css';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function Home(props) {

  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const urlUserRepo = `https://api.github.com/users/${usuario}/repos`;

  function handlePesquisa() {
    console.log("urlUserRepo", urlUserRepo);

    axios
      .get(urlUserRepo)
      .then( r => {
          const repositories = r.data;
          // console.log("r", r.data)

          const repositoriesName = [];

          repositories.map((repository) => {
            return repositoriesName.push(repository.name)
          });
          // console.log("Nomes dos repositórios", repositoriesName)
          // JSON.stringify(repositoriesName);

          localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
          // history.push('/repositories');
          history.push('/repositories')
        }
      )
      .catch(error => console.log(`O usuário ${usuario} ou NÃO EXISTE ou o nome está errado. ${error}`))
      ;
  }

  return (

    <S.Container>
      <S.Title>Formulário do {usuario}. </S.Title>
      <S.Container2>
        <S.Input className="usuarioInput" placeholder="Usuário." value={usuario} onChange={e => setUsuario(e.target.value)} />
      </S.Container2>
      <S.Container2>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Container2>
    </S.Container>
  );
}

export default Home;
