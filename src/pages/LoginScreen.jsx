import React from "react";
import "../css/login.css"

const LoginScreen = () => {
  return (


      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <div className="card mt-5">
              <div className="card-header text-center">
                <h2><i className="fa fa-user-circle-o me-3" aria-hidden="true"></i>Iniciar Sesion</h2>
              </div>
              <div className="card-body text-center">
                <label className="me-3" >Usuario</label><br />
                <input type="text" /><br /><br />
                <label className >Contraseña</label><br />
                <input type="text" />
              </div>
              <div className="card-footer d-flex justify-content-evenly">
                <button className="btn btn-success btn-lg">Iniciar Sesion</button>
                <button className="btn btn-success btn-lg"><i class="fa fa-google me-2" aria-hidden="true"></i>Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>


  );
};

export default LoginScreen;
