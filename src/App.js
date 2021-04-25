import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Nav from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';
import Services from './Pages/Services';
import Donate from './Pages/Donate';
import  HomeColumn from './Components/HomeColumn/HomeColumn'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NewsAndEvents from './Pages/NewsAndEvents';
import Contact from './Pages/Contact';

import MobileNavbar from './Components/MobileNav/MobileNavbar'
/**
 * This is the top level App component that defines which paths will direct the user to which pages.
 * These paths are mainly used in Nav, so navigation links go to the right pages.
 */



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("Hello")
    setIsOpen(!isOpen);
  }

  return (

    <div className="App">
      <Router>
        <Nav handleClick={handleClick} />
        <MobileNavbar isOpen={isOpen} handleClick={handleClick} />
        <Switch>
          <Route exact path="/">
              <Redirect to="/platformofhope" />
          </Route>
          <Route path="/platformofhope" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/newsandevents" exact component={NewsAndEvents} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/donate" exact component={Donate} />
          <Route path="/testing" exact component={HomeColumn} />
        </Switch>

        <Footer />
      </Router>

    </div>

  );
}

export default App;
