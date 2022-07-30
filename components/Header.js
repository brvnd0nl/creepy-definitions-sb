import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import { supabase } from '../supabase/client';
import { useSupabaseContext } from '../context/SupabaseContext';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = ({pagina}) => {   
    
    const {user, setUser} = useSupabaseContext();
    
    const handleLogOut = async () =>{
        const { error } = await supabase.auth.signOut();        

        if (error) throw new Error(error);

        setUser(null);
    };

    const validateUser = () => {
        console.log("user Header", user);
        if(user){
            return (
                <>
                    <Link href="/admin-page">
                        Administrar
                    </Link>
                    <a onClick={() => handleLogOut()}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} size="1x" fixedWidth />
                    </a>
                </>
            );
        }else{
            return (
                <>
                    <Link href="/login">
                        <a>Inicio Sesión</a>                                        
                    </Link>
                    <Link href="/register">
                        <a className={styles.btnRegister_man}>
                            Registrarse
                        </a>
                    </Link>
                </>
            );
        }
    }

    return(
        <>
            <header className={pagina === "index" ? styles.headerIndex : styles.header}>
            {/* <header className={styles.headerIndex}> */}
                <div className="contenedor">
                    <div className={styles.barra}>
                        <nav className={styles.navegacion}>
                            <Link href="/">Inicio</Link>
                            <Link href="/nosotros">Nosotros</Link>                            
                            {validateUser()}    
                            {/* <Link href="/blog">Blog</Link>                             */}                        
                        </nav>                    
                    </div>
                </div>                     
            </header>
        </>
    );
};

export default Header;