import React, { useState, useEffect } from "react";
import * as S from "./styles";
import api from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";

export default function Repositorio({ match }) {
  const [repo, setRepo] = useState({});
  const [pulls, setPulls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(match.params.repositorio);

      const [repoData, pullsData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/pulls`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);

      setRepo(repoData.data);
      setPulls(pullsData.data);
      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return (
      <S.Loading>
        <h1>Carregando...</h1>
      </S.Loading>
    );
  }
  
  return (
    <S.Container>
      <S.BackButton to="/">
        <FaArrowLeft color="#FFF" size={20} />
      </S.BackButton>
      <S.Owner>
        <img src={repo.owner.avatar_url} alt={repo.owner.login} />
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
      </S.Owner>
      <S.PullsList>
        {pulls.map((pulls) => (
          <li key={String(pulls.id)}>
            <img src={pulls.user.avatar_url} alt={pulls.user.login} />
            <div>
              <strong>
                <a href={pulls.html_url}>{pulls.title}</a>
                {pulls.labels.map((label) => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>
              <p>{pulls.user.login}</p>
            </div>
          </li>
        ))}
      </S.PullsList>
    </S.Container>
  );
}
