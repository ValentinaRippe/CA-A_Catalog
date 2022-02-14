import { createContext, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider(props) {
  let infoProducts = {};
  let infoDesing = {};
  let infoStamps = {};
  let infoCheck = {};
  let infoCoverPage = {};

  //arry products
  const [products, setProducts] = useState([]);

  //objet products select - catalog - is used in the ButtonPersonalizer component
  const [info, setInfo] = useState(infoProducts);

  //objets img desing - is used in the PersonalizerBooks component
  const [desing, setDesing] = useState(infoDesing);

  //objets img stamps - is used in the PersonalizerBooks component
  const [stamps, setStamps] = useState(infoStamps);

  //Checkbox info - is used in the PersonalizerBooks component
  const [check, setCheck] = useState(infoCheck);

  //objet img cover page - is used in the PersonalizerBooks component
  const [page, setPage] = useState(infoCoverPage);

  //array list personalize books
  const [addBooks, setAddBooks] = useState([]);
  
  //array list personalize box
  const [addBox, setAddBox] = useState([]);
  // price custom-made boxes
  const [priceBox, setPriceBox] = useState('')
 //Measures boxes
  const [calcBox, setCalcBox] = useState([]);

  //array list personalize bags
  const [addBags, setAddBags] = useState([]);
    //Measures bags
    const [calcBags, setCalcBags] = useState([]);
  // price custom-made bags
  const [priceBags, setPriceBags] = useState('')


  //info of cart
  const [infoCart, setInfoCart] = useState([]);

  //Count of cart
  const [countProducts, setCountProducts] = useState([]);

  let totalBooks = addBooks.reduce((previousValue, currentValue) => previousValue + currentValue.price * currentValue.count, 0)

  let totalBox = addBox.reduce((previousValue, currentValue) => previousValue + currentValue.priceBox * currentValue.count, 0)

  let totalBags = addBags.reduce((previousValue, currentValue) => previousValue + currentValue.priceBox * currentValue.count, 0)
  
   const totalProducts = totalBooks + totalBox + totalBags
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
        addBox,
        setAddBox,
        priceBox,
        setPriceBox,
        calcBox,
        setCalcBox,
        addBags,
        setAddBags,
        calcBags,
        setCalcBags,
        priceBags,
        setPriceBags,
        totalProducts,
        infoCart,
        setInfoCart,
        setCountProducts,
        countProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
