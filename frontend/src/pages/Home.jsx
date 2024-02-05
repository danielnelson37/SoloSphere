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
      <button onClick={handlePrevImage}>Prev</button>
      <img src = {`images/${images[currentImageIndex]}`} alt= {`Artwork ${currentImageIndex + 1}`} />
      <button onClick={handleNextImage}>Next</button>
    </div>
    <div className="detailed-bio">
    <h2>BIO</h2>
    <p>Meet a versatile artist whose creative spectrum spans websites, paintings, illustratioons, graphic print, and tattooos. Exploring existential themes, they navvigate the intricate dance between absurdism, hihilism, and existentialism in their creative projects, emphasizing the transformative journey through philosophies. Their work reflects a profound belief that one must cycle through darkness to emerge as a refined self. Admist, the portrayal of suffering , their ultimate goal is to illuminate the presence of light within the shadows. Showcasing the beauty that emerges from introspection and embracing the depth of the human experience. Embracing the philosophy of the "solo", this artist underscores that in life, it's an individual's internal battle --stripped of everything, one still possesses the resilient core of oneself.</p>
    </div>
    
  </div>
</div>
  )
  
}
