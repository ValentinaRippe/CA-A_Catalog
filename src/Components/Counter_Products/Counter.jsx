import React, { useState } from "react";
import "../../Views/Styles/Cart.css";
import useProducts from "../../Hooks/useProducts";

export function Counter({ priceBooks, countBooks }) {
  const { setCountProducts } = useProducts();
  const [count, setCount] = useState(countBooks);
  let [price, setPrices] = useState(priceBooks);

  const sum = () => {
    setCount(count + 1);
    setPrices(() => price + priceBooks);
    setCountProducts(count);
  };
  const less = () => {
    setCount(count - 1);
    setPrices(() => price - priceBooks);
  };
  return (
    <div className="counterPrice_container">
      <p>$ {price}</p>
      <div className="counter_products">
        <button
          disabled={count === 1}
          onClick={less}
          className="arrowleft"
        ></button>
        <p>{count}</p>
        <button onClick={sum} className="arrowright"></button>
      </div>
    </div>
  );
}
