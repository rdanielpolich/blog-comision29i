import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscarBlog } from "../helpers/fetchApp";

const SearchApp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      navigate(`/search/${inputValue}`);
      // buscarBlog(inputValue).then((respuesta) => {
      //   console.log(respuesta);
      //   navigate(`/search/${inputValue}`);
      // });
    }
  };

  return (
    // <div className="row">
    //   <div className="col-12 col-md-6 offset-md-3">
    <form className="ms-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Título del blog..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
    //   </div>
    // </div>
  );
};

export default SearchApp;
