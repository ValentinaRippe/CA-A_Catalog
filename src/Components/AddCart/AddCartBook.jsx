import React, {useState} from "react";
import addcart from "../../Assets/svg/addcart.svg";
import "./AddCart.css";
import useProducts from "../../Hooks/useProducts";
export function AddCartBook() {
  const {setInfoCart, addBooks, setAddBooks, info, desing, stamps, check, page} = useProducts()
  const [disable, setDisable] = useState(true)
  const [disableOk, setDisableOk] = useState(false)

  let infoProduct = () =>{
    addBooks.count = 1
    addBooks.desing = desing.name
    addBooks.image = info.image
    addBooks.name = info.name
    addBooks.pages = page.name
    addBooks.personalize = check.desingPersonalize
    addBooks.stamp = stamps.name
    addBooks.price = info.price
    addBooks.type = info.type
    addBooks.size = info.size
    addBooks.id = info.id
    alert('Se agrego tu producto')
    setAddBooks((prevState) => [...prevState, addBooks])
    setDisable(true)
    setInfoCart(info.price)
    console.log(addBooks)
  }
  const Ok = () =>{
    if(check.state && info.name && info.image && page.name){
      setDisable(false)
    }
    if(stamps.state && info.name && info.image){
      setDisable(false)
    }
    setDisableOk(true)
  }
  
  return (
    <div className='AddCart'>
      <button className='button_ok' disabled={disableOk} onClick={Ok} >Listo! ✔</button>
      <button onClick={infoProduct} className="add_product" disabled={disable}>
        <p>Agregar</p> <img src={addcart} alt="" width="30px" />
      </button>
    </div>
  );
}
