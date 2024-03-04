
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBookmark } from '@fortawesome/free-solid-svg-icons'; 

const GalleryCard = ({ product }) => {

    const hasVideo = product.image.some((item) => item.includes('/videos/'));
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return (
    <div className="gallery-card">
    <Link to={`/gallery/${product.id}`}>
    {hasVideo ? (
          <video className="gallery-video" autoPlay width="auto" loop muted={!isHovered} onMouseOver={handleHover} onMouseLeave={handleMouseLeave}>
            <source src={product.image[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={product.image[0]} alt={product.name} className="gallery-image" />
        )}
        
      <div className="gallery-info">
        <h3 className="gallery-name">{product.name}</h3>
        <h3 className="gallery-date">{product.date}</h3>
        <p className="gallery-media">{product.media}</p>
        {/* Additional details if needed */}
        {/* <div className="gallery-bookmarks">
        <FontAwesomeIcon icon={faBookmark} />
      </div> */}
      </div>
      </Link>
    </div>
  );
};

export default GalleryCard;