import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Wrapper,
  ProfileCard,
  ProfileImage,
  ProfileName,
  ProfileBio,
  ProfileRepos,
  ProfileLink,
  SearchInput,
  SearchButton,
  Label,
} from "./StyledTs";

interface GithubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  html_url: string;
}

const API_TOKEN = "coloque_seu_token_aqui";

function GithubFinderStyled() {
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchGithubUser = (username: string) => {
    axios
      .get<GithubUser>(`https://api.github.com/users/${username}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `Bearer ${API_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Erro ao buscar usuário:", error));
  };

  useEffect(() => {
    fetchGithubUser("octocat"); // já carrega um exemplo padrão
  }, []);

  return (
    <Wrapper>
      <ProfileCard>
        {userData ? (
          <>
            <ProfileImage src={userData.avatar_url} alt="Avatar" />
            <ProfileName>{userData.name}</ProfileName>
            <ProfileBio>{userData.bio}</ProfileBio>
            <ProfileRepos>
              <strong>{userData.public_repos}</strong> repositórios
            </ProfileRepos>
            <ProfileLink
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar Perfil →
            </ProfileLink>
          </>
        ) : (
          <p>Carregando perfil... 🐢</p>
        )}
      </ProfileCard>

      <div>
        <Label htmlFor="user-search">Buscar usuário do GitHub:</Label>
        <SearchInput
          id="user-search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={() => fetchGithubUser(searchTerm)}>
          Pesquisar
        </SearchButton>
        <NavLink to="/">🏡 Voltar para Home</NavLink>
      </div>
    </Wrapper>
  );
}

export default GithubFinderStyled;
