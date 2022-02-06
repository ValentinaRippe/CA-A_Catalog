import React, {useState, useEffect} from 'react';

export function Counter({price, id}) {
     const [count, setCount] = useState(0)
     const [prices, setPrices] = useState(price)
     
     const sum = () =>{
        if(id === id){
         setCount(count +1)
            setPrices(price + price)
         }
     }
     const subs = () =>{
        setCount(count -1)
        setPrices(price - price)
    }
    console.log(price)
  return (
  <div>
      <div className="counter_products">
                <button onClick={subs} className="arrowleft"></button>
                <p>{count}</p>
                <button onClick={sum} className="arrowright"></button>
              </div>
  </div>
  );
}
