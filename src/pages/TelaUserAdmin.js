import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import Navbar from "../componentes/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import urlApi from "../componentes/axios/Api";
import { useFetch } from "../useCases";
import HomeAdmin from "./TelaHomeAdmin";


function TelaUserAdmin() {
  const [pesquisar, setPesquisar] = useState("");
  const[showNavbar,  setShowNavbar] = useState(true)

  const { fetch, isLoading, data } = useFetch({
    endpoint: "filmes",
    method: "POST"
  });

  const getByTitulo = async (event) => {
    event.preventDefault();
    fetch({
        search: pesquisar
    })
  };

  {
    /*Aqui estou criando uma variavel constante para receber o useNavigate */
  }
  const navigate = useNavigate();

  {
    /*Na minha função eu chamo a  funcao navigate que recebeu o useNavigate 
    e no no parametro dela eu passo o caminho que desejo ir, como se fosse uma tag link*/
  }
  function AbrirFormulario() {
    navigate("/FazerLogin");
  }


  return (
    <div className="AlinharEsquerda">
      {showNavbar && <Navbar />}
      <form className="search" on onSubmit={getByTitulo}>
        <input
          type="text"
          placeholder=" Pesquisar na IMDB"
          value={pesquisar}
          onChange={(e) => setPesquisar(e.target.value)}
        ></input>
        <button className="btnsbmt" type="submit">
          <FaSearch />
        </button>
      </form>
      <button className="btnLogin" onClick={(e) => AbrirFormulario()}>
        Sair
      </button>
    </div>
    
  );
}

export default TelaUserAdmin;
