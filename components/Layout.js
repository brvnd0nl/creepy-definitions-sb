import Head from "next/head";
import Script from 'next/script';
import Header from "./Header";

const Layout = ({children, pagina}) => {
    return(
        <>
            <Head>
                <title>Creepy Definitions</title>
                <meta name="description" content="Diccionario para guardar vainas raras." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Script src="https://kit.fontawesome.com/4aa328b7bd.js" crossOrigin='anonymous'></Script>
            <Header pagina={pagina} />
            {children}
        </>
    );
};

export default Layout;