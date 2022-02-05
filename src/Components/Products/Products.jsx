import React from "react";
import "../../Views/Styles/Catalog.css";
import addcart from "../../Assets/svg/addcart.svg";

export function Products({ state, products }) {
  

  if(state.length === undefined){
    state = products
  }

  return (
    <div>
       {state.map((item, index) => (
          <div key={index} className="card_catalog">
            <div className="product">
              <div className="img_producst">
                <img src={item.image} alt="" />
              </div>
              <p>
                {item.name} {item.size}
              </p>
            </div>
            <div className="interact_products">
              <button className="personalizer_products">
                <p>Personalizar</p> <img src={addcart} alt="" width="30px" />
              </button>
              <div className="counter_products">
                <button className="arrowleft"></button>
                <p>1</p>
                <button className="arrowright"></button>
              </div>
              <div className="price_products">
                $<>{item.price}</>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
