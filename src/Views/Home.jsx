import React from "react";
import logo from "../Assets/svg/logonegro.svg";
import infografia from "../Assets/img/Infografia/infografía.png";
import "./Styles/Home.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="Home">
      <img className='infographic' src={infografia} alt="" />
      <img className="logo_home" src={logo} alt="logo" />
      <p className="text_caña">CAÑA</p>
      <p className="text_home">PRODUCTOS ECOLÓGICOS HECHOS A MANO</p>
      
      <Link to="/catalogo">
        <button className="button_home">
          <p className="text_catalog">Catálogo</p>
        </button>
      </Link>
    </div>
  );
}
