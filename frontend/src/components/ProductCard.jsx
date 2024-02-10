// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />
//       <div className="product-info">
//         <h3 className = "product-name">{product.name}</h3>
//         <p className="product-date">{product.date}</p>
//         <p className="product-price"> ${product.price}</p>
        
       
//         <Link to={`/products/${product.id}`} className="product-description">View Details</Link>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} >
        <img src={product.image[0]} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-date">{product.date}</p>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

