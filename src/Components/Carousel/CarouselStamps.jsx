import React, {useState} from 'react';
import { carouselStamps } from "../../imgData";
import useProducts from "../../Hooks/useProducts";
import "./Styles/Carousel.css";
import arrowLeft from "../../Assets/svg/left.svg";
import arrowRight from "../../Assets/svg/right.svg";


export function CarouselStamps() {
    const { stamps, setStamps } = useProducts();
  const [position, setPosition] = useState(0);
  const [positionLeft, setPositionleft] = useState(carouselStamps.length - 1);
  const [positionRight, setPositionRight] = useState(1);

  let infoStamps = () => {
      stamps.name = carouselStamps[position].name
    setStamps(stamps);
    stamps.state = true
    console.log(stamps)
  };
  
  const left = () => {
    if (position == 0) {
      setPosition(3);
    } else {
      setPosition(position - 1);
    }
    if (positionLeft == 0) {
      setPositionleft(3);
    } else {
      setPositionleft(positionLeft - 1);
    }
    if (positionRight == 0) {
      setPositionRight(3);
    } else {
      setPositionRight(positionRight - 1);
    }
  };
  const right = () => {
    if (position == 3) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
    if (positionRight == 3) {
      setPositionRight(0);
    } else {
      setPositionRight(positionRight + 1);
    }
    if (positionLeft == 3) {
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
      <img
        src={carouselStamps[positionLeft].image}
        alt=""
        width="150px"
      />

      <img
        onClick={infoStamps}
        className="img_desing"
        src={carouselStamps[position].image}
        alt=""
        width="150px"
      />
      <img
        src={carouselStamps[positionRight].image}
        alt=""
        width="150px"
      />

      <button className="right_button" onClick={right}>
        <img src={arrowRight} alt="" width="50px" />
      </button>
    </>
  );
}
