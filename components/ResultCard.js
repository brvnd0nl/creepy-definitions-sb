import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSupabaseContext} from '../context/SupabaseContext';
import styles from '../styles/ResultCard.module.css';

const ResultCard = ({item}) => {

    const {clearSearchResult} = useSupabaseContext();
    const limpiarFormulario = () => {
        clearSearchResult();
        console.log("Limpiando...");
    };

    return(
        <>
            <div className={styles.contenedorTitulo}>
                <h2>{item.tittle}</h2>
                <a className={styles.btnDelete} onClick={() => limpiarFormulario()}>
                    <FontAwesomeIcon icon={faDeleteLeft} size="1x" fixedWidth />
                </a>
            </div>
            <p>
                {item.description}
            </p>
        </>
    );
};

export default ResultCard;