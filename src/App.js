import { RoutesApp } from './Routes/RoutesApp';
import { ProductsProvider } from './Context/ProductsContext'

function App() {
  return (
    <ProductsProvider>
    <RoutesApp/>
    </ProductsProvider>
  );
}

export default App;
