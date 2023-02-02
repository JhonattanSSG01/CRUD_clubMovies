import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Logo from "../assets/logo.png";
import LogoT from "../assets/logotipo.png";
import Porfile from "../assets/porfile.png";
import Table from "../Main/Table";
import { updateFilters } from '../../reducers/movies';
import "./header.css";
const Header = () => {
  const dispatch = useDispatch();//funcion que permite traer y ejecutar las acciones del store
  const filters = useSelector(state => state.movie.filters);//trae el estado de la store del objeto filters

  const addFilter = (key, value) => {
    if (!value) {//si no hay un valor en los objetos
      const { [key]: value, ...restFilters } = filters//el objeto filters mostrará todos los que estan

      dispatch(updateFilters(restFilters));
    } else {
      dispatch(updateFilters({ ...filters, [key]: value }))//Si no pues se filta por el valor
    }
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="logo" src={Logo} alt="logo de la tienda" />
              <span className="container-line">
                <hr className="line-side"></hr>
              </span>
              <img className="logoT" src={LogoT} alt="logotipo de la tienda" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <form className="form" role="search">
              <button>
                <i className="ri-search-2-line"></i>
              </button>
              <input
                className="input-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={e => addFilter('title', e.target.value)}//Cada vez que cambia su funcion tomara el valor por el string de title
              />
            </form>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <i className="ri-settings-4-line icon"></i>
                  <a className="nav-link link" href="#">
                    Settings
                  </a>
                </li>
                <li className="nav-item">
                  <i className="ri-notification-3-line icon"></i>
                  <a className="nav-link link" href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropLink"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="porfile"
                      src={Porfile}
                      alt="imagen del perfil"
                    />
                    Jose
                    <span>
                      <i className="ri-arrow-down-s-line arrow"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Porfile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Logo Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Table />
    </>
  );
};

export default Header;
