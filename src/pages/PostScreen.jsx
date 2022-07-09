import React from "react";

class Post {
  constructor(id, titulo, texto, userId, fecha) {
    this.id = id;
    this.titulo = titulo;
    this.texto = texto;
    this.userId = userId;
    this.fecha = fecha;
  }
}

const PostScreen = () => {
  return (
    <div>
      <div className="container col-12 col-md-8 offset-md-2 mt-3 justify-content-center ">
        <h1>POSTS</h1>
        <div className="row">
          <div className="col">
            <h3>{Post.titulo}</h3>
            <div>{Post.texto}</div>
          </div>
          <div className="row">
            <div className="col col-6">
              <h5>Posteado por: {Post.userId}</h5>
            </div>
            <div className="col col-6">
              <h5>{Post.fecha} fecha</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostScreen;
