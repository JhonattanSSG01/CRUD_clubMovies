import React from "react";
import "./footer.css";
import Alejo from "../assets/alejo.png";
import Kevin from "../assets/kevin.png";
import Robinson from "../assets/robinson.png";
import Stiven from "../assets/stiven.png";
import Yeimmi from "../assets/yeimmi.png";
// import Alejo from '../assets/alejo.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <p>Disigned By</p>
          <section className="logos">
            <img src={Alejo} alt="" />
            <img src={Kevin} alt="" />
            <img src={Robinson} alt="" />
            <img src={Stiven} alt="" />
            <img src={Yeimmi} alt="" />
            <img src="" alt="" />
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
