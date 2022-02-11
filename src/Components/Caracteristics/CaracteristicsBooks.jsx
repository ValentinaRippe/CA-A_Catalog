import React, { useState, useEffect } from "react";
import { dataProducts } from "../../Data";
import "./Caracteristics.css";
import rhomb from "../../Assets/svg/rhomb.svg";

export function CaracteristicsBooks() {
  const [books, setBooks] = useState([]);
  const [planner, setPlanners] = useState([]);

  useEffect(() => {
    setBooks(dataProducts[0].products);
    setPlanners(dataProducts[1].products);
  }, []);

  return (
    <div className="Caracteristics">
      <div className="container_titlebooks">
        <img src={rhomb} alt="" />
        <p className="text_titlebooks">
          Libretas Tradicionales y Especializadas
        </p>
      </div>
      <div className="container_products">
        {books.map((data) => (
          
            <div key={data.id}className="container_product">
              <p>
                {data.type} {data.size}
              </p>
              <p>{data.cms}</p>
              <p>{data.sheets}</p>
              <p>Papel de caña</p>
              <p style={{ fontWeight: "bold" }}>${data.price}</p>
            </div>
        ))}
      </div>
      <div className="container_titlebooks">
        <img src={rhomb} alt="" />
        <p className="text_titlebooks">Planeadores</p>
      </div>
      <div className="container_products">
        {planner.map((data) => (
          <div key={data.id}>
            <div className="container_product">
              <p>
                {data.type} {data.size}
              </p>
              <p>{data.cms}</p>
              <p>{data.sheets}</p>
              <p>Papel de caña</p>
              <p style={{ fontWeight: "bold" }}>${data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
