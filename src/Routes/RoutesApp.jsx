import React,{useState} from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Cart } from '../Views/Cart'
import { Catalog } from '../Views/Catalog'
import { Home } from '../Views/Home'
import { PersonalizeBags } from '../Views/PersonalizeBags'
import { PersonalizeBooks } from '../Views/PersonalizeBooks'
import { PersonalizeBoxes } from '../Views/PersonalizeBoxes'
import { Footer } from '../Components/Footer/Footer';
import { NavBar } from '../Components/NavBar/NavBar';

export function RoutesApp() {
  const [products, setProducts] = useState([])
  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Footer />}>

        <Route path='/' element={<Home setProducts={setProducts} />} />
        <Route path='/' element={<NavBar />}>
        <Route path='/catalogo' element={<Catalog setProducts={setProducts} products={products}/>} />
        <Route path='/personalizarlibretas' element={<PersonalizeBooks/>} />
        <Route path='/personalizarcajas' element={<PersonalizeBoxes />} />
        <Route path='/personalizarbolsas' element={<PersonalizeBags />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Navigate replace to='/' />} />
        
      </Route>
    </Routes>
    </HashRouter>
  );
}
