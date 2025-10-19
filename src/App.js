import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import Nav from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';
import Services from './Pages/Services';
import Partners from './Pages/Partners';
import Donate from './Pages/Donate';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NewsAndEvents from './Pages/NewsAndEvents';
import Contact from './Pages/Contact';
import MobileNavbar from './Components/MobileNav/MobileNavbar'
import GetHelp from './Pages/GetHelp';
import Store from './Pages/Store';
import Order from './Pages/Order';
import emailjs from '@emailjs/browser';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      // Do not allow headless browsers
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <Router>
        <Nav handleClick={handleClick} />
        <MobileNavbar isOpen={isOpen} handleClick={handleClick} />
        <ScrollToTop />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/newsandevents" exact element={<NewsAndEvents />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/gethelp" exact element={<GetHelp />} />
            <Route path="/partners" exact element={<Partners />} />
            <Route path="/donate" exact element={<Donate />} />
            <Route path="/store" exact element={<Store />} />
            <Route path="/order" exact element={<Order />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
