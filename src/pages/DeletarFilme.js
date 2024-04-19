import { useState } from "react";
import urlApi from "../componentes/axios/Api";


function DeletarFilme(){
    const [id, setID] = useState('');

    const deleteMovies = async(event) =>{
        event.preventDefault()
        const editMovies = {
            id
        }
        try {
            if(isNaN(id)){
                alert("Seu id precisa ser um numero!!!!!")
            } else {
                const response = await urlApi.delete("/deletarfilme/" + id, editMovies)
                alert('Delete concluido!! :D')
                setID('')
            }
        } catch (error) {
            console.log(error)
        }
    }
    

    return(
        <div>
            <form className="deletarMovie" onSubmit={deleteMovies}>
                <h1>Deletar um filme por ID</h1>
                <label htmlFor="id">ID</label>
                <input type="text" placeholder="Id" value={id} onChange={(e) =>{setID(e.target.value)}}></input>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}


export default DeletarFilme;