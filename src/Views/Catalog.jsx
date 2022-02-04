import React, { useReducer } from "react";
import { dataProducts } from "../Data";
import { catalogReducer } from '../Reducer/catalogReducer';
import { catalogInitialState } from "../Reducer/catalogReducer";

import "./Styles/Catalog.css";
import { Filter } from '../Components/Filter_Catergories/Filter'
import { Products } from "../Components/Products/Products"; 


export function Catalog() {
  const [state, dispatch] = useReducer(catalogReducer,catalogInitialState)
  return (
    <div className="Catalog">
      <Filter dispatch={dispatch}/>
      <div className='Products'>
       <Products state={state} products={catalogInitialState.products}/>
      </div>
    </div>
  );
}
