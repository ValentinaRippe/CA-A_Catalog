import React, { useReducer, useState } from "react";
import { dataProducts } from "../Data";
import { catalogReducer } from '../Reducer/catalogReducer';
import { catalogInitialState } from "../Reducer/catalogReducer";

import "./Styles/Catalog.css";
import { Filter } from '../Components/Filter_Catergories/Filter'
import { Products } from "../Components/Products/Products"; 
import useProducts from '../Hooks/useProducts';


export function Catalog() {
  /* const [state, dispatch] = useReducer(catalogReducer, catalogInitialState) */
 const {products, setProducts} = useProducts()

  return (
    <div className="Catalog">
      <Filter products={products} setProducts={setProducts}/* dispatch={dispatch} *//>
      <div >
       <Products  products={products} setProducts={setProducts} /* state={state} products={catalogInitialState.products} *//>
      </div>
    </div>
  );
}
