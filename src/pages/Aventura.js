import Layout from "../componentes/layout"
import urlApi from "../componentes/axios/Api"
import { useState, useEffect } from "react"

function Aventura(){

    const[aventura, setAventura] = useState([])

    const getFilmesbyGender = async(e) => {
        try {
            const response = await urlApi.get("/filmesgenero/Aventura")
            const data = response.data
            setAventura(data)
        } catch (error) {
            console.log("deu erro! " + error)
        }
    }

    useEffect(() =>{
        getFilmesbyGender()
    },[])


    return(
        <div>
            <Layout/>
            <h1>Filmes do gênero Aventura</h1>
            <div className="cardList">
            {aventura.length === 0 ? (<h1>Carregando.....</h1>) : (
                aventura.map((adventure) => (
                
                    <div className="card">
                        <div className="cardTitle">{adventure.title}</div>
                        <div className="cardImg"><img src={adventure.url_foto} alt={adventure.title}></img></div>
                        <div className="cardBody">
                            <p>Ano: <div className="bold">{adventure.ano_filme}</div></p>
                            <p><div className="bold">{adventure.descricao}</div></p>
                            <p>Duração: <div className="bold">{adventure.duracao}</div></p>
                            <p>Diretor: <div className="bold">{adventure.diretor}</div></p>
                        </div>
                    </div>
                
                ))
            )}
            </div>
        </div>
    )
}

export default Aventura