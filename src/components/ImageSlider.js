import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  // Changement automatique des images toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 secondes

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      <img src={images[index]} alt="Trip" className="img-fluid rounded" style={{height: 300, width:700}}/>
    </div>
  );
};

export default ImageSlider;