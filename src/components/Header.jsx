import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Logo from '../images/Logo.jpg';
import video from '../images/video.mp4'; 
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import '../stylecss/Header.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [langue, setLangue] = useState("Français");

  const changerLangue = () => {
    setLangue(langue === "Français" ? "Anglais" : "Français");
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); 
  }, []);

  return (
    <div className="video-container">
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top" data-aos="fade-down">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Morocco Travel" className="logo" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link" href="#" data-aos="fade-up" data-aos-delay="100">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#" data-aos="fade-up" data-aos-delay="200">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#" data-aos="fade-up" data-aos-delay="300">Cercuit</a></li>
              <li className="nav-item"><a className="nav-link" href="#" data-aos="fade-up" data-aos-delay="400">Contact</a></li>
            </ul>

            <div className="social-icons" data-aos="fade-up" data-aos-delay="500">
              <a href="https://www.instagram.com/ouarzazate_tours?igsh=MWFzaHozcGV4NXMzYQ=="><FaInstagram /></a>
              <a href="#"><FaPinterest /></a>
              <a href="https://www.facebook.com/ouarzazatetour/?_rdc=2&_rdr#"><FaFacebookF /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTwitter /></a>
            </div>

            <button className="btn btn-danger ms-3" onClick={changerLangue}>
              {langue}
            </button>
             <motion.button
              className="btn btn-outline-light ms-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Login
            </motion.button>
          </div>
        </div>
      </nav>
      <video autoPlay loop muted className="background-video">
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
          className="btn btn-danger mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          data-aos="fade-up" 
          data-aos-delay="500"
        >
          DÉCOUVRIR
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
