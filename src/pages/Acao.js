import Layout from "../componentes/layout"
import { useState, useEffect } from "react"
import urlApi from "../componentes/axios/Api"

function Acao(){

    const[acao, setAcao] = useState([])

    const getFilmesbyGender = async(e) => {
        try {
            const response = await urlApi.get("/filmesgenero/Acao")
            const data = response.data
            setAcao(data)
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
            <h1>Filmes do gênero Ação</h1>
            <div className="cardList">
            {acao.length === 0 ? (<h1>Carregando.....</h1>) : (
                acao.map((action) => (
                
                    <div className="card">
                        <div className="cardTitle">{action.title}</div>
                        <div className="cardImg"><img src={action.url_foto} alt={action.title}></img></div>
                        <div className="cardBody">
                            <p>Ano: <div className="bold">{action.ano_filme}</div></p>
                            <p><div className="bold">{action.descricao}</div></p>
                            <p>Duração: <div className="bold">{action.duracao}</div></p>
                            <p>Diretor: <div className="bold">{action.diretor}</div></p>
                        </div>
                    </div>
                
                ))
            )}
            </div>
        </div>
    )
}

export default Acao