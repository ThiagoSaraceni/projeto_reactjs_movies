import urlApi from "../componentes/axios/Api"
import Layout from "../componentes/layout"
import { useState, useEffect } from "react"


function Drama(){

    const[dramas, setDramas] = useState([])


    const getFilmesbyGender = async(e) => {
        try {
            const response = await urlApi.get("/filmesgenero/Drama")
            const data = response.data
            setDramas(data)
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
            <h1>Filmes do gênero Drama</h1>
            <div className="cardList">
            {dramas.length === 0 ? (<h1>Carregando.....</h1>) : (
                dramas.map((drama) => (
                    <div className="card">
                        <div className="cardTitle">{drama.title}</div>
                        <div className="cardImg"><img src={drama.url_foto} alt={drama.title}></img></div>
                        <div className="cardBody">
                            <p>Ano: <div className="bold">{drama.ano_drama}</div></p>
                            <p><div className="bold">{drama.descricao}</div></p>
                            <p>Duração: <div className="bold">{drama.duracao}</div></p>
                            <p>Diretor: <div className="bold">{drama.diretor}</div></p>
                        </div>
                    </div>
                ))
            )}
            </div>
        </div>
    )
} 

export default Drama