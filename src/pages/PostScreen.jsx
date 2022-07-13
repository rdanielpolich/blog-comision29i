import React, { useEffect } from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

import { useParams } from "react-router-dom";

import { getPostById } from "../helpers/fetchApp";
const PostScreen = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostById(id).then((respuesta) => {
      console.log(respuesta);
      setPost(respuesta);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div className="container col-12 col-md-8 offset-md-2 mt-3 justify-content-center ">
        <h1>POSTS</h1>
        {loading ? (
          <h3>Cargando...</h3>
        ) : (
          <div className="row">
            <div className="col">
              <h3>{post.title}</h3>
              <div>
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </div>
            <div className="row">
              <div className="col col-6">
                <h5>Posteado por: {post.user}</h5>
              </div>
              <div className="col col-6">
                <small className="text-muted">{post.fecha}</small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostScreen;
