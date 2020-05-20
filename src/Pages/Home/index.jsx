import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

function App() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setError] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setError(false);
        history.push('/repositories');
      })
      .catch((err) => {
        setError(true);
      });
  }


  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      {erro ? <S.ErrorMessage>Ocorreu um erro, tente novamente</S.ErrorMessage> : ''}
    </S.HomeContainer>
  );
}

export default App;
