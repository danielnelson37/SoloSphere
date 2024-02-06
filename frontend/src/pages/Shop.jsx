
import React from 'react';
import ProductList from '../components/ProductList'; // Import your ProductList component
import products from '../productsData'; // Adjust the path accordingly

const Shop = () => {
  // Assuming 'products' is an array of product data passed as a prop

  return (
    <div className="shop">
      <h1>Our Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Shop;