import React from "react";
import useProducts from "../../Hooks/useProducts";

export function MeasuresBags() {
  const {priceBags, setPriceBags, calcBags, setCalcBags} = useProducts()
 

  const handleChange= (event) =>{
    const newValue = {
      ...calcBags,
      [event.target.name]:event.target.value
    }
      setCalcBags(newValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let x = (calcBags.long * calcBags.width)*2
    let priceBags = x*12
    if(priceBags < 2000){
      alert('Tu bolsa no puede valer menos de $2000')
    }else{
      setPriceBags(priceBags)
    }
  };

  console.log(calcBags)
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
        <button type="submit"></button>
      </form>
      <p>$ {priceBags}</p>
    </div>
  );
}