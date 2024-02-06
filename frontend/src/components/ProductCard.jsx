import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>product name: {product.name}</h3>
      <p>Product price: ${product.price}</p>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;