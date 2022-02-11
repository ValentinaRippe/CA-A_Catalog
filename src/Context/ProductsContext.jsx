import { createContext, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider(props) {
  let infoProducts = {};
  let infoDesing = {};
  let infoStamps = {};
  let infoCheck = { };
  let infoCoverPage = {};

  //arry products
  const [products, setProducts] = useState([]);

  //objet products select - catalog - is used in the ButtonPersonalizer component
  const [info, setInfo] = useState(infoProducts);

  //objets img desing
  const [desing, setDesing] = useState(infoDesing);

  //objets img stamps
  const [stamps, setStamps] = useState(infoStamps);

  //Checkbox info
  const [check, setCheck] = useState(infoCheck);

  //objet img cover page
  const [page, setPage] = useState(infoCoverPage);

  //array list personalize books
  const [addBooks, setAddBooks] = useState([]);

  //info of cart
  const [infoCart, setInfoCart] = useState([]);
  //Count of cart
  const [countProducts, setCountProducts] = useState([]);

  let totalProducts = addBooks.reduce((previousValue, currentValue) => previousValue + currentValue.price * countProducts, 0);

  console.log(infoCart)
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        info,
        setInfo,
        desing,
        setDesing,
        stamps,
        setStamps,
        check,
        setCheck,
        page,
        setPage,
        addBooks,
        setAddBooks,
        totalProducts,
        infoCart,
        setInfoCart,
        setCountProducts,
        countProducts
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
