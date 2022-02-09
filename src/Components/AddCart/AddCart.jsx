import React, {useState, useEffect} from "react";
import addcart from "../../Assets/svg/addcart.svg";
import "./AddCart.css";
import useProducts from "../../Hooks/useProducts";
export function AddCart() {
  const {addBooks, setAddBooks, info, desing, stamps, check, page} = useProducts()
  const [disable, setDisable] = useState(true)

  let infoProduct = () =>{
    addBooks.desing = desing.name
    addBooks.image = info.image
    addBooks.name = info.name
    addBooks.pages = page.name
    addBooks.personalize = check.desingPersonalize
    addBooks.stamp = stamps.name
    addBooks.price = info.price
    addBooks.size = info.size
    alert('Se agrego tu producto')
    setAddBooks(addBooks)
    console.log(addBooks)
  }
  const active = () =>{
    if(desing.state && check.state){
      setDisable(false)
    }
    if(stamps.state){
      setDisable(false)
    }
  }
  
  return (
    <div className='AddCart'>
      <button className='button_ok' onClick={active} >Listo! ✔</button>
      <button onClick={infoProduct} className="add_product" disabled={disable}>
        <p>Agregar</p> <img src={addcart} alt="" width="30px" />
      </button>
    </div>
  );
}
