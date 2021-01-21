import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { FaPlus, FaBars, FaMinus } from "react-icons/fa";
import api from "../../services/api";

export default function Main() {
  const [repos, setRepos] = useState([]);
  const [orgname, setOrgName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [hideRepo, setHideRepo] = useState(true);

  async function handleSubmit() {
    if(repos.length){
      return setHideRepo(!hideRepo)
    }
    const [nameOrg, response] = await Promise.all([
      api.get(`orgs/badico-cloud-hub`),
      api.get(`orgs/badico-cloud-hub/repos`),
    ]);

    setAvatar(nameOrg.data.avatar_url);
    setOrgName(nameOrg.data.name);
    setRepos(
      response.data.map((item) => {
        return item;
      })
    );
    setHideRepo(false);
  }

  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repos))
  }, [repos])

  return (
    <S.Container>
      <S.DivButton>
        <S.SubmitButton onClick={handleSubmit}>
          {hideRepo ? (<>
            <FaPlus color="#FFF" size={14} />
            <p>Mostrar repositorio</p>
          </>) : (<>
            <FaMinus color="#FFF" size={14} />
            <p>Ocultar repositorio</p>
          </>)}
        </S.SubmitButton>
      </S.DivButton>

      <div>
        <img src={avatar} alt=""/>
        <h1>{orgname}</h1>
      </div>

      <S.List> 
        {!hideRepo && repos.map((repo) => (
          <li key={repo.full_name}>
            <span>{repo.full_name}</span>
            <Link to={`/repositorio/${encodeURIComponent(repo.full_name)}`}>
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </S.List>
    </S.Container>
  );
}
