import React, { useState } from "react";
import "../../Views/Styles/Cart.css";
import useProducts from "../../Hooks/useProducts";

export function CounterBags({ id, priceBags, countBags, addBags}) {
  const { setCountProducts, setAddBags } = useProducts();
  const [count, setCount] = useState(countBags);
  let [price, setPrices] = useState(priceBags);

  const sum = () => {
    setCount(count + 1);
    const items =[...addBags] 
    const plus = items[id].count + 1
    items[id].count = plus
    setAddBags(items)
    setPrices(() => price + priceBags);
    setCountProducts(count);
  };
  const less = () => {
    setCount(count - 1);
    const items =[...addBags] 
    const plus = items[id].count - 1
    items[id].count = plus
    setAddBags(items)
    setPrices(() => price - priceBags);
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