import Layout from "../componentes/layout"
import urlApi from "../componentes/axios/Api"
import { useState, useEffect } from "react"


function Terror(){

    const[terror, setTerror] = useState([])

    const getFilmesbyGender = async(e) => {
        try {
            const response = await urlApi.get("/filmesgenero/Terror")
            const data = response.data
            setTerror(data)
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
            <h1>Filmes do gênero Terror</h1>
            <div className="cardList">
            {terror.length === 0 ? (<h1>Carregando.....</h1>) : (
                terror.map((tror) => (
                
                    <div className="card">
                        <div className="cardTitle">{tror.title}</div>
                        <div className="cardImg"><img src={tror.url_foto} alt={tror.title}></img></div>
                        <div className="cardBody">
                            <p>Ano: <div className="bold">{tror.ano_filme}</div></p>
                            <p><div className="bold">{tror.descricao}</div></p>
                            <p>Duração: <div className="bold">{tror.duracao}</div></p>
                            <p>Diretor: <div className="bold">{tror.diretor}</div></p>
                        </div>
                    </div>
                
                ))
            )}
            </div>
        </div>
    )
}

export default Terror