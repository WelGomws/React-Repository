import React, { useState } from "react";
import * as S from "./style";
import { FaPlus, FaBars, FaMinus } from "react-icons/fa";
import api from "../../services/api";

export default function Main() {
  const [repos, setRepos] = useState([]);
  const [orgname, setOrgName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [hideRepo, setHideRepo] = useState(true);

  async function handleSubmit(e) {
    const nameOrg = await api.get(`badico-cloud-hub`);
    const response = await api.get(`badico-cloud-hub/repos`);

    setAvatar(nameOrg.data.avatar_url);
    setOrgName(nameOrg.data.name);
    setRepos(
      response.data.map((item) => {
        return item.full_name;
      })
    );
    setHideRepo(false);
  }

  return (
    <S.Container>
      <S.divButton>
        <S.SubmitButton onClick={handleSubmit}>
          {hideRepo ? (
            <FaPlus color="#FFF" size={14} />
          ) : (
            <FaMinus color="#FFF" size={14} />
          )}
          {hideRepo ? <a>Mostrar repositorio</a> : <a>Ocultar repositorio</a>}
        </S.SubmitButton>
      </S.divButton>

      <div>
        <img src={avatar} />
        <h1>{orgname}</h1>
      </div>

      <S.List>
        {repos.map((repo) => (
          <li key={repo}>
            <span>{repo}</span>
            <a href="">
              <FaBars size={20} />
            </a>
          </li>
        ))}
      </S.List>
    </S.Container>
  );
}
