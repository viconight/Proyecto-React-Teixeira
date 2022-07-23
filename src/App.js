import '../src/Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
      return (
      <>
      <Navbar />
      <ItemListContainer />
      </>
  );
}

export default App;
