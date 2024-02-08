import React from 'react';
import GalleryList from '../components/GalleryList'; // Import your ProductList component
import products from '../productsData'; // Adjust the path accordingly

const Gallery = () => {
  // Assuming 'products' is an array of product data passed as a prop

  return (
    <div className="gallery">
      <h1>Our Products</h1>
      <GalleryList products={products} />
    </div>
  );
};

export default Gallery;