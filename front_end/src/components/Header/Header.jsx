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
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
