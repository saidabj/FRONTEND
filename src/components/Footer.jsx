import React from 'react';
import Logo from '../images/Logo.jpg';
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f4a83d', padding: '30px 0', color: 'black' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center">
            <img 
              src={Logo}  
              alt="Logo" 
              style={{ width: '50px', marginRight: '10px' }} 
            />
            <h5 style={{ fontWeight: 'bold' }}>
              <span style={{ color: '#fff' }}>M</span>orocco <span style={{ color: '#fff' }}>T</span>ravel
            </h5>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Quick links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Home</a></li>
              <li><a href="#" className="text-decoration-none text-dark">About</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Cercuits</a></li>
              <li><a href="#" className="text-decoration-none text-dark fw-bold">Contact us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Tours and Trips</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Berber village visit</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Desert Merzouga</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Marrakech Quad experience</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">Follow Us</h6>
            <div>
              <a href="#" className="text-dark me-3"><i class="fab fa-facebook">fecebook</i>

              </a>
              <a href="#" className="text-dark me-3"><i class="fab fa-instagram">instagram</i>
              </a>
              <a href="#" className="text-dark me-3"><i className="fab fa-twitter">twitter</i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
