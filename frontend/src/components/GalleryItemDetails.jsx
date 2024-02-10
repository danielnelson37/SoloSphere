import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'; // Change to free-solid-svg-icons for arrow up
import products from '../productsData';

const GalleryItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <p>Product not found.</p>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % product.image.length;
    setCurrentImageIndex(nextIndex);
  }

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + product.image.length) % product.image.length;
    setCurrentImageIndex(prevIndex);
  }

  const handleGoBack = () => {
    navigate('/gallery');
  }

  return (
    <div className="gallery-details">
      <button className="back-button" onClick={handleGoBack}>
        Back to Gallery
      </button>
      <div className="details-container">
      <div className="details-section">
        <div className ="details-title">
      <h1>{product.name}</h1>
      <p className="gallery-date">{product.date}</p>
      <p>Media: {product.media}</p>
        <p className="gallery-dimensions">Dimensions: {product.dimensions}</p>
        <div className="post-bookmarks">
        <FontAwesomeIcon icon={faBookmark} />
      </div>
      </div>

      
      <div className="image-section">
        <img src={product.image[currentImageIndex]} alt={product.name} />
        {product.image.length > 1 && (
          <div className="image-navigation">
            <button onClick={handlePrevImage}>&lt; Prev</button>
            <button onClick={handleNextImage}>Next &gt;</button>
          </div>
        )}
      </div>
      </div>
      
      {/* Add more details as needed */}
      <div className='gallery-bio'>
       
        <p>Description: {product.description}</p>
     
        {/* Additional details as needed */}
        
      </div>
      </div>
    </div>

  );
};

export default GalleryItemDetails;
