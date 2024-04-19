import styles from '../componentes/CadastrarUser.module.css'
import { useState } from 'react';
import Layout from '../componentes/layout';
import {useNavigate} from "react-router-dom";
import urlApi from '../componentes/axios/Api';

function CadastrarUser(){
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setconfirmPassword] = useState('')

    const navigate = useNavigate()
    
    function AbrirFormulario(){
        navigate("/FazerLogin")
    }


    function validarPassword(event){
        event.preventDefault()
        if(password === confirmPassword){
            PostCadastro()
        }
        else{
            alert("Senhas não são iguais digite novamente!")
        }
    }

    const PostCadastro = async() =>{
        const dadosNewUser ={
            username: name,
            email,
            senha_hash: password
        }
        try {
            const response = await urlApi.post("/cadastrarUser", dadosNewUser)
            console.log("cadastro finalizado!")
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <form className='formularie' onSubmit={validarPassword}>
                <h1>CADASTRO DE USUARIO</h1>
                <input type="text" placeholder="Nome de usuario" required value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type="email" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Senha" required value={password} onChange={(e) =>setPassword(e.target.value)}></input>
                <input type="password" placeholder="Confirme sua senha" required value={confirmPassword} on onChange={(e) =>setconfirmPassword(e.target.value)}></input>
                <button type="submit">Enviar</button>
                <div>
                    <p className={styles.botaoAbaixo}>Deseja voltar a tela de login?</p>
                    <button id={styles.voltarTelaLogin} onClick={(e) => AbrirFormulario()}>Voltar a tela de login</button>
                </div>
            </form>


        </div>
    )
}

export default CadastrarUser;