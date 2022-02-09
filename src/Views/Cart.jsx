import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/svg/logocañanegro.svg";
import useProducts from '../Hooks/useProducts'

export function Cart() {
  const { addBooks } = useProducts()
  return (
    <div>
      <Link className="link" to="/">
        <img className="logo_navbar" src={logo} alt="logo" />
      </Link>
    <div>
      <img src={addBooks.image} alt="" width='200px'/>
      <ul>
        <li>Nombre: {addBooks.name} {addBooks.size}</li>
        <li>Personalizar: { addBooks.personalize }</li>
        <li>Papel Portada: { addBooks.pages }</li>
        <li></li>
      </ul>
    </div>
    </div>
  );
}
