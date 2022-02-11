import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/svg/logocañanegro.svg";
import useProducts from "../Hooks/useProducts";
import { Counter } from "../Components/Counter_Products/Counter";
import closed from "../Assets/svg/Closed.svg";
import "./Styles/Cart.css";
export function Cart() {
  const { addBooks, setAddBooks, totalProducts } = useProducts();
  
  const onClose = (cardId) => {
    setAddBooks(addBooks.filter((item, i) => i !== cardId));
    console.log(cardId);
  };
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
                  onClick={() => onClose(index)}
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
                {item.size === "Grande" || "Mediana" ? (
                  <li>Personalizar: {item.personalize}</li>
                ) : null}
                <li>Papel Portada: {item.pages}</li>
                {item.size === "Grande" || "Mediana" ? (
                  <li>Diseño: {item.desing}</li>
                ) : (
                  <li>Sello: {item.stamp}</li>
                )}
              </ul>
            </div>
            <Counter id={item.id} priceBooks={item.price} countBooks={item.count} />
          </div>
        ))}
      </div>
      <div>{totalProducts}</div>
    </div>
  );
}
