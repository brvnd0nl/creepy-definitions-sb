import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = ({pagina}) => {
    const router = useRouter();
    const user = null;
    const handleLogOut = async () =>{
        console.log('logout');
    };

    return(
        <>
            <header className={pagina === "index" ? styles.headerIndex : styles.header}>
                <div className="contenedor">
                    <div className={styles.barra}>
                        <nav className={styles.navegacion}>
                            <Link href="/">Inicio</Link>
                            <Link href="/nosotros">Nosotros</Link>                            
                            {user ? (
                                <>
                                    <Link href="/admin-page">
                                        Administrar
                                    </Link>
                                    <a onClick={() => handleLogOut()}>
                                        <FontAwesomeIcon icon={faArrowRightFromBracket} size="1x" fixedWidth />
                                    </a>
                                </>
                            ) : (
                                <>
                                    <Link href="/login">
                                        Inicio Sesión                                        
                                    </Link>
                                    <Link href="/register">
                                        <a className={styles.btnRegister_man}>
                                            Registrarse
                                        </a>
                                    </Link>
                                </>
                            )}

                            {/* <Link href="/blog">Blog</Link>                             */}
                        </nav>                    
                    </div>
                </div>                     
            </header>
        </>
    );
};

export default Header;