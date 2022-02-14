import React, { useState } from "react";
import "../../Views/Styles/Cart.css";
import useProducts from "../../Hooks/useProducts";

export function CounterBooks({ id, priceBooks, countBooks, addBooks}) {
  const { setCountProducts, setAddBooks } = useProducts();
  const [count, setCount] = useState(countBooks);
  let [price, setPrices] = useState(priceBooks);

  const sum = () => {
    setCount(count + 1);
    const items =[...addBooks] 
    const plus = items[id].count + 1
    items[id].count = plus
    setAddBooks(items)
    setPrices(() => price + priceBooks);
    setCountProducts(count);
  };
  const less = () => {
    setCount(count - 1);
    const items =[...addBooks] 
    const plus = items[id].count - 1
    items[id].count = plus
    setAddBooks(items)
    setPrices(() => price - priceBooks);
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
