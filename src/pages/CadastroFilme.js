import { useState } from "react";
import urlApi from "../componentes/axios/Api";

function CadastroFilme() {
    const [title, setTitle] = useState('');
    const [anoFilme, setAnoFilme] = useState('');
    const [descricao, setDescricao] = useState('');
    const [diretor, setDiretor] = useState('');
    const [genero, setGenero] = useState('');
    const [urlfoto, setUrlfoto] = useState('');

    const postFilmes = async (event) => {
        event.preventDefault();
        const filmes = {
            title,
            ano_filme: anoFilme, 
            descricao,
            diretor,
            genero,
            url_foto: urlfoto
        };
        try {
            const response = await urlApi.post("/cadastrarfilme", filmes);
            alert("Cadastro finalizado!")
            setTitle('')
            setAnoFilme('')
            setDescricao('')
            setDiretor('')
            setGenero('')
            setUrlfoto('')
        } catch (error) {
            console.log("Erro! " + error.message);
        }
    };

    return (
        <div>
            <form className="cadastrarMovie" onSubmit={postFilmes}>
                <h1>Cadastrar filmes</h1>
                <label htmlFor="title">Título</label>
                <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="ano_filme">Ano do filme</label>
                <input type="text" placeholder="Ano" value={anoFilme} onChange={(e) => setAnoFilme(e.target.value)} />
                <label htmlFor="descricao">Descrição</label>
                <input type="text" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                <label htmlFor="diretor">Diretor</label>
                <input type="text" placeholder="Diretor" value={diretor} onChange={(e) => setDiretor(e.target.value)} />
                <label htmlFor="genero">Gênero</label>
                <input type="text" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} />
                <label htmlFor="url_foto">URL foto</label>
                <input type="text" placeholder="URL_foto" value={urlfoto} onChange={(e) => setUrlfoto(e.target.value)} />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroFilme;
