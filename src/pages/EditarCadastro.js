import { useState } from "react";
import urlApi from "../componentes/axios/Api";


function EditarCadastro(){
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [anoFilme, setAnoFilme] = useState('');
    const [descricao, setDescricao] = useState('');
    const [diretor, setDiretor] = useState('');
    const [genero, setGenero] = useState('');
    const [urlfoto, setUrlfoto] = useState('');


    const PutFilmes = async(event) =>{
        event.preventDefault()
        const editMovies = {
            id,
            title,
            ano_filme: anoFilme,
            descricao,
            diretor,
            genero,
            url_foto: urlfoto
        }
        try {
            if(isNaN(id)){
                alert("Seu id precisa ser um numero!!!!!")
            } else {
                const response = await urlApi.put("/editarfilme/" + id, editMovies)
                alert('Edicao concluida!! :D')
                setID('')
                setTitle('')
                setAnoFilme('')
                setDescricao('')
                setDiretor('')
                setGenero('')
                setUrlfoto('')
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    

    return(
        <div>
            <form className="editarMovie" onSubmit={PutFilmes}>
                <h1>Editar um filme por ID</h1>
                <label htmlFor="id">ID</label>
                <input type="text" placeholder="Id" value={id} onChange={(e) =>{setID(e.target.value)}}></input>
                <label htmlFor="title">Título</label>
                <input type="text" placeholder="Título" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                <label htmlFor="ano_filme">Ano do filme</label>
                <input type="text" placeholder="Ano" value={anoFilme} onChange={(e) =>{setAnoFilme(e.target.value)}}/>
                <label htmlFor="descricao">Descrição</label>
                <input type="text" placeholder="Descrição" value={descricao} onChange={(e) =>{setDescricao(e.target.value)}}/>
                <label htmlFor="diretor">Diretor</label>
                <input type="text" placeholder="Diretor" value={diretor} onChange={(e) =>{setDiretor(e.target.value)}}/>
                <label htmlFor="genero">Gênero</label>
                <input type="text" placeholder="Gênero" value={genero} onChange={(e) =>{setGenero(e.target.value)}}/>
                <label htmlFor="url_foto">URL foto</label>
                <input type="text" placeholder="URL_foto" value={urlfoto} onChange={(e) =>{setUrlfoto(e.target.value)}}/>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}


export default EditarCadastro;