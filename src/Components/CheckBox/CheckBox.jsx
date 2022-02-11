import React, { useState } from "react";
import important from "../../Assets/svg/important.svg";
import "../../Components/CheckBox/CheckBox.css";
import useProducts from "../../Hooks/useProducts";

export function CheckBox({activeCheck}) {
  const { check, setCheck } = useProducts();
  
  const onChangeValue = (event) => {
    check.desingPersonalize = event.target.value;
    check.state = true
    setCheck(check)
    console.log(check)
  }


  return (
    <>
      <img src={important} alt="" />
      <p>Diseño personalizado</p>
      <div onChange={onChangeValue}>
        <p>SI</p>
        <input
          type="radio"
          name='check'
          value='Si'
          disabled={activeCheck}
        />
        <p>NO</p>
        <input
          type="radio"
          name='check'
          value='No'
        />
      </div>
    </>
  );
}
