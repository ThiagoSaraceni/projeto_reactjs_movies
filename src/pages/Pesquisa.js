import { useLocation } from "react-router-dom"



function Pesquisa(){
    const location = useLocation();
    const dados = location.state.dados;

    return(
        <div>
            <h1>dados recebidos</h1>
            <pre>{JSON.stringify(dados)}</pre>
        </div>
    )
}

export default Pesquisa