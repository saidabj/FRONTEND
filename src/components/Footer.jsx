import React, { useEffect } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; 
import { motion } from 'framer-motion';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import '../stylecss/Footer.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <footer className="bg-dark text-white py-5" >
      <Container>
        <Row>
    
          <Col md={3} data-aos="fade-up">
            <motion.h5
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
            >
              Morocco Travel
            </motion.h5>
            <motion.ul
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.5 }}
              className="list-unstyled"
            >
              <li><a href="/" className="text-white">Accueil</a></li>
              <li><a href="/about" className="text-white">À propos</a></li>
              <li><a href="/contact" className="text-white">Cercuit</a></li>
              <li><a href="/destinations" className="text-white">Contact</a></li>
            </motion.ul>
          </Col>

          <Col md={3} data-aos="fade-up" data-aos-delay="200">
            <motion.h5
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
            >
              Suivez-nous
            </motion.h5>
            <motion.div
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.7 }}
            >
              <a href="https://www.facebook.com/ouarzazatetour/?_rdc=2&_rdr#" className="text-white me-3" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" className="text-white me-3" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/ouarzazate_tours?igsh=MWFzaHozcGV4NXMzYQ==" className="text-white me-3" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com" className="text-white" aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
            </motion.div>
          </Col>
         
          <Col md={3} data-aos="fade-up" data-aos-delay="400">
            <motion.h5
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
            >
              Contact
            </motion.h5>
            <motion.p
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 1 }}
            >
              Email: contact@moroccotravel.com
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 1.2 }}
            >
              Téléphone: +212 5 22 22 22 22
            </motion.p>
          </Col>

          <Col md={3} data-aos="fade-up" data-aos-delay="600">
            <motion.h5
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
            >
              Newsletter
            </motion.h5>
            <motion.p
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 1.4 }}
            >
              Abonnez-vous pour des offres exclusives et des nouvelles sur le Maroc.
            </motion.p>
            <form>
              <motion.input
                type="email"
                placeholder="Entrez votre email"
                className="form-control mb-2"
                aria-label="Email"
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 1.5 }}
              />
              <motion.button
                type="submit"
                className="btn btn-danger w-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 1.6 }}
              >
                S'abonner
              </motion.button>
            </form>
          </Col>
        </Row>

        <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="800">
          <motion.p
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 1.8 }}
          >
            &copy; 2025 Morocco Travel. Tous droits réservés.
          </motion.p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
