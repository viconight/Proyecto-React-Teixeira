import '../src/Styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

 

function App() {
      return (
      <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
