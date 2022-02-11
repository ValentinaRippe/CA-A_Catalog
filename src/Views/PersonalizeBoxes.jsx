import React from "react";
import useProducts from "../Hooks/useProducts";
import { Link } from "react-router-dom";
import { AddCart } from "../Components/AddCart/AddCart";
import { CaracteristicsBoxes } from "../Components/Caracteristics/CaracteristicsBoxes";
import { Measures } from "../Components/Measures/Measures";
import rhomb from "../Assets/svg/rhomb.svg";
import arrowReturn from "../Assets/svg/arrowleft.svg";



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
        <CaracteristicsBoxes/>
      </div>
      <div>
      <div className="container_titlebooks">
          <img src={rhomb} alt="" />
          <p className="text_titlebooks">Tamaños Cajas a la Medida</p>
        </div>
        <Measures/>
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
