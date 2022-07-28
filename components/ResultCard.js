import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSupabaseContext} from '../context/SupabaseContext';
import styles from '../styles/ResultCard.module.css';

const ResultCard = ({item}) => {

    const {clearSearchResult} = useSupabaseContext();
    const limpiarFormulario = () => {
        clearSearchResult(item.id);
        console.log("Limpiando...");
    };

    return(
        <>
            <div className='p-2'>
                <div className={styles.contenedorTitulo}>
                    <h2 className={`h1 text-left ${styles.titulo}`}>{item.title}</h2>
                    <a className={styles.btnDelete} onClick={() => limpiarFormulario()}>
                        <FontAwesomeIcon icon={faDeleteLeft} size="1x" fixedWidth />
                    </a>
                </div>
                <div>
                    <p className='text-justify fs-4'>
                        {item.description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ResultCard;