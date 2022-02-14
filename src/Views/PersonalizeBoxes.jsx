import React from "react";
import useProducts from "../Hooks/useProducts";
import { Link } from "react-router-dom";
import { AddCartBox } from "../Components/AddCart/AddCartBox.jsx";
import { CaracteristicsBoxes } from "../Components/Caracteristics/CaracteristicsBoxes";
import rhomb from "../Assets/svg/rhomb.svg";
import arrowReturn from "../Assets/svg/arrowleft.svg";

import "./Styles/Personalize.css";
import { MeasuresBox } from "../Components/Measures/MeasuresBox";

export function PersonalizeBoxes() {
  const { info } = useProducts();

  const { priceBox } = useProducts();

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
      {info.name == "Cajas para Libretas" ? (
        <>
          <div className="caracteristics">
            <div className="text_caracteristics">
              <p>Características Generales</p>
            </div>
            <CaracteristicsBoxes />
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="container_titlebooks">
              <img src={rhomb} alt="" />
              <p className="text_titlebooks">Tamaños Cajas a la Medida</p>
            </div>
            <MeasuresBox />
          </div>
        </>
      )}
      <div className="AddProduct">
        <div>
          <Link to="/catalogo">
            <img src={arrowReturn} alt="" width="35px" />
          </Link>
        </div>
        <AddCartBox />
        <p>
          Total: $
          {info.name == "Cajas para Libretas" ? (
            <>{info.price}</>
          ) : (
            <>{priceBox}</>
          )}
        </p>
      </div>
    </div>
  );
}
