import {useNavigate} from "react-router-dom";
import CadastrarUser from "./CadastrarUser";
import { useEffect, useState } from "react";
import styles from '../componentes/CadastrarUser.module.css'
import urlApi from "../componentes/axios/Api";


function FazerLogin(){

    const[email, setEmail] = useState('') 
    const[senha, setSenha] = useState('')

    const navigate = useNavigate();

    function CriarConta(){
        return(
            navigate('/CadastrarUser')
        )
    }

    const getExist = async(e)=>{
        e.preventDefault();
        try {
            const response = await urlApi.get("/validacao/" + email + "/" + senha)
            if(response.data.isValid == true){
                return console.log("Cadastro encontrado!")
            } else {
                return console.log("Cadastro nao encontrado")
            }
        } catch (error) {
            console.log("nao encontrado")
        }
    }

    




    return(
        <div>
            <form className='formularie' onSubmit={getExist}>
                <h1>FAZER LOGIN</h1>
                <input type="email" placeholder="E-mail" required value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <input type="password" placeholder="Senha" required value={senha} onChange={(event) => setSenha(event.target.value)}></input>
                <button type="submit">Entrar</button>
                <div className="Criar conta">
                    <p className={styles.botaoAbaixo}>Deseja criar uma conta?</p>
                    <button id={styles.btnCriarConta} onClick={(e) => CriarConta()}>Criar conta</button>
                </div>
            </form>
        </div>
    )
}

export default FazerLogin;