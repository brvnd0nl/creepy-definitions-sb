import {useState} from 'react';
import { supabase } from '../supabase/client';
import { useSupabaseContext } from '../context/SupabaseContext';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '../styles/Register.module.css';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const {setUser} = useSupabaseContext();

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Las contraseñas no coinciden");
        }else{
            const { user, session, error } = await supabase.auth.signUp({
                email: username,
                password: password,
            });

            if (error) throw new Error(error);

            console.log(user);

            setUser(user);


            alert("Usuario creado");

            router.push("/");
        }
    }

  return (
    <>
      <style global jsx>
        {`
          body {
            font-family: "Roboto", sans-serif;
          }
        `}
      </style>
      <div className={`container-fluid ${styles.container}`}>
        <div className="d-flex vh-100 flex-column">
          <div className="row pt-5 justify-content-center align-items-center">
            <div className="col-md-5">
              <form
                onSubmit={async (e) => handleSubmit(e)}
                className={`card card-body ${styles.formulario} justify-content-between p-5`}
              >
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
                  <label className="fs-6" htmlFor="floatingUser">
                    Usuario
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label className="fs-6" htmlFor="floatingPassword">
                    Contraseña
                  </label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <label className="fs-6" htmlFor="floatingPassword">
                    Confirmar Contraseña
                  </label>
                </div>
                <div className="d-flex justify-content-center py-3">
                  <button className="btn btn-secondary btn-lg">
                    Registrar
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="fs-3">
                    ¿Tienes usuario?{" "}
                    <Link href="/login">Inicia Sesión aquí</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
