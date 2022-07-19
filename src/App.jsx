import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function App() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">Vongole Manga</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="manga.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Manga
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="ivrea.html">Ivrea</a></li>
                  <li><a className="dropdown-item" href="panini.html">Panini</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tcg.html">TCG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="figuras.html">Figuras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="merchandising.html">Merchandising</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contacto.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default App;
