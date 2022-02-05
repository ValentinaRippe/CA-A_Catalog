import React from 'react';
import { dataProducts } from "../../Data";
import { type } from '../../Actions/catalogAction'

import './Filter.css'
export function Filter({dispatch}) {
    const books = () => {
        dispatch({type:type.booksFilter});
      };
      const planners = () =>{
        dispatch({type:type.plannersFilter});
      }
      const packaging = () =>{
        dispatch({type:type.packagingFilter});
      }
      const extras = () =>{
        dispatch({type:type.extrasFilter});
      }
      const all = () =>{
        dispatch({type:type.allFilter});
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
