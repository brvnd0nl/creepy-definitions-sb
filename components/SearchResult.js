import {useSupabaseContext} from '../context/SupabaseContext';
import ResultCard from "./ResultCard";
import styles from '../styles/SearchResult.module.css';

const SearchResult = () => {
    const {dictionaryArray} = useSupabaseContext();
    return(
        <>            
            <div className={styles.container}>
                {dictionaryArray.map(item => <ResultCard key={item.id} item={item}/>)}
            </div>
        </>
    );
}

export default SearchResult;