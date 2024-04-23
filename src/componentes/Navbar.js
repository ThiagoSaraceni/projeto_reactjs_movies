import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import { RiMovie2Fill } from "react-icons/ri";

function Navbar(){
    return(
        <div className="AlinharEsquerda">
            <ul className={styles.navbar}>
                <h1 id="Imdb">
                    <RiMovie2Fill />
                    <Link className={styles.link} to="/homeAdmin">
                    IMDB
                    </Link>{" "}
                </h1>
                <li className={styles.item}><Link className={styles.link}to="/cadastro">Cadastrar um filme</Link></li>
                <li className={styles.item}><Link className={styles.link}to="/movies">Mostrar todos os filmes</Link></li>
                <li className={styles.item}><Link className={styles.link}to="/editar">Editar cadastro de filmes</Link></li>
                <li className={styles.item}><Link className={styles.link}to="/deletar">Deletar um filme</Link></li>
                <li className={styles.item}><Link className={styles.link}to="/editadmin">Editar Cadastro Usuario</Link></li>
                <li className={styles.item}><Link className={styles.link}to="/deletadmin">Deletar Usuário</Link></li>
            </ul>
      </div>
    )
}

export default Navbar;