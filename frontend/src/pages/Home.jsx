import React, { useState } from 'react';

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex ]
= useState(0)

const images = [
  'kirin.jpg',
  'skeleton.jpg',
  'angel.JPG',
  'prophet.jpg', 
];

const handleNextImage = () => {
  setCurrentImageIndex((prevIndex)=> (prevIndex + 1) % images.length);
}

const handlePrevImage = () => {
  setCurrentImageIndex((prevIndex) =>(prevIndex - 1 + images.length))
}

return (
  <div className="home-page">
  <img src="images/IMG_0747.JPG" alt="Description" className="left-image" />
  <div className="content">
    <h1><span>SOLI</span>SPHERE</h1>
    <p className="tagline">Illuminating Shadows</p>
  </div>
  <div className="featured-art-content">
    <h2 className="rotate-text">Featured Art </h2>
    <div className="mini-gallery">
      <button onClick={handlePrevImage} className="prev">Prev</button>
      <img src = {`images/${images[currentImageIndex]}`} alt= {`Artwork ${currentImageIndex + 1}`} />
      <button onClick={handleNextImage} className="next">Next</button>
    </div>
    <div className="detailed-bio">
    <h2>What is SOLISPHERE?</h2>
    <p>Welcome to SOLISPHERE, a unique space curated by artist Daniel Nelson. Explore a diverse range of creations, from websites to paintings, embodying existential themes that navigate the dance between absurdism, nihilism, and existentialism. Embracing the philosophy of the 'solo,' Daniel's work illuminates the transformative journey through darkness, portraying beauty in introspection and embracing the depth of the human experience. Witness the resilient core within, as SOLISPHERE showcases the profound belief that emerging from darkness brings forth a refined self.</p>
    </div>
    
  </div>
</div>
  )
  
}
