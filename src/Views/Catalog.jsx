import React from "react";

import "./Styles/Catalog.css";
import { Filter } from '../Components/Filter_Catergories/Filter'
import { Products } from "../Components/Products/Products"; 
import useProducts from '../Hooks/useProducts';


export function Catalog() {
 const {products, setProducts} = useProducts()

  return (
    <div className="Catalog">
      <Filter products={products} setProducts={setProducts}/>
      <div>
       <Products  products={products} setProducts={setProducts}/>
      </div>
    </div>
  );
}
