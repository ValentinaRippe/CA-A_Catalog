import React, {useState} from "react";
import addcart from "../../Assets/svg/addcart.svg";
import "./AddCart.css";
import useProducts from "../../Hooks/useProducts";
export function AddCartBags() {
  const {setInfoCart, addBags, setAddBags, info, calcBags, priceBags} = useProducts()
  const [disable, setDisable] = useState(true)
  const [disableOk, setDisableOk] = useState(false)

  let infoProductBags = () =>{
    addBags.count = 1
    addBags.long = calcBags.long
    addBags.width = calcBags.width
    addBags.priceBox = priceBags
    addBags.image = info.image
    addBags.name = info.name
    addBags.id = info.id
    alert('Se agrego tu producto')
    setAddBags((prevState) => [...prevState, addBags])
    setDisable(true)
    setInfoCart(priceBags)
  }
  const Ok = () =>{
    if(calcBags.long && info.name && info.image){
      setDisable(false)
    }
    setDisableOk(true)
  }
  
  return (
    <div className='AddCart'>
      <button className='button_ok' disabled={disableOk} onClick={Ok} >Listo! ✔</button>
      <button onClick={infoProductBags} className="add_product" disabled={disable}>
        <p>Agregar</p> <img src={addcart} alt="" width="30px" />
      </button>
    </div>
  );
}