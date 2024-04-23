import Layout from "../componentes/layout"
import urlApi from "../componentes/axios/Api"
import { useState, useEffect } from "react"

function Suspense(){

    const[suspense, setSuspense] = useState([])

    const getFilmesbyGender = async(e) => {
        try {
            const response = await urlApi.get("/filmesgenero/Suspense")
            const data = response.data
            setSuspense(data)
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
            <h1>Filmes do gênero Suspense</h1>
            <div className="cardList">
            {suspense.length === 0 ? (<h1>Carregando.....</h1>) : (
                suspense.map((sspnss) => (
                
                    <div className="card">
                        <div className="cardTitle">{sspnss.title}</div>
                        <div className="cardImg"><img src={sspnss.url_foto} alt={sspnss.title}></img></div>
                        <div className="cardBody">
                            <p>Ano: <div className="bold">{sspnss.ano_filme}</div></p>
                            <p><div className="bold">{sspnss.descricao}</div></p>
                            <p>Duração: <div className="bold">{sspnss.duracao}</div></p>
                            <p>Diretor: <div className="bold">{sspnss.diretor}</div></p>
                        </div>
                    </div>
                
                ))
            )}
            </div>
        </div>
    )
}

export default Suspense