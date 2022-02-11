import React from 'react';
import { dataProducts } from "../../Data";
import { type } from '../../Reducer/Actions/catalogAction'

import './Filter.css'
export function Filter({/* dispatch */ setProducts}) {

    const books = () => {
      setProducts(dataProducts[0].products)
        /* dispatch({type:type.booksFilter}) */;
      };
      const planners = () =>{
        setProducts(dataProducts[1].products)
        /* dispatch({type:type.plannersFilter}) */;
      }
      const packaging = () =>{
        setProducts(dataProducts[2].products)
        /* dispatch({type:type.packagingFilter}) */;
      }
      const extras = () =>{
        setProducts(dataProducts[3].products)
        /* dispatch({type:type.extrasFilter}) */
      }
      const all = () =>{
        dataProducts.map(data =>{
          data.products.filter(item=>{
            setProducts((prevState) => [...prevState, item])
          })
        })
        /* dispatch({type:type.allFilter}) */
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
