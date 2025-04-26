import { NavLink } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-amber-100 flex flex-col items-center justify-center px-4">
        <div className="bg-amber-400 p-6 w-full max-w-md text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Escolha o metodo de estilização
          </h1>
          <div className="w-full font-semibold py-2 bg-amber-600 cursor-pointer">
            <NavLink to="/tailwind">Estilização com Tailwind CSS</NavLink>
          </div>
          <br />
          <div className="w-full font-semibold py-2 bg-amber-600 cursor-pointer">
            <NavLink to="/styled">Estilização com Styled Componets</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
