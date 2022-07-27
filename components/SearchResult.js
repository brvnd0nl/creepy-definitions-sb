import {useSupabaseContext} from '../context/SupabaseContext';
import ResultCard from "./ResultCard";

const SearchResult = () => {
    const {dictionaryArray} = useSupabaseContext();
    return(
        <>            
            <div className={dictionaryArray.length < 5 ? 'py-5' : 'py-2' }>
                {dictionaryArray.map(item => <ResultCard key={item.id} item={item}/>)}
            </div>
        </>
    );
}

export default SearchResult;