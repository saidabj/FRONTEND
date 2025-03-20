import React from 'react';
//import Header from './components/Header';
//import Footer from './components/Footer';
//import About from './components/About';
//import Contact from './components/Contact';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CircuitsList from "./components/circuitlist";
import Autres from "./components/autres";
import Reserver from "./components/reserver";

function App() {
  return (
    <div>
    
 

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
       
    </div>
  );
}

export default App;
