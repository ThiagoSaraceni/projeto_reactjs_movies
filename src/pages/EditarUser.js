import { useState } from "react"
import urlApi from "../componentes/axios/Api"
import TelaUserAdmin from "./TelaUserAdmin"

function EditarAdmin(){
    const[id, setID] = useState('')
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const EditarUser = async(event) => {
        event.preventDefault()
        const editCadastro = {
            id,
            username: name,
            senha_hash: password,
            email: email
        }
        try {
            if(isNaN(id)){
                alert("Seu id precisa ser um numero!!!!!")
            } else {
                await urlApi.put("/adminedit/" + id, editCadastro)
                alert("Edição finalizada")
                setID('')
                setName('')
                setEmail('')
                setPassword('')
            }
        } catch (error) {
            console.log("erro!!!!!")
        }
    }

    return(
        <div>
            <TelaUserAdmin/>
            <form className="editarUser" onSubmit={EditarUser}>
                <h1>Editar cadastro de um usúario</h1>
                <label htmlFor="id">ID</label>
                <input type="text" placeholder="Id" value={id} onChange={(e) =>{setID(e.target.value)}}></input>
                <input type="text" placeholder="Nome" value={name} onChange={(e) =>{setName(e.target.value)}}></input>
                <input type="email" placeholder="E-mail" value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
                <input type="password" placeholder="Senha" value={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default EditarAdmin;