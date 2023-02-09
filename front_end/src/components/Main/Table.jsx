import { React, useState, useEffect } from "react";
import "./table.css";
import axios from "../../api/api";
import Movie from "./movie";
import PopUpAdd from "../button-add/Add";

const ListaUsuarios = (props) => {
  const [dataUsuarios, setDataUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("/api/user/header")
      .then((response) => {
        console.log(response.data);
        setDataUsuarios(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Mapear lista
  const listaUsuarios = dataUsuarios.map((user) => {
    return (
      <>
        <Movie user={user} key={user.id} />
      </>
    );
  });

  return (
    <>
      <main>
        <div className="container-buttons">
          <div className="container-filter">
            <select
              className="form-select all"
              aria-label="Default select example"
            >
              <option value={props}>All</option>
            </select>
            <select
              className="form-select year"
              aria-label="Default select example"
            >
              <option value={props}>Year</option>
            </select>
            <select
              className="form-select duration"
              aria-label="Default select example"
            >
              <option value={props}>Duration</option>
            </select>
          </div>
          <div className="add">
            <PopUpAdd />
          </div>
        </div>
        <div className="container-cards">{listaUsuarios}</div>
      </main>
    </>
  );
};

export default ListaUsuarios;
