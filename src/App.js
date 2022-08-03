import '../src/Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
      return (
      <>
      <Navbar />
      <ItemDetailContainer />
      </>
  );
}

export default App;
