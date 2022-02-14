import React, { useState } from "react";
import "../../Views/Styles/Cart.css";
import useProducts from "../../Hooks/useProducts";

export function CounterBox({ id, priceBox, countBox, addBox}) {
  const { setCountProducts, setAddBox } = useProducts();
  const [count, setCount] = useState(countBox);
  let [price, setPrices] = useState(priceBox);

  const sum = () => {
    setCount(count + 1);
    const items =[...addBox] 
    const plus = items[id].count + 1
    items[id].count = plus
    setAddBox(items)
    setPrices(() => price + priceBox);
    setCountProducts(count);
  };
  const less = () => {
    setCount(count - 1);
    const items =[...addBox] 
    const plus = items[id].count - 1
    items[id].count = plus
    setAddBox(items)
    setPrices(() => price - priceBox);
  };
  console.log(price)
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