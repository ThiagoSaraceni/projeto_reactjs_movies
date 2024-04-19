import { useEffect } from "react";
import { useState } from "react";
import urlApi from "../componentes/axios/Api";


function MostrarFilmes(){

    const[showFilmes, setShowFilmes] = useState([])


    //funcao para retornar os dados da API
    const getFilmes = async () => {
        try {
            //se eu não usar o awai ele fica como undefined
            const response = await urlApi.get("/filmes")
            // no meu response aparece muitas coisas no terminal, e eu desejo pegar só o data
            //então criei uma constante data parece receber response.data
            const data = response.data
            //passei o data para o setShowFilmes assim meu elemento showFilmes recebe o meus dados da API
            setShowFilmes(data)
            console.log(data)
        } catch (error) {
            console.log("deu erro: " + error)
        }
    }

    useEffect(() =>{
        getFilmes()
    },[])

    return(
        <div>
            <h1>Filmes cadastrados</h1>
            {/*--se meus filmes forem igual a 0, mostra uma mensagem: carregando... senao mostra todos meus filmes cadastrados*/}
            {showFilmes.length === 0 ? (<p>Carregando...</p>): (
                showFilmes.map((filme) => (
                <div className="filme" key={filme.id}>
                    <h2>{filme.title}</h2>
                    <p>{filme.descricao}</p>
                    <p>Ano do filme: {filme.ano_filme}</p>
                    <p>Diretor: {filme.diretor}</p>
                    <p>id: {filme.id}</p>
                </div>))
            )}

        </div>
    )
}

export default MostrarFilmes;