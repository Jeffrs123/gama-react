import React, { useEffect, useState } from 'react';
import * as S from './styled';

export default function Repositories() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')

        repositoriesName = JSON.parse(repositoriesName);
        console.log('voltei a ser um objeto: ', repositoriesName);

        setRepositories(repositoriesName);
        // localStorage.clear('repositoriesName');
        localStorage.clear();

    }, [])

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {
                    repositories.map(repository => {
                        return (
                            <S.ListItem> Repositório: {repository} </S.ListItem>

                        )
                    })
                }

            </S.List>
        </S.Container>
    )
}

// export default Repositories;