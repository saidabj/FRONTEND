import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import './autres.css'

const activities = [
  { id: "rabat", title: "Visite À Rabat", duration: "2 JOUR", price: "600€", image: "/photos/img7.jpeg" },
  { id: "Akchour", title: "Visite À Akchour", duration: "3 JOURS", price: "600 €", image: "/photos/img20.jpg" },
  { id: "Chefchaouen", title: "Fes to Chefchaouen-1jour", duration: "1 JOUR", price: "50 €", image: "/photos/img21.jpg" },

  { id: "Fes", title: "Circuit de Marrakech À Fès ", duration: "3 JOUR", price: "250€", image: "/photos/img3.jpg" },
  { id: "Essaouira", title: "Visite À Essaouira", duration: "1 JOUR", price: "70 €", image: "/photos/Essaouira2.jpg" },
  { id: "Eljadida", title: "Morocco Travel - Eljadida", duration: "2 JOURS", price: "250 €", image: "/photos/img13.jpg" },
];

const Autres = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold-x">Toutes les Activités</h1>

      <div className="row g-4">
        {activities.map((activity) => (
          <div key={activity.id} className="col-md-4">
            <div className="card shadow-sm border-0 rounded">
              <img src={activity.image} alt={activity.title} className="card-img-top" />
              <div className="card-body">
                <span className="badge bg-dark mb-2">{activity.duration}</span>
                <h5 className="card-title">{activity.title}</h5>
                <p className="fw-bold-p">À partir de : {activity.price}</p>
              

                <button 
                  className="btn btn-res w-100" style={{ backgroundColor: "rgba(209, 81, 31, 0.925)"}}
                  onClick={() => navigate(`/trip/${activity.id}`)}
                >
                  Réservez Maintenant →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton pour revenir à la page d'accueil */}
      <div className="text-center mt-4">
        <button onClick={() => navigate("/")} className="btn btn-retour px-4 py-2">
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Autres;
