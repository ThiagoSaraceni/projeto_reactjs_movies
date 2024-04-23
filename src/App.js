import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";

import './App.css';
import TelaUserAdmin from "./pages/TelaUserAdmin";
import MostrarFilmes from "./pages/MostrarFilmes";
import Layout from "./componentes/layout";
import FazerLogin from "./pages/FazerLogin" 
import CadastroFilme from "./pages/CadastroFilme";
import EditarCadastro from "./pages/EditarCadastro";
import DeletarFilme from "./pages/DeletarFilme";
import EditarAdmin from "./pages/EditarUser";
import CadastrarUser from "./pages/CadastrarUser";
import DeletarUser from "./pages/DeletarUser";
import Pesquisa from "./pages/Pesquisa";
import Acao from "./pages/Acao";
import Aventura from "./pages/Aventura";
import Suspense from "./pages/Suspense";
import Terror from "./pages/Terror";
import Drama from "./pages/Drama";
import MelhoresFilmes from "./pages/MelhoresFilmes";
import HomeAdmin from "./pages/TelaHomeAdmin";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/acao" element={<Acao/>} />
        <Route path="/aventura" element={<Aventura />} />
        <Route path="/suspense" element={<Suspense />} />
        <Route path="/terror" element={<Terror/>} />
        <Route path="/drama" element={<Drama/>} />
        <Route path="/MelhoresFilmes" element={<MelhoresFilmes/>} />
          <Route path="/telauseradmin" element={<TelaUserAdmin />} />
            <Route path="/cadastro" element={<CadastroFilme/>} />
            <Route path="/movies" element={<MostrarFilmes/>} />
            <Route path="/editar" element={<EditarCadastro/>} />
            <Route path="/deletar" element={<DeletarFilme/>} />
            <Route path="/FazerLogin" element={<FazerLogin />} />
            <Route path="/editadmin" element={<EditarAdmin/>} />
            <Route path="/cadastrarUser" element={<CadastrarUser/>} />
            <Route path="/deletadmin" element={<DeletarUser/>} />
            <Route path="/pesquisar" element={<Pesquisa/>} />
            <Route path="/homeAdmin" element={<HomeAdmin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
