import React, { useEffect, useState } from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";

import { useParams } from "react-router-dom";
import { getBlogById } from "../helpers/fetchApp";
// import { getPostById } from "../helpers/fetchApp";

const PostScreen = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    getBlogById(id).then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.msg) {
        setMensaje(respuesta.msg);
      } else {
        setPost(respuesta.blog);
      }
      setLoading(false);
    });
    // getPostById(id).then((respuesta) => {
    //   console.log(respuesta);
    //   setPost(respuesta);
    //   setLoading(false);
    // });
  }, []);

  return (
    <div>
      <div className="container col-12 col-md-8 offset-md-2 mt-3 justify-content-center ">
        <h1>POSTS</h1>
        <hr />
        {loading ? (
          <h3>Cargando...</h3>
        ) : mensaje ? (
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
              <div className="alert alert-danger" role="alert">
                {mensaje}
              </div>
              <Link className="btn btn-primary" to="/">
                Volver
              </Link>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col">
              <h3>{post.title}</h3>
              <div>
                <ReactMarkdown>{post.body}</ReactMarkdown>
              </div>
            </div>
            <div className="row">
              <div className="col col-6">
                <h5>Posteado por: {post.author.nombre}</h5>
              </div>
              <div className="col col-6">
                <small className="text-muted">
                  {moment(post.date).format("LLL")}
                </small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostScreen;
