import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MeetOurCats from './pages/MeetOurCats';
import HowToAdopt from './pages/HowToAdopt';
import AdoptionRequeriments from './pages/AdoptionRequeriments';
import Volunteering from './pages/Volunteering';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/meet-our-cats' element={<MeetOurCats />}/>
          <Route path='adopt-a-cat'>
          <Route index element={ <HowToAdopt />} />
            <Route path='how-to-adopt' element={ <HowToAdopt />} />
            <Route path='adoption-requeriments' element = { <AdoptionRequeriments /> } />
          </Route>
          <Route path='/volunteering' element={<Volunteering />}/>
          <Route path='/donate' element={<Donate />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
