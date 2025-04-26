import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface GithubInfo {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  html_url: string;
}

function GithubFinderTailwind() {
  const TOKEN = "coloque_seu_token_aqui";

  const [user, setUser] = useState<GithubInfo | null>(null);
  const [username, setUsername] = useState("");

  const loadUser = (user: string) => {
    axios
      .get<GithubInfo>(`https://api.github.com/users/${user}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `Bearer ${TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Erro ao puxar usuário: ", err));
  };

  useEffect(() => {
    loadUser("octocat");
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">
        {user ? (
          <>
            <img
              className="w-40 h-40 mx-auto rounded-full mb-5 border-4 border-blue-300"
              src={user.avatar_url}
              alt="Avatar"
            />
            <h1 className="text-2xl font-bold text-slate-800">{user.name}</h1>
            <p className="text-gray-600 mt-2">{user.bio}</p>
            <p className="mt-4 font-semibold text-gray-700">
              {user.public_repos} Repositórios
            </p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-cyan-600 hover:text-cyan-800 underline"
            >
              Ver GitHub →
            </a>
          </>
        ) : (
          <p className="text-gray-400">Buscando dados... 🛸</p>
        )}
      </div>

      <div className="mt-8 w-full max-w-md">
        <label
          htmlFor="input-user"
          className="block text-sm font-bold mb-2 text-slate-700"
        >
          Nome do GitHub:
        </label>
        <input
          id="input-user"
          type="text"
          className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => loadUser(username)}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md transition"
        >
          Procurar
        </button>
        <div className="text-center mt-4">
          <NavLink to="/" className="text-sm text-blue-600 hover:underline">
            ← Voltar
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default GithubFinderTailwind;
