import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import mazagan from '../images/mazagan.jpg'
import '../stylecss/Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez envoyer les données du formulaire via une API ou une autre logique ici.
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page" style={ {
        background: `url(${mazagan})` ,
        backgroundsize:'  cover' ,
        minheight: ' 100vh' ,
        color: ' white' ,
        padding:'20px',
      }
      }>
    <Container className="my-5">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Contactez-nous</h2>
        <p>Nous serions ravis de répondre à vos questions et suggestions.</p>
      </motion.div>

      <Row className="mt-5">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3>Formulaire de Contact</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Entrez votre nom"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Entrez votre email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Sujet</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Entrez le sujet"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  rows={4}
                  required
                />
              </Form.Group>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Button variant="danger" type="submit">
                  {isSubmitted ? 'Envoyé!' : 'Envoyer'}
                </Button>
              </motion.div>
            </Form>
          </motion.div>
        </Col>

        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3>Nos coordonnées</h3>
            <p><strong>Adresse :</strong> 123 Rue du Maroc, Casablanca, Maroc</p>
            <p><strong>Téléphone :</strong> +212 5 22 22 22 22</p>
            <p><strong>Email :</strong> contact@moroccotravel.com</p>

            <div className="mt-4">
              <motion.a
                href="https://www.instagram.com"
                className="me-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Instagram
              </motion.a>
              <motion.a
                href="https://www.facebook.com"
                className="me-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Facebook
              </motion.a>
              <motion.a
                href="https://www.twitter.com"
                className="me-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Twitter
              </motion.a>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  </div>);
};

export default Contact;
