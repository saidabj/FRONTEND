
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erreur, setErreur] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier les informations de connexion
    if (email === '' || password === '') {
      setErreur('Veuillez remplir tous les champs');
    } else {
      // Envoyer les informations de connexion au serveur
      fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Connexion réussie, rediriger vers la page d'accueil
            window.location.href = '/';
          } else {
            setErreur(data.message);
          }
        })
        .catch((error) => {
          setErreur('Erreur de connexion');
        });
    }
  };

  const handleResetPassword = () => {
    // Envoyer une requête pour réinitialiser le mot de passe
    fetch('/api/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setErreur('Un email de réinitialisation a été envoyé à votre adresse email.');
        } else {
          setErreur(data.message);
        }
      })
      .catch((error) => {
        setErreur('Erreur de réinitialisation du mot de passe');
      });
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <fieldset class="card p-3 shadow">

          <Form onSubmit={handleSubmit}>
            <h2 class="text-center">Connexion</h2>
            {erreur && (
              <div className="alert alert-danger">{erreur}</div>
            )}
            <Form.Group controlId="email">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre adresse e-mail"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"
              />
            </Form.Group><br/>
            <Button variant="primary" type="submit" style={{ backgroundColor: "rgba(209, 81, 31, 0.925)", borderColor: "rgba(209, 81, 31, 0.925)", color: "#fff",fontWeight:"bold" }} >
              Se connecter
            </Button><br/>
            <Button variant="link" onClick={handleResetPassword} style={{color: "rgba(209, 81, 31, 0.925)" }} >
              Mot de passe oublié ?
            </Button><br/>
            <Button variant="link" onClick={() => window.history.back()} style={{  color: "rgba(209, 81, 31, 0.925)" }} >
              Retour à la page précédente
            </Button>
            
          </Form>
        </fieldset>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;