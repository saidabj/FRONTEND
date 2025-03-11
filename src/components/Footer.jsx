import React from 'react';
import Logo from '../images/Logo.jpg';
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f4a83d', padding: '30px 0', color: 'black' }}>
      <div className="container">
        <div className="row">
          {/* Logo et Nom */}
          <div className="col-md-4 d-flex align-items-center">
            <img 
              src={Logo}  // Remplace par le lien de ton logo
              alt="Logo" 
              style={{ width: '50px', marginRight: '10px' }} 
            />
            <h5 style={{ fontWeight: 'bold' }}>
              <span style={{ color: '#fff' }}>M</span>orocco <span style={{ color: '#fff' }}>T</span>ravel
            </h5>
          </div>

          {/* Liens rapides */}
          <div className="col-md-3">
            <h6 className="fw-bold">Quick links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Home</a></li>
              <li><a href="#" className="text-decoration-none text-dark">About</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Destination</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Tours</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Our Blog</a></li>
              <li><a href="#" className="text-decoration-none text-dark fw-bold">Contact us</a></li>
            </ul>
          </div>

          {/* Tours and Trips */}
          <div className="col-md-3">
            <h6 className="fw-bold">Tours and Trips</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Berber village visit</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Desert Merzouga</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Marrakech Quad experience</a></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="col-md-2">
            <h6 className="fw-bold">Follow Us</h6>
            <div>
              <a href="#" className="text-dark me-3"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
