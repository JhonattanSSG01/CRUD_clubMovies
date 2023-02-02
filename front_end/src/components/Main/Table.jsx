import React from "react";
import "./table.css";
import cardIcon from '../assets/cardIcon.png';
import PopUpAdd from "../button-add/Add";
import Padre_modal from "../PopUp-Edit/Padre_modal";

const Table = () => {
  return (
    <>
      <main>
        <div className="container-buttons">
          <div className="container-filter">
            <select
              className="form-select all"
              aria-label="Default select example"
            >
              <option selected>All</option>
            </select>
            <select
              className="form-select year"
              aria-label="Default select example"
            >
              <option selected>Year</option>
            </select>
            <select
              className="form-select duration"
              aria-label="Default select example"
            >
              <option selected>Duration</option>
            </select>
          </div>
          <div className="add">
            <PopUpAdd/>
          </div>
        </div>
        <div className="container-cards">
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
                  <h5 className="card-title">Movie title</h5>
                  <p className="card-text">Age</p>
                  <p className="card-text">Duration</p>
                  <p className="card-text">Lenguage</p>
                  <p className="card-text">Premiere</p>
                  <p className="card-text">Country</p>
                  <p className="card-text">Director</p>
                  <p className="card-text">
                    <small className="edit">
                      <Padre_modal/>
                    </small>
                    <small className="delete">
                      <i className="ri-delete-bin-5-line icon"></i>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                  <h5 className="card-title">Movie title</h5>
                  <p className="card-text">Age</p>
                  <p className="card-text">Duration</p>
                  <p className="card-text">Lenguage</p>
                  <p className="card-text">Premiere</p>
                  <p className="card-text">Country</p>
                  <p className="card-text">Director</p>
                  <p className="card-text">
                    <small className="edit">
                      <Padre_modal/>
                    </small>
                    <small className="delete">
                      <i className="ri-delete-bin-5-line icon"></i>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                  <h5 className="card-title">Movie title</h5>
                  <p className="card-text">Age</p>
                  <p className="card-text">Duration</p>
                  <p className="card-text">Lenguage</p>
                  <p className="card-text">Premiere</p>
                  <p className="card-text">Country</p>
                  <p className="card-text">Director</p>
                  <p className="card-text">
                    <small className="edit">
                      <Padre_modal/>
                    </small>
                    <small className="delete">
                      <i className="ri-delete-bin-5-line icon"></i>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Table;
