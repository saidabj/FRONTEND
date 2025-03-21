import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
=======
//import Header from './components/Header';
//import Footer from './components/Footer';
//import About from './components/About';
//import Contact from './components/Contact';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CircuitsList from "./components/circuitlist";
import Autres from "./components/autres";
import Reserver from "./components/reserver";

>>>>>>> 3647e450d5524174f8baef651928fe062a2c055e
function App() {
  return (
    <div>
      
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      {/*  <Route path="/circuit" element={<Circuit />} />*/}
       <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  {/*  <About />*/}<br/><br/><br/>
    <Footer /> 
    
<<<<<<< HEAD
=======
 

      {/*<Header /><br/>
       <About />*/}

       <Router>
      <Routes>
        <Route path="/" element={<CircuitsList />} />
        <Route path="/activites" element={<Autres />} />
        <Route path="/trip/:tripId" element={<Reserver />}/>
      </Routes>
    </Router>
       {/*  <Contact /> <Footer />  */}
       
>>>>>>> 3647e450d5524174f8baef651928fe062a2c055e
    </div>
  );
}

export default App;
