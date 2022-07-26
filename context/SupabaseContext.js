import {createContext, useContext, useState} from 'react';
import {supabase} from '../supabase/client'

export const SupabaseContext = createContext();

export const useSupabaseContext = () => {
    const context = useContext(SupabaseContext);

    if (!context) throw new Error('useSupabaseContext must be used within a SupabaseContextProvider');

    return context;
}

export const SupabaseContextProvider = ({children}) => {

    const [dictionaryArray, setDictionaryArray] = useState([]);

    const getDictonaryArray = async (word) => {
        const {error, data} = await supabase.from('dictionary').select().ilike('tittle', `%${word}%`);

        if(error) throw new Error(error);

        setDictionaryArray(data);

        console.log(data);
    };

    const clearSearchResult = () => {
        setDictionaryArray([]);
    }

    return (
        <SupabaseContext.Provider value={{dictionaryArray, getDictonaryArray, clearSearchResult}}>{children}</SupabaseContext.Provider>            
    );
}