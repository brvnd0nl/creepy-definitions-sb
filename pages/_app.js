import {SupabaseContextProvider} from '../context/SupabaseContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SupabaseContextProvider>
      <Component {...pageProps} />
    </SupabaseContextProvider>
  ) 
}

export default MyApp
