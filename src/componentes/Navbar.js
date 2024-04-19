import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'


function Navbar(){
    return(
        <div>
            <ul className={styles.navbar}>
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