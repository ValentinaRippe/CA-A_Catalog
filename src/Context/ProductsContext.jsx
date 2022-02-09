import { createContext, useState} from "react";


export const ProductsContext = createContext();

export function ProductsProvider(props) {
 
  let infoProducts = {
  }
  let infoDesing ={
    name:null,
    state:false
  }
  let infoStamps ={
    name:null,
    state:false
  }
  let infoCheck ={
    desingPersonalize: null,
    state:false
  }
  let infoCoverPage={
    name:null,
    state:false
  }
  let infoAddBooks = {
    name:'--',
    image:null,
    desing:'--',
    personalize: '--',
    pages:null,
    price:null,
    stamp:'--',
    size:null,
  }
  //arry products
  const [products, setProducts] = useState([]);
  //objet products select
  const [info, setInfo] = useState(infoProducts)
  //objets img desing
  const [desing, setDesing] = useState(infoDesing)
  //objets img stamps
  const [stamps, setStamps] = useState(infoStamps)
  //Checkbox info
  const [check, setCheck] = useState(infoCheck)
  //objet img cover page
  const [page, setPage] = useState(infoCoverPage)
  //objet list personalize books
  const [addBooks, setAddBooks] = useState(infoAddBooks)
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
              setAddBooks
            }}
          >
            {props.children}
          </ProductsContext.Provider>
  );
}
