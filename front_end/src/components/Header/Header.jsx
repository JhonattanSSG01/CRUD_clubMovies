import React from "react";
import "./header.css";
import Logo from "./assets/logo.png";
import LogoT from "./assets/logotipo.png";
import Porfile from "./assets/porfile.png";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="logo de la tienda" />
              <span className="container-line">
                <hr className="line-side"></hr>
              </span>
              <img src={LogoT} alt="logotipo de la tienda" />
            </a>
            <form
              className="d-flex form"
              role="search"
              style={{ margin: "0 10px" }}
            >
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
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
