import React, {useState} from "react";
import { Link } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import { CarouselDesing } from "../Components/Carousel/CarouselDesing";
import { CaracteristicsBooks } from "../Components/Caracteristics/CaracteristicsBooks";
import { CarouselStamps } from "../Components/Carousel/CarouselStamps";
import { CheckBox } from "../Components/CheckBox/CheckBox";
import { CoverPage } from "../Components/CoverPage/CoverPage";
import rhomb from "../Assets/svg/rhomb.svg";
import { AddCart } from "../Components/AddCart/AddCart";
import arrowReturn from "../Assets/svg/arrowleft.svg";

import "../Components/CoverPage/CoverPage.css";
import "./Styles/Personalize.css";
import "../Components/Carousel/Styles/Carousel.css";
import "../Components/AddCart/AddCart.css";

export function PersonalizeBooks() {
  const { info } = useProducts();
  const [ activeCheck, setActiveCheck ] = useState(false)

  return (
    <div className="PersonalizeBooks">
      <div className="personalize">
        <p className='text_productSelect'>
          {info.name} {info.type} {info.size}
        </p>
        <img className='img_productSelect' src={info.image} alt="" width="300px" />
        {info.size=='Grande' || info.size=='Mediana'?<>
        <div className="container_titlebooks">
          <img src={rhomb} alt="" />
          <p className="text_titlebooks">Diseños Libretas Grandes - Medianas</p>
        </div>
        <div className="checkBox">
          <CheckBox activeCheck={activeCheck} />
        </div>
        <div className="Carousel">
          <CarouselDesing setActiveCheck={setActiveCheck} />
        </div>
        </>:<>
        <div className="container_titlebooks">
          <img src={rhomb} alt="" />
          <p className="text_titlebooks">Diseños Libretas Pequeñas - Mini</p>
        </div>
        <div className="Carousel">
          <CarouselStamps />
        </div> </>}
        <div className="container_titlebooks">
          <img src={rhomb} alt="" />
          <p className="text_titlebooks">Papel Portada</p>
        </div>
        <div className="coverPage">
          <CoverPage />
        </div>
        <div className="AddProduct">
          <div>
            <Link to="/catalogo">
              <img src={arrowReturn} alt="" width="35px" />
            </Link>
          </div>
          <AddCart />
          <p>Total: $ {info.price}</p>
        </div>
      </div>
      <div className="caracteristics_books">
        <div className="text_caracteristics">
          <p>Características Generales Libretas</p>
        </div>
        <CaracteristicsBooks />
      </div>
    </div>
  );
}
