import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Chameau from '../images/Chameau.jpg';
import agadir from '../images/agadir.jpg';
import koutobia from '../images/koutobia.jpg';
import boutahar from '../images/boutahar.jpg';
const HeroSection = () => {
  return (
    <div>
      <div 
        className="hero-section d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${Chameau})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          padding: '50px',
          borderRadius: '20px',
          margin: '20px',
        }}
      >
        <div className="container">
          <h2>Your Adventure</h2>
          <h1>Travel & Tour Expert <br /> In Morocco</h1>
          <Button variant="warning" className="mt-3">SEE TOURS</Button>
        </div>
      </div>
      <Carousel className="mt-4">
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={agadir} // Remplace par ton image
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore Agadir</h3>
            <p>Experience the beauty of Morocco's golden dunes.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={koutobia}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Discover Marrakech</h3>
            <p>Walk through the vibrant souks and historical sites.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={boutahar}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Adventure Bou Tahar</h3>
            <p>Join us for an unforgettable travel experience.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
