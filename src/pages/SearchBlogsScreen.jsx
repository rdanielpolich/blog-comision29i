import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { buscarBlog } from "../helpers/fetchApp";

const SearchBlogsScreen = () => {
  const { termino } = useParams();
  const [blogs, setBlogs] = useState([]);

  console.log(termino);

  useEffect(() => {
    buscarBlog(termino).then((respuesta) => {
      console.log(respuesta.results);
      setBlogs(respuesta.results);
    });
  }, [termino]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <h3>Resultados de la búsqueda: "{termino}"</h3>
          <hr />
          {blogs.length > 0 ? (
            blogs.map((post) => <Post post={post} key={post._id} />)
          ) : (
            <span className="text-muted">No se encontraron registros</span>
          )}
          {/* 
          {blogs.map((post) => (
            <Post post={post} key={post._id} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default SearchBlogsScreen;
