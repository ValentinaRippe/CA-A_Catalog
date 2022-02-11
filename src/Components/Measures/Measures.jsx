import React, { useState } from "react";

export function Measures() {
  const [price, setPrice] = useState();
  const [long, setLong] = useState();
  const [width, setWidth] = useState();
  const [high, setHigh] = useState();

  const handleSubmit = (event) => {
    event.preventDefault()
  };
  const handleChange= (event) =>{
    const { target } = event;
    const { name, value } = target;
    const newValues = {
        ...price,
        [name]: value,
      };
      setPrice(newValues)
  }
  console.log(price)
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="long">Largo</label>
        <input
          type="number"
          name="long"
          placeholder="cms"
          value={long}
          onChange={handleChange}
        />
        <label htmlFor="width">Ancho</label>
        <input
          type="number"
          name="width"
          placeholder="cms"
          value={width}
          onChange={handleChange}
        />
        <label htmlFor="high">Alto</label>
        <input
          type="number"
          name="high"
          placeholder="cms"
          value={high}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
      <p>$ {price}</p>
    </div>
  );
}
