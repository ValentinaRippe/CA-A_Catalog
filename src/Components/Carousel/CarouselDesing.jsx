import React, { useState } from "react";
import { carouselDesing } from "../../imgData";
import useProducts from "../../Hooks/useProducts";
import "./Styles/Carousel.css";
import arrowLeft from "../../Assets/svg/left.svg";
import arrowRight from "../../Assets/svg/right.svg";

export function CarouselDesing() {
  const { desing, setDesing } = useProducts();
  const [position, setPosition] = useState(0);
  const [positionLeft, setPositionleft] = useState(carouselDesing.length - 1);
  const [positionRight, setPositionRight] = useState(1);
  const [active, setActive] = useState({});

  const activeStyle = {
    border: '2px solid black',
    transform: "scale(1.1)"
  };
  let infoDesing = () => {
    desing.name = carouselDesing[position].name;
    desing.state = true;
    setDesing(desing);
    setActive(activeStyle);
    console.log(desing);
  };

  const left = () => {
    if (position == 0) {
      setPosition(11);
    } else {
      setPosition(position - 1);
    }
    if (positionLeft == 0) {
      setPositionleft(11);
    } else {
      setPositionleft(positionLeft - 1);
    }
    if (positionRight == 0) {
      setPositionRight(11);
    } else {
      setPositionRight(positionRight - 1);
    }
  };
  const right = () => {
    if (position == 11) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
    if (positionRight == 11) {
      setPositionRight(0);
    } else {
      setPositionRight(positionRight + 1);
    }
    if (positionLeft == 11) {
      setPositionleft(0);
    } else {
      setPositionleft(positionLeft + 1);
    }
  };

  return (
    <>
      <button className="left_button" onClick={left}>
        <img src={arrowLeft} alt="" width="50px" />
      </button>
      <img src={carouselDesing[positionLeft].image} alt="" width="150px" />

      <img
        onClick={infoDesing}
        className="img_desing"
        style={active}
        src={carouselDesing[position].image}
        alt=""
        width="150px"
      />
      <img src={carouselDesing[positionRight].image} alt="" width="150px" />

      <button className="right_button" onClick={right}>
        <img src={arrowRight} alt="" width="50px" />
      </button>
    </>
  );
}
