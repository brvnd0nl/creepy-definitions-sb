import {useSupabaseContext} from '../context/SupabaseContext';
import ResultCard from "./ResultCard";

const SearchResult = () => {
    const {dictionaryArray} = useSupabaseContext();
    return(
        <>            
            <div className="py-5">
                {dictionaryArray.map(item => <ResultCard key={item.id} item={item}/>)}
            </div>
        </>
    );
}

export default SearchResult;