import '../src/Styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/CartContext';

 

function App() {
      return (
      <>
      <BrowserRouter>
      <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
      </Routes>
      </CartContextProvider>
      </BrowserRouter>
      </>
  );
}

export default App;
