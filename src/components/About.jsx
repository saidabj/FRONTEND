import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../images/img.jpg'
import Chameau from '../images/Chameau.jpg'
import aitbenhaddou from '../images/aitbenhaddou.jpg'
import boutahar from '../images/boutahar.jpg'
import Footer from '../components/Footer';
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <Container fluid className="about-page">
      <Row className="text-center my-5" data-aos="fade-up">
        <Col>
          <h1 className="display-4 text-danger"  style={{ color: "rgba(209, 81, 31, 0.925)" }}>À propos de Morocco Travel</h1>
          <p className="lead">
            Découvrez le Maroc sous un nouvel angle avec Morocco Travel, votre agence spécialisée dans les voyages sur mesure.
          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={6} className="mb-4" data-aos="flip-left fade-up" >
          <Card>
            <Card.Img variant="top" src={Chameau} />
            <Card.Body>
              <Card.Title>Des Voyages Personnalisés</Card.Title>
              <Card.Text>
                Que vous souhaitiez explorer les ruelles animées des médinas ou les dunes du désert, nous vous offrons des expériences adaptées à vos envies.
              </Card.Text>
              <Button variant="danger" style={{ backgroundColor: "rgba(209, 81, 31, 0.925)", borderColor: "rgba(209, 81, 31, 0.925)", color: "#fff",fontWeight:"bold" }}>En savoir plus</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4" data-aos="flip-right fade-up">
          <Card>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
              <Card.Title>Voyages de Luxe et Confort</Card.Title>
              <Card.Text>
                Nous garantissons un service de qualité supérieure avec des hébergements luxueux et des moyens de transport confortables pour rendre votre séjour inoubliable.
              </Card.Text>
              <Button variant="danger" style={{ backgroundColor: "rgba(209, 81, 31, 0.925)", borderColor: "rgba(209, 81, 31, 0.925)", color: "#fff",fontWeight:"bold" }}>Explorez nos offres</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="my-5">
        <Col md={6} className="mb-4" data-aos="flip-left fade-up" >
          <Card>
            <Card.Img variant="top" src={boutahar} />
            <Card.Body>
              <Card.Title>Des Voyages Personnalisés</Card.Title>
              <Card.Text>
                Que vous souhaitiez explorer les ruelles animées des médinas ou les dunes du désert, nous vous offrons des expériences adaptées à vos envies.
              </Card.Text>
              <Button variant="danger" style={{ backgroundColor: "rgba(209, 81, 31, 0.925)", borderColor: "rgba(209, 81, 31, 0.925)", color: "#fff",fontWeight:"bold" }}>En savoir plus</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4" data-aos="flip-right fade-up">
          <Card>
            <Card.Img variant="top" src={aitbenhaddou}/>
            <Card.Body>
              <Card.Title>Voyages de Luxe et Confort</Card.Title>
              <Card.Text>
                Nous garantissons un service de qualité supérieure avec des hébergements luxueux et des moyens de transport confortables pour rendre votre séjour inoubliable.
              </Card.Text>
              <Button variant="danger" style={{ backgroundColor: "rgba(209, 81, 31, 0.925)", borderColor: "rgba(209, 81, 31, 0.925)", color: "#fff",fontWeight:"bold" }}>Explorez nos offres</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-5 text-center" data-aos="fade-up">
        <Col>
          <h2>Notre Mission</h2>
          <p>
            Chez Morocco Travel, nous sommes passionnés par le Maroc et ses trésors. Nous mettons tout en œuvre pour offrir à nos clients une expérience inégalée, en alliant tradition, culture et confort. Notre équipe d'experts connaît chaque recoin du pays pour vous offrir des expériences authentiques et personnalisées.
          </p>
        </Col>
      </Row>
      <Row className="text-center my-5" data-aos="fade-up">
        <Col>
          <h3>Pourquoi Choisir Morocco Travel ?</h3>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill"></i> Des voyages sur mesure adaptés à vos désirs</li>
            <li><i className="bi bi-check-circle-fill"></i> Des guides locaux experts et passionnés</li>
            <li><i className="bi bi-check-circle-fill"></i> Un service client exceptionnel disponible à tout moment</li>
            <li><i className="bi bi-check-circle-fill"></i> Une immersion complète dans la culture marocaine</li>
          </ul>
        </Col>
      </Row>
      <Row className="my-5 text-center" data-aos="zoom-in-up">
        <Col>
          <Button variant="danger" style={{ backgroundColor: "rgba(209, 81, 31, 0.925)", borderColor: "rgba(209, 81, 31, 0.925)", color: "#fff",fontWeight:"bold" }}  size="lg" href="/contact">
            Contactez-nous pour planifier votre voyage
          </Button>
        </Col>
      </Row>
      <div>
        
      </div>
    </Container>
    
  );
};

export default About;
