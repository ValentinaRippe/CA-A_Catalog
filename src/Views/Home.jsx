import React, {useEffect} from "react";
import logo from "../Assets/svg/logonegro.svg";
import infografia from "../Assets/img/Infografia/infografía.png";
import "./Styles/Home.css";
import { Link } from "react-router-dom";
import { dataProducts } from "../Data";

export function Home({setProducts}) {

const all = () =>{
    dataProducts.map(data =>{
      data.products.map(item=>{
        setProducts((prevState) => [...prevState, item])
        console.log(item)
      })
    })
    /* dispatch({type:type.allFilter}) */;
  }

  return (
    <div className="Home">
      <img className='infographic' src={infografia} alt="" />
      <img className="logo_home" src={logo} alt="logo" />
      <p className="text_caña">CAÑA</p>
      <p className="text_home">PRODUCTOS ECOLÓGICOS HECHOS A MANO</p>
      
      <Link to="/catalogo">
        <button onClick={all} className="button_home">
          <p className="text_catalog">Catálogo</p>
        </button>
      </Link>
    </div>
  );
}
