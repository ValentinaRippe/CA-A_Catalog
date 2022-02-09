import React, { useState } from "react";
import { coverPage } from "../../imgData";
import useProducts from "../../Hooks/useProducts";
export function CoverPage() {
  const { page, setPage } = useProducts();
  const [active, setActive] = useState('')
  let pageInfo = (name) => {
    page.name = name
    page.state = true
    console.log(page)
    setPage(page)
    setActive(name)
  };
  return (
    <>
      {coverPage.map((item, index) => (
        <div
          onClick={()=>pageInfo(item.name)}
          key={index}
        >
          <img
          className={active==item.name?'active_page':''}
            key={index}
            src={item.image}
            alt=""
            width="100px"
            height="80px"
          />
          <div>
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </>
  );
}
