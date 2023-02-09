import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import "./styles.css";
import axios from '../../api/api'; // Importamos la libreria
import { useNavigate } from 'react-router-dom';


function PopUpAdd() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const addU = () => {
    let user = {
      title: title,
      director: director,
      duration: duration,
      country: country,
      year: year,
      language: language,
      premiere: premiere,
    };
    console.log(user);
    axios
      .post("/api/user/addUser", user)
      .then((response) => {
        console.log(response.data);
         navegar(0);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="add-btn">
        <Button className="btn" onClick={handleShow}>
          Add
          <i className="ri-add-line icon"></i>
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ margin: "auto", color: "gray" }}>
              Add Film
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Title
            <input
              className="title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <p>
                Director
                <input
                  className="director"
                  type="text"
                  value={director}
                  onChange={(e) => {
                    setDirector(e.target.value);
                  }}
                />
              </p>

              <p>
                Duration
                <input
                  className="director"
                  type="text"
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                  }}
                />
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <p>
                Country
                <input
                  className="director"
                  type="text"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
                <hr style={{ width: "225px" }} />
              </p>

              <p>
                Year
                <input
                  className="director"
                  type="text"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                />
                <hr style={{ width: "225px" }} />
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <p>
                Lenguaje
                <input
                  className="director"
                  type="text"
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                  }}
                />
                <hr style={{ width: "225px" }} />
              </p>

              <p>
                Premiere
                <input
                  className="director"
                  type="text"
                  value={premiere}
                  onChange={(e) => {
                    setPremiere(e.target.value);
                  }}
                />
                <hr style={{ width: "225px" }} />
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="agg" onClick={addU}>
              <FontAwesomeIcon
                icon={faFloppyDisk}
                style={{ marginRight: "10px" }}
              />
              Registrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default PopUpAdd;