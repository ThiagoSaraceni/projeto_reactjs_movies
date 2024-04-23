import { useEffect } from "react";
import { useState } from "react";
import urlApi from "../componentes/axios/Api";
import TelaUserAdmin from "./TelaUserAdmin";
import styles from '../pages/MostrarFilmes.module.css'

function MostrarFilmes(){

    const[showFilmes, setShowFilmes] = useState([])


    //funcao para retornar os dados da API
    const getFilmes = async () => {
        try {
            //se eu não usar o await ele fica como undefined
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

    
    // const getStar = async () => {
    //     try {
    //         const response = await urlApi.get("/filmes")
    //         const data = response.data
    //         setShowFilmes(data)
    //         console.log(data)
    //         {showFilmes.map((filme))=>{
    //             console.log(filme.title)
    //         }}

    //     } catch (error) {
    //         console.log("deu erro: " + error)
    //     }
    // }



    useEffect(() =>{
        getFilmes()
    },[])




    return(
        <div>
            <TelaUserAdmin/>
            <div className={styles.cardList}>
            {showFilmes.length === 0 ? (<h1>Carregando.....</h1>) : (
                showFilmes.map((filme) => (
                    <div className={styles.card}>
                        <div className={styles.cardTitle}>{filme.title}</div>
                        <div className={styles.cardImg}><img src={filme.url_foto} alt={filme.title}></img></div>
                        <div className={styles.cardBody}>
                            <p>Ano filme: <div className={styles.bold}>{filme.ano_filme}</div></p>
                            <p><div className={styles.bold}>{filme.descricao}</div></p>
                            <p>Duração: <div className={styles.bold}>{filme.duracao}</div></p>
                            <p>Diretor: <div className={styles.bold}>{filme.diretor}</div></p>
                        </div>
                    </div>
                ))
            )}
        </div>
            


            {/*--se meus filmes forem igual a 0, mostra uma mensagem: carregando... senao mostra todos meus filmes cadastrados*/}
            

        </div>
    )
}

export default MostrarFilmes;