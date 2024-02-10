// ProductDetails.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../productsData';

const ProductDetails = () => {
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
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + product.image.length) % product.image.length;
    setCurrentImageIndex(prevIndex);
  };

  const handleGoBack = () => {
    navigate('/shop');
  };

  return (
    <div className="product-details">
      <button className="back-button" onClick={handleGoBack}>
        Back to Shop
      </button>
      <div className="image-section">
        <img src={product.image[currentImageIndex]} alt={product.name} />
        {product.image.length > 1 && (
          <div className="image-navigation">
            <button onClick={handlePrevImage}>&lt; Prev</button>
            <button onClick={handleNextImage}>Next &gt;</button>
          </div>
        )}
      </div>
      <div className="details-section">
        <h1>{product.name}</h1>
        <p>Date: {product.date}</p>
        <p>Price: ${product.price}</p>
        <p>Dimensions: {product.dimensions}</p>
        <p>Description: {product.description}</p>
        {/* Additional details as needed */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
