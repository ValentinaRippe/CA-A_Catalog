import React, {useState} from "react";
import addcart from "../../Assets/svg/addcart.svg";
import "./AddCart.css";
import useProducts from "../../Hooks/useProducts";
export function AddCartBox() {
  const {setInfoCart, addBox, setAddBox, info, calcBox, priceBox} = useProducts()
  const [disable, setDisable] = useState(true)
  const [disableOk, setDisableOk] = useState(false)

  let infoProductBox = () =>{
    addBox.count = 1
    addBox.long = calcBox.long
    addBox.width = calcBox.width
    addBox.high = calcBox.high
    addBox.priceBox = priceBox
    addBox.image = info.image
    addBox.name = info.name
    addBox.id = info.id
    alert('Se agrego tu producto')
    setAddBox((prevState) => [...prevState, addBox])
    setDisable(true)
    setInfoCart(priceBox)
    console.log(addBox)
  }
  const Ok = () =>{
    if(calcBox.long && info.name && info.image){
      setDisable(false)
    }
    setDisableOk(true)
  }
  
  return (
    <div className='AddCart'>
      <button className='button_ok' disabled={disableOk} onClick={Ok} >Listo! ✔</button>
      <button onClick={infoProductBox} className="add_product" disabled={disable}>
        <p>Agregar</p> <img src={addcart} alt="" width="30px" />
      </button>
    </div>
  );
}