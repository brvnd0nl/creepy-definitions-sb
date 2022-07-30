import { useState, useEffect } from "react";
import Link from "next/link";
import {GoogleLoginButton} from 'react-social-login-buttons';
import { supabase } from "../supabase/client";
import {useSupabaseContext} from '../context/SupabaseContext';
import {useRouter} from 'next/router';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const {user, setUser} = useSupabaseContext();
  const router = useRouter();

  useEffect(() => {
    if(user){
      router.push("/");
    }
  },[]);

  const handleGoogleLogin = async (provider) => {
    const { error } = await supabase.auth.signIn({
      provider,
    });

    if (error) throw error;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { user, error } = await supabase.auth.signIn({
      email: username,
      password: password,
    });

    if (error) throw new Error(error);

    console.log("usuario");
    console.log(user);

    if(user){
      setUser(user);
      router.push("/");
    }
    
  };

  return (
    <>
      <style global jsx>
        {`
          body{
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>
      <div className={`container-fluid ${styles.container}`}>
        <div className="d-flex vh-100 flex-column">
          <div className="row pt-5 justify-content-center align-items-center">
            <div className="col-md-5">
              <form onSubmit={async (e) => handleSubmit(e)} className={`card card-body ${styles.formulario} justify-content-between p-5`}>
                <div className="py-2">
                  <h2 className="fw-bold text-center">Login</h2>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="floatingUser"
                    placeholder="correo@site.com"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label className="fs-6" htmlFor="floatingUser">Usuario</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="fs-6" htmlFor="floatingPassword">Contraseña</label>
                </div>
                <div className="d-flex justify-content-center py-3">
                  <button className="btn btn-secondary btn-lg">Iniciar Sesion</button>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center py-3">
                  <div className="w-50">
                    <GoogleLoginButton size="30px" className={styles.googleBtn} onClick={async () => handleGoogleLogin("google")} />
                    {/* <FacebookLoginButton size="30px" /> */}
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="fs-3">¿No tienes usuario? <Link href="/register">Registrate aquí</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>          
      </div>      
    </>
  );
};

export default Login;
