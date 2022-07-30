import { useEffect } from "react";
import {supabase} from '../supabase/client.js';
import { useSupabaseContext } from "../context/SupabaseContext";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
import styles from "../styles/Index.module.css";

export default function Home() {

  const {dictionaryArray, setUser} = useSupabaseContext();

  useEffect(() => {
    setUser(supabase.auth.user());  
  }, []);
  
  return (
    <>
      <Layout pagina="index">
        <div className={styles.main}>
          <div className={styles.side_a_man}>
            <div className="contenedor">
              <SearchForm />
            </div>
          </div>
          <div className={styles.side_b}>
            <div className="contenedor">
              {dictionaryArray.length > 0 && <SearchResult />}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
