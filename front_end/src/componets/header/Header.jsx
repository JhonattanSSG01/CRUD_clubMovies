import React from "react";
import './header.css';
import logo from "./img/logo.png";
import title from "./img/title.png";
import menu from "./img/menu.png";
import menu2 from "./img/menu2.png";
import config from "./img/config.png";
import campana from "./img/campana.png";
import jose from "./img/jose.png";
import arrow from "./img/arrow.png";

export default function Header(){
    return(
        <header id="headers" className="header">
            <div className="header__container">
                <div className="header__container--imgs">
                    <img className="header__container--logo" src={logo} alt="Logo cine"/>
                    <img className="header__container--title" src={title} alt="Logo title"/>
                    <img className="header__container--menu1" src={menu} alt="menu"/>
                    <input className="header__container--input1" type="text" placeholder="Search here..."/>
                    <div className="header__container--support">
                        <img src={config} alt="config" />
                        <p className="header__container--p">suport</p>
                    </div>
                    <div className="header__container--settings">
                        <img src={campana} alt="campana" />
                        <p className="header__container--p">settings</p>
                    </div>
                    <div className="header__container--perfil">
                        <img src={jose} alt="jose" />
                        <p className="header__container--p">José</p>
                        <img className="header__container--arrow" src={arrow} alt="arrow down" />
                    </div>
                </div>
                <div className="header__container--menus">
                    <img className="header__container--menu2" src={menu2} alt="menu"/>
                    <input className="header__container--input2" type="text" placeholder="Search here..."/>
                </div>
            </div>
        </header> 
    )
}