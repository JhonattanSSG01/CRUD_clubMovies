import axios from "../../api/api";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cardIcon from "../assets/cardIcon.png";
import Padre_modal from "../PopUp-Edit/Padre_modal";

const Movie = ({ user }) => {
  const navegar = useNavigate();
  const borrarUsuario = (id) => {
    axios
      .delete("/api/user/header/borrarUsuario", { id: id })
      .then((response) => {
        console.log(response.data);
        navegar(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5 figure">
            <img
              src={cardIcon}
              className="img-fluid rounded-start"
              alt="Imagen alusiva"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title text-center">{user.title}</h3>
              <p className="card-text">{user.director}</p>
              <p className="card-text">{user.duration} minutes</p>
              <p className="card-text">{user.country}</p>
              <p className="card-text">{user.year}</p>
              <p className="card-text">{user.language}</p>
              <p className="card-text">{user.premiere}</p>
              <p className="card-text">
                <small className="edit">
                  <Link to={`/header`}>
                    <Padre_modal />
                  </Link>
                </small>
                <small className="delete">
                  <button
                    onClick={() => {
                      borrarUsuario(user.id);
                    }}
                    style={{ backgroundColor: "transparent", color: 'inherit', border: 'none'}}
                  >
                    <i className="ri-delete-bin-5-line icon"></i>
                  </button>
                </small>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-sm-6 offset-3">
            <ul className="list-group">
              <li className="list-group-item">{usuario.nombre}</li>
              <li className="list-group-item">{usuario.email}</li>
              <li className="list-group-item">{usuario.telefono}</li>
              <li className="list-group-item">{usuario._id}</li>
            </ul>
            <Link to={`/editarUsuario/${usuario._id}`}>
              <li className="btn btn-success">Editar</li>
            </Link>
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => {
                borrarUsuario(usuario.id);
              }}
            >
              Eliminar
            </button>
            <hr className="mt-4" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Movie;
