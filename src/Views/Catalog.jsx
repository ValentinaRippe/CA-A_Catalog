import React from "react";
import { dataProducts } from "../Data";
import  addcart  from '../Assets/svg/addcart.svg'
import './Styles/Catalog.css'

export function Catalog() {
  return (
    <div>
      {dataProducts.map((data) =>
        data.products.map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.image} alt="" width="100px" />
              <p>
                {item.name} {item.size}
              </p>
            </div>
            <div>
              <button><p>Personalizar <img src={addcart} alt="" /></p></button>
              <div className='counter_products'>
                <button className='arrowleft'></button>
                <p>1</p>
                <button className='arrowright'></button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
