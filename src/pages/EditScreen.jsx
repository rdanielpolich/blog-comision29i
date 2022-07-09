import React from "react";

const EditScreen = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6 mt-5 ">
            <form>
            <div className="mb-3">
              <label className="form-label">Titulo</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ingrese el titulo del blog"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contenido</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="d-flex flex-row-reverse bd-highlight">
            <button type="button" className="btn btn-dark">Guardar</button>
            </div>
            </form>
            <div>
              <p>Preview</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditScreen;
