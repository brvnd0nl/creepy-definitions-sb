import { useState } from 'react';
import {useSupabaseContext} from '../context/SupabaseContext';
import styles from '../styles/SearchForm.module.css';

const SearchForm = () => {
    const [word, setWord] = useState('');

    const {getDictonaryArray} = useSupabaseContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!word){
            alert("Rellene los campos e intente nuevamente.");
            return;
        }

        getDictonaryArray(word);

        console.log(word);
    }

    return (
        <>
            <div className='container mt-5'>
                <h4 className={`h1 ${styles.titulo} py-3`}>Dicctionary</h4>
                <form className={styles.formulario}>
                    <input type="text" className={styles.textbox} onChange={(e) => setWord(e.target.value)} placeholder="Escriba aquí"></input>
                    <input type="button" value="Consultar" className={styles.submitButton} onClick={e => handleSubmit(e)}></input>                
                </form>
            </div>
        </>
    );
};

export default SearchForm;