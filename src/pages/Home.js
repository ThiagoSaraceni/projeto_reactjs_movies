import React from 'react';
import Foto from '../fotos/about time.webp'
import Viva from '../fotos/viva_vida_e_festa.jpg'
import styles from '../componentes/Home.module.css'
import NavbarUser from '../componentes/NavbarUsuario';
import Layout from '../componentes/layout';


function Home(){
    return(
        <div>
            <Layout/>
            <div className={styles.cardList}>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>THE GODFATHER</div>
                    <div className={styles.cardImg}><img src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"></img></div>
                    <div className={styles.cardBody}>
                        <p className={styles.quebrar_lorem}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "</p>
                        <p>Ano filme: <div className={styles.bold}>1902</div></p>
                        <p>Duração: <div className={styles.bold}>132min</div></p>
                        <p>Diretor: <div className={styles.bold}>Copolla</div></p>
                        <p>Elenco: <div className={styles.bold}><br></br>Wesley Villas<br></br>
                            Willian Vilas</div>
                        </p>
                        <p>Avaliacao: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>questão de tempo</div>
                    <div className={styles.cardImg}><img src={Foto}></img></div>
                    <div className={styles.cardBody}>
                        <p className={styles.quebrar_lorem}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "</p>
                        <p>Ano filme: <div className={styles.bold}>1902</div></p>
                        <p>Duração: <div className={styles.bold}>132min</div></p>
                        <p>Diretor: <div className={styles.bold}>Copolla</div></p>
                        <p>Elenco: <div className={styles.bold}><br></br>Wesley Villas<br></br>
                            Willian Vilas</div>
                        </p>
                        <p>Avaliacao: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>A vida é uma festa</div>
                    <div className={styles.cardImg}><img src={Viva}></img></div>
                    <div className={styles.cardBody}>
                        <p className={styles.quebrar_lorem}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "</p>
                        <p>Ano filme: <div className={styles.bold}>1902</div></p>
                        <p>Duração: <div className={styles.bold}>132min</div></p>
                        <p>Diretor: <div className={styles.bold}>Copolla</div></p>
                        <p>Elenco: <div className={styles.bold}><br></br>Wesley Villas<br></br>
                            Willian Vilas</div>
                        </p>
                        <p>Avaliacao: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>THE GODFATHER</div>
                    <div className={styles.cardImg}><img src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"></img></div>
                    <div className={styles.cardBody}>
                        <p className={styles.quebrar_lorem}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "</p>
                        <p>Ano filme: <div className={styles.bold}>1902</div></p>
                        <p>Duração: <div className={styles.bold}>132min</div></p>
                        <p>Diretor: <div className={styles.bold}>Copolla</div></p>
                        <p>Elenco: <div className={styles.bold}><br></br>Wesley Villas<br></br>
                            Willian Vilas</div>
                        </p>
                        <p>Avaliacao: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>questão de tempo</div>
                    <div className={styles.cardImg}><img src={Foto}></img></div>
                    <div className={styles.cardBody}>
                        <p className={styles.quebrar_lorem}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "</p>
                        <p>Ano filme: <div className={styles.bold}>1902</div></p>
                        <p>Duração: <div className={styles.bold}>132min</div></p>
                        <p>Diretor: <div className={styles.bold}>Copolla</div></p>
                        <p>Elenco: <div className={styles.bold}><br></br>Wesley Villas<br></br>
                            Willian Vilas</div>
                        </p>
                        <p>Avaliacao: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>A vida é uma festa</div>
                    <div className={styles.cardImg}><img src={Viva}></img></div>
                    <div className={styles.cardBody}>
                        <p className={styles.quebrar_lorem}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "</p>
                        <p>Ano filme: <div className={styles.bold}>1902</div></p>
                        <p>Duração: <div className={styles.bold}>132min</div></p>
                        <p>Diretor: <div className={styles.bold}>Copolla</div></p>
                        <p>Elenco: <div className={styles.bold}><br></br>Wesley Villas<br></br>
                            Willian Vilas</div>
                        </p>
                        <p>Avaliacao: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>A vida é uma festa</div>
                    <div className={styles.cardImg}><img src={Viva}></img></div>
                    <div className={styles.cardBody}>
                        <p className={styles.quebrar_lorem}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "</p>
                        <p>Ano filme: <div className={styles.bold}>1902</div></p>
                        <p>Duração: <div className={styles.bold}>132min</div></p>
                        <p>Diretor: <div className={styles.bold}>Copolla</div></p>
                        <p>Elenco: <div className={styles.bold}><br></br>Wesley Villas<br></br>
                            Willian Vilas</div>
                        </p>
                        <p>Avaliacao: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>A vida é uma festa</div>
                    <div className={styles.cardImg}><img src={Viva}></img></div>
                    <div className={styles.cardBody}>
                        <p className={styles.quebrar_lorem}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "</p>
                        <p>Ano filme: <div className={styles.bold}>1902</div></p>
                        <p>Duração: <div className={styles.bold}>132min</div></p>
                        <p>Diretor: <div className={styles.bold}>Copolla</div></p>
                        <p>Elenco: <div className={styles.bold}><br></br>Wesley Villas<br></br>
                            Willian Vilas</div>
                        </p>
                        <p>Avaliacao: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>A vida é uma festa</div>
                    <div className={styles.cardImg}><img src={Viva}></img></div>
                    <div className={styles.cardBody}>
                        <p className={styles.quebrar_lorem}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "</p>
                        <p>Ano filme: <div className={styles.bold}>1902</div></p>
                        <p>Duração: <div className={styles.bold}>132min</div></p>
                        <p>Diretor: <div className={styles.bold}>Copolla</div></p>
                        <p>Elenco: <div className={styles.bold}><br></br>Wesley Villas<br></br>
                            Willian Vilas</div>
                        </p>
                        <p>Avaliacao: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Home;
