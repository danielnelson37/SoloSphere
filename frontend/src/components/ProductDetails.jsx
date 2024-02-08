// ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../productsData';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  console.log ("Product:", product)
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={`/${product.image}`} alt={product.name} />
      <p>Date: {product.date}</p>
      <p>Price: ${product.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;
