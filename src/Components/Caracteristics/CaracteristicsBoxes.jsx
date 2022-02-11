import React, {useState, useEffect} from 'react'
import { dataProducts } from '../../Data';
import rhomb from "../../Assets/svg/rhomb.svg";


export function CaracteristicsBoxes() {
  const [boxes, setBoxes] = useState([]);

  useEffect(()=>{
    setBoxes(dataProducts[2].products)
  })
  return (
    <div className='CaracteristicsBoxes'>
      <div className="container_titlebooks">
        <img src={rhomb} alt="" />
        <p className="text_titlebooks">Cajas para Libretas</p>
      </div>
      {boxes.map((data) => (
          data.name=='Cajas para Libretas'?<div key={data.id}>
            <div className="container_product">
              <p>
                {data.type} {data.size}
              </p>
              <p>{data.cms}</p>
              <p>{data.sheets}</p>
              <p>Cartón de caña de azucar</p>
              <p>Incluye tarjeta</p>
              <p style={{ fontWeight: "bold" }}>${data.price}</p>
            </div>
          </div>:null
        ))}
    </div>
  )
}
