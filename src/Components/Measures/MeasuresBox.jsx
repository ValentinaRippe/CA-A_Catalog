import React from "react";
import useProducts from "../../Hooks/useProducts";

export function MeasuresBox() {
  const {priceBox, setPriceBox, calcBox, setCalcBox} = useProducts()
 

  const handleChange= (event) =>{
    const newValue = {
      ...calcBox,
      [event.target.name]:event.target.value
    }
      setCalcBox(newValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let x = (calcBox.long * calcBox.width)*2
    let y = (calcBox.high * calcBox.width)*2
    let z = (calcBox.long * calcBox.high)*2
    let priceBox = (x+y+z)*25
    if(priceBox < 5000){
      alert('Tu caja no puede valer menos de $5000')
    }else{
      setPriceBox(priceBox)
    }
  };

  console.log(calcBox)
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="long">Largo</label>
        <input
          type="number"
          name="long"
          placeholder="cms"
          onChange={handleChange}
        />
        <label htmlFor="width">Ancho</label>
        <input
          type="number"
          name="width"
          placeholder="cms"
          onChange={handleChange}
        />
        <label htmlFor="high">Alto</label>
        <input
          type="number"
          name="high"
          placeholder="cms"
          onChange={handleChange}
        />
        <button type="submit"></button>
      </form>
      <p>$ {priceBox}</p>
    </div>
  );
}
