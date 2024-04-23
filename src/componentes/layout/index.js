import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import Navbar from "../Navbar";
import styles from "../Navbar.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import urlApi from "../axios/Api";
import { useFetch } from "../../useCases";
import NavbarUser from "../NavbarUsuario";
import { Outlet } from "react-router-dom";
import Home from "../../pages/Home";

function Layout() {
  const [pesquisar, setPesquisar] = useState("");
  const[showNavbar,  setShowNavbar] = useState(false)

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
      <h1 id="Imdb">
        <RiMovie2Fill />
        <Link className={styles.link} to="/home">
          IMDB
        </Link>{" "}
      </h1>
      <NavbarUser/>
      <Outlet />
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
        Fazer Login!
      </button>
    </div>
  );
}

export default Layout;
