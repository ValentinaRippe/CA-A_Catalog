import React from "react";
import "../../Views/Styles/Catalog.css";
import { ButtonPersonalizer } from "../Buttons/ButtonPersonalizer";
import { dataProducts } from '../../Data'


export function Products({ /* state, products */ products, setProducts}) {

  /* if(state.length === undefined){
    state = products
  } */
  console.log(products)

  return (
    <div className='Products'>
       { products.map((product, index) => (
          <div key={index + 1} className="card_catalog">
            <div className="product">
              <div className="img_producst">
                <img src={product.image} alt="" />
              </div>
              <p>
                {product.name} {product.size}
              </p>
            </div>
            <div className="interact_products">
              <ButtonPersonalizer route={product.route} id={product.id} setProducts={setProducts}/>
              <div className="price_products">
                $<>{product.price}</>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
