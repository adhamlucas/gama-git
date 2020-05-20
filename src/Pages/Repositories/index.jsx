import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history.push('/');
    }
  }, []);

  // Escuta alterações em uma varíavel e executa uma função
  // As variavés que serão escutadas ficam dentro do array,
  // Mas, se eu quiser que a função seja executada logo que a página inicie
  // Deixa o campo (array) vazio.
  return (
    <S.Container>
      <S.Title>Repositories</S.Title>
      <S.List>
        { repositories.map((repository) => (
          <S.ListItem>
            Repositório:
            {' '}
            {repository}
          </S.ListItem>
        ))}
      </S.List>
      <S.LinkHome to='/'>Voltar</S.LinkHome>
    </S.Container>
  );
}

export default Repositories;
