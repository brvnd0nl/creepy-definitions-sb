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
        const {error, data} = await supabase.from('dictionary').select().ilike('title', `%${word}%`);

        if(error) throw new Error(error);

        setDictionaryArray(data);
        await getResponseWikipedia(word);
    };

    const getResponseWikipedia = async (word) => {

        const {pages} = await fetch(`https://es.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=5&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='${word}'`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => data.query);        

        const arrayDictionary = dictionaryArray;

        for (var i in pages) {

            const newData = {
                id: pages[i].index,
                title: pages[i].title,
                description: pages[i].extract,
                userId: "",
            };

            arrayDictionary = [...arrayDictionary, newData];            
        }
        
        setDictionaryArray(arrayDictionary);

    }

    const clearSearchResult = (id) => {
        setDictionaryArray(dictionaryArray.filter(item => item.id !== id));
    }

    return (
        <SupabaseContext.Provider value={{dictionaryArray, getDictonaryArray, clearSearchResult}}>{children}</SupabaseContext.Provider>            
    );
}