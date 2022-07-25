import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { posts } from "../data/posts.js";

import { getBlog } from "../helpers/fetchApp";
import Post from "../components/Post";
import BtnPaginacion from "../components/BtnPaginacion";

const HomeScreen = () => {
  const [posts, setPosts] = useState({
    blogs: [],
    total: 0,
  });

  const [registro, setRegistro] = useState(0);

  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    getBlog(registro).then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.msg) {
        setMensaje(respuesta.msg);
      } else {
        setPosts({
          blogs: respuesta.blogs,
          total: respuesta.total,
        });
      }
      setLoading(false);
    });
  }, [registro]);

  const nextPage = () => {
    if (posts.total - registro > 5) {
      console.log("OK");
      setRegistro(registro + 5);
    }
  };

  const prevPage = () => {
    if (registro > 0) {
      console.log("OK");
      setRegistro(registro - 5);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Bienvenido al Blog!</h1>

          <hr />

          {loading ? (
            <div className="col-12 col-md-8 offset-md-2">
              <h3>Cragando...</h3>
            </div>
          ) : mensaje ? (
            <div className="col-12 col-md-6 offset-md-3">
              <div className="alert alert-danger" role="alert">
                {mensaje}
              </div>
              <Link className="btn btn-primary" to="/login">
                Volver
              </Link>
            </div>
          ) : (
            <>
              <div className="col-12 col-md-8 offset-md-2">
                {posts.blogs.map((post) => (
                  <Post post={post} key={post._id} />
                ))}
              </div>
              <BtnPaginacion
                registro={registro}
                total={posts.total}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
