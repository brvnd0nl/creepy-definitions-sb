import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../supabase/client";
import { useSupabaseContext } from "../context/SupabaseContext";
import styles from "../styles/AdminPage.module.css";

const AdminPage = () => {
  const { user } = useSupabaseContext();

  const router = useRouter();

  useEffect(() => {
      if (!user) {
          router.push("/");
      }
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) router.push("/");
    const {data, error} = await supabase.from("dictionary").insert({
      title,
      description,
      userId: user.id,
    });

    if(error) throw new Error(error);

    setTitle("");
    setDescription("");

    alert('Definición agregada');
  }

  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div className="d-flex vh-100 flex-column">
          <div className="row pt-5 justify-content-center align-items-center">
            <div className="col-md-5">
              <form
                onSubmit={async (e) => handleSubmit(e)}
                className={`card card-body ${styles.formulario} justify-content-between p-5`}
              >
                <div className="py-2">
                  <h2 className="fw-bold text-center">
                    Agregar Nueva Definición
                  </h2>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="floatingUser"
                    placeholder="Agregar Título"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                  />
                  <label className="fs-6" htmlFor="floatingUser">
                    Título
                  </label>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Agregar Descripcion"
                    name="floatingTextarea2"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    style={{ height: "100px" }}
                  ></textarea>
                  <label className="fs-6" htmlFor="floatingTextarea2">Comments</label>
                </div>
                <div className="d-flex justify-content-center py-3">
                  <button className="btn btn-primary btn-lg">Agregar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
