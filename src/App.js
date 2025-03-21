import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
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
    
    </div>
  );
}

export default App;
