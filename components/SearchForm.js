import { useState } from 'react';
import {useSupabaseContext} from '../context/SupabaseContext';
import styles from '../styles/SearchForm.module.css';

const SearchForm = () => {
    const [word, setWord] = useState('');

    const {getDictonaryArray, user, changeUseWiki} = useSupabaseContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!word){
            alert("Rellene los campos e intente nuevamente.");
            return;
        }

        getDictonaryArray(word);
    }

    const handleChecbox = (e) => {
        changeUseWiki(e.target.checked);
    }

    return (
        <>
            <div className='container mt-5'>
                <h4 className={`h1 ${styles.titulo} py-3`}>Dicctionary</h4>
                <form className={styles.formulario}>
                    <input type="text" className={styles.textbox} onChange={(e) => setWord(e.target.value)} placeholder="Escriba aquí"></input>                    
                    <input type="button" value="Consultar" className={styles.submitButton} onClick={e => handleSubmit(e)}></input>             
                    <div>
                        
                        {user && (
                            <>
                                <input type="checkbox" onChange={(e) => handleChecbox(e)} />
                                <label className={styles.checkboxText}>&nbsp;Consultar con otros diccionarios</label>
                            </>
                        )}
                    </div>   
                </form>
            </div>
        </>
    );
};

export default SearchForm;