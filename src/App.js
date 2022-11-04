import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
