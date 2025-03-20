
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import './circuitlist.css';

const circuits = [
  {
    id: "ouarzazate",
    title: "Excursion À Ouarzazate Le - 1Jour",
    price: "25 €",
    duration: "1 JOUR",
    image: "/photos/img11.jpeg",
  },
  {
    id: "ouzoud",
    title: "Excursion A Ouzoud - 1Jour",
    price: "25 €",
    duration: "1 JOUR",
    image: "/photos/img5.jpeg",
  },
  {
    id: "tobkal",
    title: "Morocco Travel - Jbel Toubkal Tour - 3 Jours",
    price: "190 €",
    duration: "3 JOURS",
    image: "/photos/img15.jpg",
  },
  {
    id: "agadir",
    title: "Visites D’Agadir - 1Jour",
    price: "50 €",
    duration: "1 JOUR",
    image: "/photos/img4.jpeg",
  },
  {
    id: "marzouga",
    title: "Circuit Dans Le Désert De Marrakech À Merzouga - 3 Jours",
    price: "120 €",
    duration: "3 JOURS",
    image: "/photos/img8.jpeg",
  },
  {
    id: "ourika",
    title: "De Marrakech À Ourika et Siti Fadma - 1 Jour",
    price: "25 €",
    duration: "1 JOUR",
    image: "/photos/img16.jpg",
  },
  {
    id: "casablanca",
    title: "Visite Casalanca: Mosqueée Hassan2  - 1 Jour",
    price: "80 €",
    duration: "1 JOUR",
    image: "/photos/img2.jpeg",
  },
  {
    id: "agafay",
    title: "Activité quad,chameau et diner spectacle au désert d'Agafay ",
    price: "50 €",
    duration: "1 JOUR",
    image: "/photos/img19.jpeg",
  },
  {
    id: "marrakech",
    title: "Marrakech:jamea elfana ",
    price: "50 €",
    duration: "1 JOUR",
    image: "/photos/img10.jpeg",
  },
];




export default function CircuitsList() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold text-dark">Welcome To Morocco</h2>
      <h1 className="text-center mb-4 fw-bold">
        Visit <span className="changecontent"></span>
      </h1>
      <div className="row g-4">
        {circuits.map((circuit) => (
          <motion.div
            key={circuit.id}
            className="col-md-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card shadow-sm border-0 rounded">
              <img src={circuit.image} alt={circuit.title} className="card-img-top" />
              <div className="card-body">
                <span className="badge bg-dark mb-2">{circuit.duration}</span>
                <h5 className="card-title">{circuit.title}</h5>
                <p className="fw-bold-p">À partir de : {circuit.price}</p>
              
                <button 
                  className="btn btn-s  w-100"  style={{ backgroundColor: "rgba(209, 81, 31, 0.925)"}}
                  onClick={() => navigate(`/trip/${circuit.id}`)}
                >
                  Réservez Maintenant →
                </button>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button onClick={() => navigate("/activites")} className="btn btn-custom px-4 py-2">
          Voir Toutes Les Activités
        </button>
      </div>
    </div>
  );
}