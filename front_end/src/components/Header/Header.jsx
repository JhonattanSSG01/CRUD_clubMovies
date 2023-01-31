import React from "react";
import "./header.css";
import Logo from "../assets/logo.png";
import LogoT from "../assets/logotipo.png";
import Porfile from "../assets/porfile.png";
import Table from "../Main/Table";
const Header = () => {
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
