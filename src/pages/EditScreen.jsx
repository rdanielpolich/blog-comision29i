import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import { postBlog } from "../helpers/fetchApp";
const EditScreen = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [mensaje, setMensaje] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = {
      title,
      body,
    };

    postBlog(datos).then((respuesta) => {
      console.log(respuesta.errors);
      if (respuesta?.errors) {
        setMensaje(respuesta.errors);
      } else {
        setMensaje([{ msg: "Entrada de blog creada!" }]);
      }
      setTitle("");
      setBody("");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
    });
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <h3 className="text-center">Crea tu entrada de blog</h3>
          <div className="col-6 mt-5 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ingrese el titulo del blog"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contenido</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <div className="d-flex flex-row-reverse bd-highlight">
                <button className="btn btn-dark">Guardar</button>
              </div>
            </form>
            {mensaje.length > 0 && (
              <div className="my-3">
                {mensaje.map((item, index) => (
                  <div
                    className={
                      item?.param ? "alert alert-danger" : "alert alert-primary"
                    }
                    role="alert"
                    key={index}
                  >
                    {item.msg}
                  </div>
                ))}
              </div>
            )}
            <div>
              <p>Preview</p>
              <ReactMarkdown>{body}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditScreen;
