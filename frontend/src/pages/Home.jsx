import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'; 

export default function HomePage() {
const [currentImageIndex, setCurrentImageIndex ] = useState(0)
const images = ['kirin.jpg', 'skeleton.jpg', 'angel.JPG', 'prophet.jpg', ];
const location = useLocation();

console.log("Location:", location)

const handleNextImage = () => {
  setCurrentImageIndex((prevIndex)=> (prevIndex + 1) % images.length);
}

const handlePrevImage = () => {
  setCurrentImageIndex((prevIndex) =>(prevIndex - 1 + images.length) % images.length);
}

useEffect (() => {
    window.scrollTo(0, 0);
 }, [location.pathname]);

return (
  <div className="home-page">
      <img src="images/RBFWC-0.JPG" alt="Description" className="landingpage-image" />
  <div className="content">
    <h1 className="landingpage-title"><span>SOLI</span>SPHERE</h1>
    <p className="tagline">Illuminating Shadows</p>
  </div>
  <div className="featured-art-content">
    <div className="featured-work-container">
    <h2 className="rotate-text">Featured Work</h2>
    </div>
    <div className="mini-gallery">
      <img src = {`images/${images[currentImageIndex]}`} alt= {`Artwork ${currentImageIndex + 1}`} />
      <div className="featured-art-icon-row">
      <FontAwesomeIcon icon={faCircleChevronLeft} onClick={handlePrevImage} className="prev" />
      <FontAwesomeIcon icon={faCircleChevronRight} onClick={handleNextImage} className="next"/>
      </div>
    </div>
    <div className="detailed-bio">
    <section className="rect-home-container">
            <section className="rect-1"></section>
            <section className="rect-2"></section>
            </section>
    <h2>THE VISION</h2>
    <p> Welcome to SOLISPHERE, a unique space curated by artist Daniel Nelson. Explore a diverse range of creations, from websites to paintings, embodying existential themes that navigate the dance between absurdism, nihilism, and existentialism. Nelson's work illuminates the transformative journey through darkness, portraying beauty in introspection and embracing the depth of the human experience. </p>
    <div className="home-button-row">
    <button className="home-about-button"> 
    <Link to="/about" className="home-about-link">Learn More</Link> 
    </button>
    <button className="explore-gallery-button"> 
      <Link to='/gallery' className="explore-gallery-link">Explore Gallery</Link>
    </button>
    <button className="home-shop-button"> 
    <Link to="/shop" className="home-shop-link">Shop</Link> 
    </button>
    
    </div>
    </div>
  </div>
</div>
  )
  
}
