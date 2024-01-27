import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/ContactUs/Contact';
import Loginn from './Components/Loginn.js/Loginn';
import Register from './Components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Loginn />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
