import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { posts } from "../data/posts.js";

import { getBlog } from "../helpers/fetchApp";
import Post from "../components/Post";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    getBlog().then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.msg) {
        setMensaje(respuesta.msg);
      } else {
        setPosts(respuesta.blogs);
      }
      setLoading(false);
    });
  }, []);

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
            <div className="col-12 col-md-8 offset-md-2">
              {posts.map((post) => (
                <Post post={post} key={post._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
