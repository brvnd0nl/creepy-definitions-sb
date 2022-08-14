import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const SupabaseContext = createContext();

const LIMIT_DICCIONARY_ITEMS =
  process.env.NEXT_PUBLIC_LIMIT_DICCIONARY_ITEMS || 3;
const LIMIT_WIKI_RESULTS = process.env.NEXT_PUBLIC_LIMIT_WIKI_RESULTS || 2;

export const useSupabaseContext = () => {
  const context = useContext(SupabaseContext);

  if (!context)
    throw new Error(
      "useSupabaseContext must be used within a SupabaseContextProvider"
    );

  return context;
};

export const SupabaseContextProvider = ({ children }) => {
  const [dictionaryArray, setDictionaryArray] = useState([]);
  const [titlePage, setTitlePage] = useState("");
  const [useWiki, setUseWiki] = useState(false);
  const [gender, setGender] = useState("M");
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  const changeDarkMode = (newValue) => {
    setDarkMode(newValue);
  };

  const changeUseWiki = (newValue) => {
    setUseWiki(newValue);
  };

  const setNewGender = (newGender) => {
    setGender(newGender);
  };

  const getDictonaryArray = async (word) => {
    const dictionary = dictionaryArray;

    word = word.trim();

    const { error, data } = await supabase
      .from("dictionary")
      .select()
      .ilike("title", `%${word}%`);

    if (error) throw new Error(error);

    data.forEach((itemSB) => {
      dictionary = dictionary.filter((item) => item.id !== itemSB.id);

      dictionary.push(itemSB);

      if (dictionary.length > LIMIT_DICCIONARY_ITEMS) dictionary.splice(0, 1);
    });

    setDictionaryArray(dictionary);

    if (useWiki) await getResponseWikipedia(word);
  };

  const getResponseWikipedia = async (word) => {
    const { pages } = await fetch(
      `https://es.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=${LIMIT_WIKI_RESULTS}&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='${word}'`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => data.query);

    const dictionary = dictionaryArray;

    for (var i in pages) {
      const newData = {
        id: pages[i].index,
        title: pages[i].title,
        description: pages[i].extract,
        userId: "",
      };

      dictionary = dictionary.filter((item) => item.title !== newData.title);

      dictionary = [...dictionary, newData];

      if (dictionary.length > LIMIT_DICCIONARY_ITEMS) dictionary.splice(0, 1);
    }

    setDictionaryArray(dictionary);
  };

  const clearSearchResult = (id) => {
    setDictionaryArray(dictionaryArray.filter((item) => item.id !== id));
  };

  return (
    <SupabaseContext.Provider
      value={{
        dictionaryArray,
        useWiki,
        gender,
        darkMode,
        user,
        titlePage,
        getDictonaryArray,
        clearSearchResult,
        changeDarkMode,
        changeUseWiki,
        setNewGender,
        setUser,
        setTitlePage,
      }}
    >
      {children}
    </SupabaseContext.Provider>
  );
};
