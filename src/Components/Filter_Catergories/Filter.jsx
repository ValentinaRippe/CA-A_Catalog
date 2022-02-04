import React from 'react';
import { dataProducts } from "../../Data";

import './Filter.css'
export function Filter({dispatch}) {


    const books = () => {
        dispatch(dataProducts[0].products);
      };
      const planners = () =>{
        dispatch(dataProducts[1].products);
      }
      const packaging = () =>{
        dispatch(dataProducts[2].products);
      }
      const extras = () =>{
        dispatch(dataProducts[3].products);
      }
      const all = () =>{
        dataProducts.map((data) => {
          data.products.map(item => {
          dispatch((prevState) => [... prevState, item]
          )})
      })
      }
  return (
  <div className='buttons_filter'>
      <button className="filter_products" onClick={books}>Libretas</button>
      <button className="filter_products" onClick={planners}>Planeadores</button>
      <button className="filter_products" onClick={packaging}>Paqueteria</button>
      <button className="filter_products" onClick={extras}>Extras</button>
      <button className="filter_products" onClick={all}>Todo</button>
  </div>
  );
}
