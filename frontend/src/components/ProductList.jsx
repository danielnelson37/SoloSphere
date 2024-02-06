import React from 'react';
import ProductCard from './ProductCard';
import products from '../productsData'; // Adjust the path accordingly

const ProductList = ({ products }) => {
    console.log('Products:', products);

    return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;