import { RiMovie2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

import Home from "./pages/Home";

import './App.css';
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

function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Layout/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cadastro" element={<CadastroFilme/>} />
          <Route path="/movies" element={<MostrarFilmes/>} />
          <Route path="/editar" element={<EditarCadastro/>} />
          <Route path="/deletar" element={<DeletarFilme/>} />
          <Route path="/FazerLogin" element={<FazerLogin />} />
          <Route path="/editadmin" element={<EditarAdmin/>} />
          <Route path="/cadastrarUser" element={<CadastrarUser/>} />
          <Route path="/deletadmin" element={<DeletarUser/>} />
          <Route path="/pesquisar" element={<Pesquisa/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
