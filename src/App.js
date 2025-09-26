import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import Nav from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';
import Services from './Pages/Services';
import Partners from './Pages/Partners';
import Donate from './Pages/Donate';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NewsAndEvents from './Pages/NewsAndEvents';
import Contact from './Pages/Contact';
import MobileNavbar from './Components/MobileNav/MobileNavbar'
import GetHelp from './Pages/GetHelp';
import ScrollToTop  from './Components/ScrollToTop';
import Store from './Pages/Store';
import Order from './Pages/Order';
import emailjs from 'emailjs-com';

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
        <ScrollToTop/>
        <Switch>
          <Route exact path="/platformofhope">
              <Redirect to="/" />
          </Route>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/newsandevents" exact component={NewsAndEvents} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/gethelp" exact component={GetHelp} />
          <Route path="/partners" exact component={Partners} />
          <Route path="/donate" exact component={Donate} />
          <Route path="/store" exact component={Store} />
          <Route path="/order" exact component={Order} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
