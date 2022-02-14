import React from "react";
import { Link } from "react-router-dom";

import logo from "../Assets/svg/logocañanegro.svg";
import closed from "../Assets/svg/Closed.svg";

import useProducts from "../Hooks/useProducts";
import { CounterBooks } from "../Components/Counter_Products/CounterBooks";
import { CounterBox } from "../Components/Counter_Products/CounterBox";
import { CounterBags } from "../Components/Counter_Products/CounterBags";
import { Send } from "../Components/Send/Send";
import "./Styles/Cart.css";
export function Cart() {
  const { addBooks, setAddBooks, addBags, setAddBags, addBox, setAddBox, totalProducts } = useProducts();
  
  const onCloseBook = (cardId) => {
    setAddBooks(addBooks.filter((item, i) => i !== cardId));
  };
  const onCloseBox = (cardId) => {
    setAddBox(addBox.filter((item, i) => i !== cardId));
  };
  const onCloseBags = (cardId) => {
    setAddBags(addBags.filter((item, i) => i !== cardId));
  };
  console.log(addBooks)
  return (
    <div className="Cart">
      <Link className="link" to="/">
        <img className="logo_navbar" src={logo} alt="logo" />
      </Link>
      <div className="cards_products">
        {addBooks.map((item, index) => (
          <div className="product_books" key={index}>
            <div className="Remove">
              <div className="closed">
                <img
                  onClick={() => onCloseBook(index)}
                  src={closed}
                  alt=""
                  width="30px"
                />
              </div>
            </div>
            <div className="infoproduct_books">
              <img
                className="imageBooks"
                src={item.image}
                alt=""
                width="100px"
              />
              <ul>
                <li>
                  Nombre: {item.name} {item.size}
                </li>
                {item.size === "Grande" || item.size === "Mediana" ? (
                  <li>Personalizar: {item.personalize}</li>
                ) : null}
                <li>Papel Portada: {item.pages}</li>
                {item.size === "Grande" || item.size === "Mediana" ? (
                  <li>Diseño: {item.desing}</li>
                ) : (
                  <li>Sello: {item.stamp}</li>
                )}
              </ul>
            </div>
            <CounterBooks id={index} priceBooks={item.price} countBooks={item.count}  addBooks={addBooks} />
          </div>
        ))}
        {addBox.map((item, index) => (
          <div className="product_books" key={index}>
            <div className="Remove">
              <div className="closed">
                <img
                  onClick={() => onCloseBox(index)}
                  src={closed}
                  alt=""
                  width="30px"
                />
              </div>
            </div>
            <div className="infoproduct_books">
              <img
                className="imageBooks"
                src={item.image}
                alt=""
                width="100px"
              />
              <ul>
                <li>
                  Nombre: {item.name} {item.size}
                </li>
                <li>
                  Largo: {item.long}cms
                </li>
                <li>
                  Ancho: {item.width}cms
                </li>
                <li>
                  Alto: {item.high}cms
                </li>
              </ul>
            </div>
            <CounterBox id={index} priceBox={item.priceBox} countBox={item.count}  addBox={addBox} />
          </div>
        ))}
        {addBags.map((item, index) => (
          <div className="product_books" key={index}>
            <div className="Remove">
              <div className="closed">
                <img
                  onClick={() => onCloseBags(index)}
                  src={closed}
                  alt=""
                  width="30px"
                />
              </div>
            </div>
            <div className="infoproduct_books">
              <img
                className="imageBooks"
                src={item.image}
                alt=""
                width="100px"
              />
              <ul>
                <li>
                  Nombre: {item.name} {item.size}
                </li>
                <li>
                  Ancho: {item.width}cms
                </li>
                <li>
                  Alto: {item.high}cms
                </li>
              </ul>
            </div>
            <CounterBags id={index} priceBags={item.price} countBags={item.count}  addBags={addBags} />
          </div>
        ))}
      </div>
      <div>Total: $ {totalProducts}</div>
      <div>
        <Send/>
      </div>
    </div>
  );
}
