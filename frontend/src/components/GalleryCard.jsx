
import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCard = ({ product }) => {
  return (
    <div className="gallery-card">
      <img src={product.image} alt={product.name} />
      <div className="gallery-info">
        <h3 className="gallery-name">{product.name}</h3>
        {/* Additional details if needed */}
        <Link to={`/gallery/${product.id}`} className="gallery-description">View Details</Link>
      </div>
    </div>
  );
};

export default GalleryCard;