
import './App.css';
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/contact';

function App() {
  return (
     <BrowserRouter>
          <Header/>
              <Routes>
                 <Route path='/' element={<Home/>} />
                 <Route path='/about' element={<About/>} />
                 <Route path='/contact' element={<Contact/>} />
              </Routes>
          <Footer/>
     </BrowserRouter>
  );
}

export default App;

