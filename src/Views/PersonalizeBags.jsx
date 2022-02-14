import React from 'react';
import useProducts from '../Hooks/useProducts';
import { Link } from 'react-router-dom';
import arrowReturn from '../Assets/svg/arrowleft.svg'
import { AddCartBags } from '../Components/AddCart/AddCartBags';
import rhomb from "../Assets/svg/rhomb.svg";
import {MeasuresBags} from '../Components/Measures/MeasuresBags'

export function PersonalizeBags() {
  const {info, priceBags} = useProducts()
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
          <div>
            <div className="container_titlebooks">
              <img src={rhomb} alt="" />
              <p className="text_titlebooks">Tamaños Bolsas a la Medida</p>
            </div>
            <MeasuresBags />
          </div>
        
      <div className="AddProduct">
        <div>
          <Link to="/catalogo">
            <img src={arrowReturn} alt="" width="35px" />
          </Link>
        </div>
        <AddCartBags />
        <p>
          Total: $
          {info.name == "Cajas para Libretas" ? (
            <>{info.price}</>
          ) : (
            <>{priceBags}</>
          )}
        </p>
      </div>
    </div>
  );
}
