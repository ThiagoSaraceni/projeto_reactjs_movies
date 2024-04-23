import { useEffect, useState } from "react"
import urlApi from "../componentes/axios/Api"
import Layout from "../componentes/layout"

function MelhoresFilmes(){

    const[avarage, setAvarage] = useState([])

    const getFilmesbyAVG = async(e) => {
        try {
            const response = await urlApi.get("/notes")
            const dados = response.data
            setAvarage(dados)
            console.log(dados)
        } catch (error) {
            console.log("erro:" + error)
        }
    }

    useEffect(()=>{
        getFilmesbyAVG()
    }, [])







    return(
        <div>
            <Layout/>
            <h1>Melhores Filmes</h1>
            {avarage.map((avg) => {
                console.log(`Filme ${avg.title} média ${avg.avg.toFixed()}`)
            })}
        </div>
    )
}

export default MelhoresFilmes