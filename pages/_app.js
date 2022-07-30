import {SupabaseContextProvider} from '../context/SupabaseContext'
import Head from '../components/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/globalsImports.css';

function MyApp({ Component, pageProps }) {
  return (
    <SupabaseContextProvider>
      <Head />
      <Component {...pageProps} />
    </SupabaseContextProvider>
  ) 
}

export default MyApp
