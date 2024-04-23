import {Link} from 'react-router-dom'
import styles from '../componentes/NavbarUser.module.css'

function NavbarUser(){
    return(
        <div>
            <nav>
                <ul className={styles.navbar}>
                    <li className={styles.item}><Link className={styles.link} to="/MelhoresFilmes">Melhores filmes</Link></li>
                    <li className={styles.dropdown}><Link className={styles.link} to="/home">Generos</Link>
                        <div className={styles.dropdownmenu}>
                            <Link className={styles.link} to="/acao">Acao</Link>
                            <Link className={styles.link} to="/aventura">Aventura</Link>
                            <Link className={styles.link} to="/drama">Drama</Link>
                            <Link className={styles.link} to="/suspense">Suspense</Link>
                            <Link className={styles.link} to="/terror">Terror</Link>
                        </div>
                    </li>
                </ul>
            </nav>
      </div>
    )
}

export default NavbarUser;