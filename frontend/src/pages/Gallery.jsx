import React from 'react';
import GalleryList from '../components/GalleryList'; // Import your ProductList component
import products from '../productsData'; // Adjust the path accordingly

const Gallery = () => {
    
  return (
    <div className="gallery">
      <div className="gallery-rect-column">
            <section className="gallery-rect-1"></section>
            <section className="gallery-rect-2"></section>
      </div>
      <GalleryList products={products} />
    </div>
  );
};

export default Gallery;