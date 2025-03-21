import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
//import Logo from '../images/Logo.jpg';
import video from '../images/video.mp4'; 
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import '../stylecss/Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';  

const Home = () => {
  const [langue, setLangue] = useState("Français");
  const videoRef = useRef(null); 

  const changerLangue = () => {
    setLangue(langue === "Français" ? "Anglais" : "Français");
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); 
    if (videoRef.current) {
      console.log("Vidéo de fond chargée !");
    }
  }, []); 

  return (
    <div className="video-container">
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top" data-aos="fade-down">
        <div className="container">
         {/* <a className="navbar-brand" href="#">
            <img src={Logo} alt="Morocco Travel" className="logo" />
          </a>*/}
              <h3  className="text-center  fw-bold-T"><span>M</span>orocco <span>T</span>ravel</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" data-aos="fade-up" data-aos-delay="100">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" data-aos="fade-up" data-aos-delay="200">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/circuit" data-aos="fade-up" data-aos-delay="300">Circuit</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" data-aos="fade-up" data-aos-delay="400">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="social-icons" data-aos="fade-up" data-aos-delay="500">
            <a href="https://www.instagram.com/ouarzazate_tours?igsh=MWFzaHozcGV4NXMzYQ==">
              <FaInstagram />
            </a>
            <a href="#"><FaPinterest /></a>
            <a href="https://www.facebook.com/ouarzazatetour/?_rdc=2&_rdr#">
              <FaFacebookF />
            </a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
          </div>

          <button className="btn btn-warning ms-3" style={{ backgroundColor: "rgba(209, 81, 31, 0.925)", borderColor: "rgba(209, 81, 31, 0.925)", color: "#fff",fontWeight:"bold" }} onClick={changerLangue}>
            {langue}
          </button>
           <Link to="/login">
           <motion.button
            className="btn btn-outline-light ms-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            data-aos="fade-up"
            data-aos-delay="600"
           >
            Login
           </motion.button>
           </Link>

        </div>
      </nav>
      <video ref={videoRef} autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      <div className="content">
        <motion.h1 
          className="text-white text-center"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          data-aos="fade-up" 
        >
          WELCOME
          <br />
          WE LOVE TO SHARE BIG EMOTIONS
        </motion.h1>

        <motion.button 
          className="btn btn-warning mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          data-aos="fade-up" 
          data-aos-delay="500" 
          style={{ backgroundColor: "rgba(209, 81, 31, 0.925)", borderColor: "rgba(209, 81, 31, 0.925)", color: "#fff",fontWeight:"bold" }}
        >
          DÉCOUVRIR
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
