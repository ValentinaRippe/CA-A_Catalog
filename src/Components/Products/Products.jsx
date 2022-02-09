import React from "react";
import "../../Views/Styles/Catalog.css";
import { ButtonPersonalizer } from "../Buttons/ButtonPersonalizer";
import { dataProducts } from "../../Data";
import './Products.css'

export function Products({ /* state, products */ products, setProducts }) {
  
  /* if(state.length === undefined){
    state = products
  } */
  console.log();

  return (
    <div className="Products">
      {products.map((product, index) => (
        <div key={index + 1} className="card_catalog">
          <div className="product">
            <div className="img_producst">
              <img src={product.image} alt="" />
            </div>
            <p>
              {product.name} {product.type} {product.size}
            </p>
          </div>
          <div className="interact_products">
            <ButtonPersonalizer
              route={product.route}
              id={product.id}
              setProducts={setProducts}
              name={product.name}
              image={product.image}
              price={product.price}
              size={product.size}
              type={product.type}
            />
            <div className="price_products">
              $<>{product.price}</>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
