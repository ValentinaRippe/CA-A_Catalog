import React from "react";
import useProducts from "../Hooks/useProducts";
import { Link } from "react-router-dom";
import arrowReturn from "../Assets/svg/arrowleft.svg";
import { AddCart } from "../Components/AddCart/AddCart";

import "./Styles/Personalize.css";

export function PersonalizeBoxes() {
  const { info } = useProducts();

  return (
    <div className="personalize">
      <p className="text_productSelect">
        {info.name} {info.type} {info.size}
      </p>
      <img
        className="img_productSelect"
        src={info.image}
        alt=""
        width="300px"
      />
      <div className="caracteristics">
        <div className="text_caracteristics">
          <p>Características Generales</p>
        </div>
      </div>
      <div className="AddProduct">
        <div>
          <Link to="/catalogo">
            <img src={arrowReturn} alt="" width="35px" />
          </Link>
        </div>
        <AddCart />
        <p>Total: ${info.price}</p>
      </div>
    </div>
  );
}
