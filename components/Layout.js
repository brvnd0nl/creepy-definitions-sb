import Script from 'next/script';
import Header from "./Header";

const Layout = ({children, pagina}) => {
    return(
        <>           
            <Script src="https://kit.fontawesome.com/4aa328b7bd.js" crossOrigin='anonymous'></Script>
            <Header pagina={pagina} />
            {children}
        </>
    );
};

export default Layout;