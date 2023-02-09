import axios from "../../api/api";
import React, { useEffect, useState } from "react";
import "./modal-edit.css";
import close_buttom from "./img/icons/close_page.svg";
import UK from "./img/icons/UK_icon.svg";
import SW from "./img/icons/SW_icon.svg";
import USA from "./img/icons/USA_icon.svg";
import JP from "./img/icons/JP_icon.svg";
import saveButon from "./img/icons/save_icon.svg";
import { useNavigate, useParams } from "react-router-dom";

const Modal_edit = ({ state, chageState }) => {
  const params = useParams();
  // Hooks
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");
  const [premiere, setPremiere] = useState("");

  //Para volver atrás al index
  const navegar = useNavigate();

  useEffect(() => {
    axios.post("/api/user/header/edit", { id: params.id }).then((response) => {
      console.log(response.data[0]);
      const dataUsuario = response.data[0];
      setTitle(dataUsuario.title);
      setDirector(dataUsuario.director);
      setDuration(dataUsuario.duration);
      setCountry(dataUsuario.country);
      setYear(dataUsuario.year);
      setLanguage(dataUsuario.language);
      setPremiere(dataUsuario.premiere);
    });
  }, []);

  const editarU = () => {
    const actualizarUsuario = {
      title: title,
      director: director,
      duration: duration,
      country: country,
      year: year,
      language: language,
      premiere: premiere,
    };
    console.log(actualizarUsuario);
    axios
      .post("/api/user/header/actualizarUsuario", actualizarUsuario)
      .then((response) => {
        console.log(response.data);
        navegar("/header");
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {state && (
        <div className="Overlay-modal">
          <div className="container-modal">
            <div className="modal_encabezated">
              <h1>Edit Film</h1>
            </div>
            <div>
              <input
                type="text"
                name="movie-name"
                id="movie-name"
                placeholder="movie name"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="inputs-container">
              <input
                type="text"
                name="movie-director"
                id="movie-director"
                placeholder="director name"
                value={director}
                onChange={(e) => {
                  setDirector(e.target.value);
                }}
              />
              <input
                type="text"
                name="movie-duration"
                id="movie-duration"
                placeholder="duration"
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
              <input
                type="text"
                name="movie-country"
                id="country"
                placeholder="country"
                value={country}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
              <input
                type="text"
                name="movie-year"
                id="year"
                placeholder="year"
                value={year}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
              <input
                type="text"
                name="movie-language"
                id="language"
                placeholder="language"
                value={language}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
              <input
                type="text"
                name="movie-premiere"
                id="premiere"
                placeholder="premiere"
                value={premiere}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
              {/* <select name="country" id="country">
                <option
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  UK
                  <img src={UK} />
                </option>
                <option
                  value="SW"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  SW
                  <img src={SW} />
                </option>
                <option value="USA">
                  USA
                  <img src={USA} />
                </option>
                <option value="JP">
                  JP
                  <img src={JP} />
                </option>
              </select>
              <select name="year" id="year">
                <option
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                >
                  year
                </option>
              </select>
              <select name="lenguaje" id="lenguaje">
                <option
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                  }}
                >
                  lenguaje
                </option>
              </select> */}
              {/* <input
                type="date"
                name="premiere"
                id="premiere"
                value={premiere}
                onChange={(e) => {
                  setPremiere(e.target.value);
                }}
              /> */}
            </div>
            <button onClick={editarU} className="save_button">
              <img src={saveButon} />
              Save
            </button>
            <button onClick={() => chageState(false)} className="close_button">
              <img src={close_buttom} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal_edit;
