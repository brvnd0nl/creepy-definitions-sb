import { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import styles from "../styles/AboutUs.module.css";
import { useSupabaseContext } from "../context/SupabaseContext";

const AboutUs = () => {

  const {setTitlePage} = useSupabaseContext();

  useEffect(() => {
    setTitlePage("Acerca de nosotros");
  }, []);

  return (
    <>
      <Layout pagina="about-us">
        <Head />
        <style global jsx>
          {`
            body {
              font-family: "Roboto", sans-serif;
            }
          `}
        </style>
        <div className={`container-fluid ${styles.bg_Divs}`}>
          <div className="d-flex vh-100 flex-column">
            <div className="row pt-5 justify-content-center align-items-center">
              <div className={`col-md-5 ${styles.contenido}`}>
                <h1 className={styles.titulo}>About Us</h1>
                <div className="py-4">
                  <p className="fs-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ornare ante tincidunt, varius est id, mattis
                    turpis. Cras porta nisi velit, nec rutrum dolor elementum
                    et. Sed eleifend magna diam, ut ultricies sapien auctor nec.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Mauris dui turpis, venenatis vel magna in, posuere
                    pretium turpis. In feugiat, velit nec blandit elementum,
                    massa augue vulputate odio, ac facilisis lectus magna mollis
                    felis. Quisque convallis auctor nisi eget pharetra. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus.
                    Suspendisse rhoncus cursus sollicitudin. Pellentesque
                    pulvinar laoreet ligula at volutpat. Vestibulum blandit nec
                    est dictum ultrices. Morbi ornare, nisi id sollicitudin
                    elementum, lorem nisl placerat erat, id vestibulum dui nisl
                    ac dolor.
                  </p>
                  <p className="fs-3">
                    Sed eget neque egestas, molestie odio in, tincidunt velit.
                    Suspendisse congue eros congue, semper nisl sed, gravida
                    neque. Etiam sodales mi et dolor rhoncus sagittis.
                    Pellentesque augue nisi, pulvinar a laoreet vulputate,
                    mattis sit amet magna. Mauris bibendum, dui sit amet viverra
                    tincidunt, nibh diam tempor mi, ut tempus neque arcu in
                    eros. Integer elit lectus, finibus eget justo eget, iaculis
                    maximus mi. Fusce dictum tristique enim quis blandit. In hac
                    habitasse platea dictumst. In vitae lorem ante. Mauris et
                    lectus nibh. Vestibulum sodales sagittis elit. Ut risus
                    turpis, dictum ut purus eget, luctus fermentum nulla. Nulla
                    nec tellus mattis, dapibus velit ullamcorper, pharetra nunc.
                  </p>
                  <p className="fs-3">
                    Nunc convallis urna sed arcu volutpat rhoncus ut quis eros.
                    Curabitur turpis erat, eleifend at convallis non,
                    condimentum eget risus. Morbi ultricies suscipit semper.
                    Suspendisse efficitur vitae libero sed mollis. Proin
                    placerat consequat viverra. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae;
                    Donec ullamcorper libero sit amet lacus viverra, nec
                    ultrices ante molestie. Nunc a nibh nibh. Donec aliquet vel
                    felis eget congue. Praesent facilisis nulla vitae
                    scelerisque aliquam. Vivamus nec ullamcorper purus, eu
                    euismod odio. Nulla pulvinar orci mauris, eu porttitor
                    tortor facilisis venenatis.
                  </p>
                  <p className="fs-3">
                    Nam luctus placerat fermentum. Suspendisse pharetra pharetra
                    viverra. Morbi volutpat sem eu condimentum elementum. Nulla
                    mattis molestie vestibulum. Vestibulum lacus lacus,
                    tristique eget commodo in, malesuada sed lorem. Mauris
                    mattis tincidunt velit a imperdiet. Aliquam ultrices, ipsum
                    a iaculis eleifend, elit eros condimentum nunc, sit amet
                    laoreet augue mauris et turpis. Etiam convallis neque
                    ultrices dignissim placerat. Maecenas a neque imperdiet,
                    commodo mi sit amet, pellentesque risus. Ut aliquet, purus
                    et varius faucibus, metus ex varius massa, ut tristique
                    risus velit ullamcorper orci. Vestibulum ac nulla at lacus
                    rutrum blandit. Sed semper velit ut mauris vulputate
                    tincidunt. Fusce feugiat leo non pharetra lobortis. Morbi ac
                    lacinia tortor. Maecenas lacinia justo nibh, vel euismod
                    velit commodo a. Fusce placerat ac enim aliquam dignissim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
