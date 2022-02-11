import React, { useState } from "react";
import { Link } from "react-router-dom";
import whatsApp from "../../Assets/svg/whatsApp.svg";
import "./Send.css";
import useProducts from "../../Hooks/useProducts";

export function Send() {
  const { addBooks, totalProducts, countProducts } = useProducts();
  const [url, setUrl] = useState("");
  const message = () => {
    let text = "https://wa.me/573184137487?text=";
    text += `Bienvenido a CAÑA, este es tu pedido: \n\n`;
    addBooks.forEach((product) => {
      text += `${product.name} ${product.type} ${product.size}\n`;
      text += `Personalizar: ${product.personalize}\n`;
      text += `Diseño:  ${product.desing}\n`;
      text += `Cantidad: ${countProducts}\n`;
      text += `Precio: ${product.price}\n\n`;
    });
    text += `\nEl valor total de tu compra es: $${totalProducts}`;
    text += `\n\nGracias por confiar en nostros, nos podremos en contacto contigo muy pronto para terminar tu compra.\n`;
    setUrl(encodeURI(text));
  };
  return (
    <>
      <Link to="/catalogo">
        <button className="arrowleft_return" width="30px"></button>
      </Link>
      <a href={url} target="_blank" rel="noreferrer"  onClick={message}>
        <button className="button_confirm">
          Confirmar
          <img className="icon_whatsapp" src={whatsApp} alt="" />
        </button>
      </a>
    </>
  );
}
