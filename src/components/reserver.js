import { useParams } from "react-router-dom";
import tripsData from "./data";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Reserver.css";
import ImageSlider from "./ImageSlider";

function Reserver() {
  const { tripId } = useParams();
  const trip = tripsData.find((t) => t.id.toString() === tripId);
  const [activeIndex, setActiveIndex] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  if (!trip) {
    return <h2 className="text-center mt-5">Excursion non trouvée</h2>;
  }

  const totalPrice = adults * trip.price + children * trip.price;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="container mt-4">
      <header className="text-center mb-4">
        <h1 className="trip-title h3 h1-lg">{trip.title}</h1>
        <p className="trip-info  fw-bold fs-5" style={{ color:" #e67e22"}}>
          💰 {trip.price}€ / personne | 📅 Durée : {trip.duration}
        </p>
      </header>

      <div className="row">
        <div className="col-lg-7 col-md-12 mb-4">
          {/* Slider d'images */}
          <div className="trip-gallery text-center">
            <ImageSlider images={trip.images} className="img-fluid rounded" />
          </div>

          {/* Pourquoi Nous Choisir */}
          <div className="trip-benefits p-3 rounded shadow">
            <h3 style={{ color:" #e67e22"}}>Morocco Travel vous offre</h3>
            <ul>
              <li>✅ Guides professionnels multilingues</li>
              <li>✅ Accompagnement personnalisé</li>
              <li>✅ Transport premium avec Wi-Fi</li>
              <li>✅ Expérience authentique et immersive</li>
              <li>✅ Sécurité et assistance 24h/24</li>
              <li>✅ Engagement pour un tourisme durable</li>
            </ul>
          </div>

          {/* Itinéraire */}
          <div className="trip-itineraire">
            <h3 style={{ color:" #e67e22"}}>Itinéraire</h3>
            <div className="accordion" id="itineraryAccordion">
              {trip.itinerary.map((day, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button  style={{background:"rgba(209, 81, 31, 0.925)", color:"white"}}  className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`} type="button" onClick={() => toggleAccordion(index)}>
                      <strong>{day.day} :</strong>
                    </button>
                  </h2>
                  {activeIndex === index && (
                    <div className="accordion-collapse show">
                      <div className="accordion-body">{day.description}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-12">
          {/* Formulaire de réservation */}
          <div className="booking-formulaire mt-4 p-4 rounded shadow">
            <h3 className="text-center " style={{ color:" #e67e22"}}>Réservez Votre Activité</h3>

            <div className="mb-3">
              <label className="form-label">Nom complet :</label>
              <input type="text" className="form-control w-100" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Entrez votre nom" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email :</label>
              <input type="email" className="form-control w-100" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrez votre email" />
            </div>

            {/* Sélection Adultes et Enfants */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <label className="form-label">Adultes : {trip.price}€ / personne</label>
              <div className="input-group w-50">
                <button className="btn btn-outline-secondary" onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                <input type="text" className="form-control text-center" value={adults} readOnly />
                <button className="btn btn-outline-secondary" onClick={() => setAdults(adults + 1)}>+</button>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <label className="form-label">Enfants (+10 ans) : {trip.price}€ / Enfant</label>
              <div className="input-group w-50">
                <button className="btn btn-outline-secondary" onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                <input type="text" className="form-control text-center" value={children} readOnly />
                <button className="btn btn-outline-secondary" onClick={() => setChildren(children + 1)}>+</button>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Date :</label>
              <input type="date" className="form-control w-100" />
            </div>

            {/* Prix Total */}
         
            <div className="price-box">
              <span>Adulte</span>
              <span>{trip.price}€ × {adults} ➝ <strong>{adults * trip.price}€</strong></span>
            </div>
            <div className="price-box">
              <span>Enfants</span>
              <span>{trip.price}€ × {children} ➝ <strong>{children * trip.price}€</strong></span>
            </div>



            <div className="total-price fw-bold fs-4  text-center" style={{ color:" #e67e22"}}>
              <strong>Prix total : {totalPrice}€</strong>
            </div>

            <button className="btn btn-res-form w-100 btn-lg mt-3">Réserver Maintenant</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserver;