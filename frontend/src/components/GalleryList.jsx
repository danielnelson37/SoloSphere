// GalleryList.jsx
import React, { useState } from 'react';
import GalleryCard from './GalleryCard';
import SearchBar from './SearchBar';
import FilterSection from './FilterSection'; // You can reuse this if needed
import products from '../productsData';

const GalleryList = () => {
  const [filters, setFilters] = useState({
    date: 'all',
    media: 'all',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter logic similar to ProductList.jsx, adjust as needed

  const filterProducts = (product) => {
    const { date, price, media } = filters;

   const dateFilter = date === 'all' || product.date === parseInt(date, 10);
    

    const mediaFilter = media === 'all' || product.media.toLowerCase().includes(media.toLowerCase());

   return dateFilter && mediaFilter;
  };
 
  //search filter logic 
 const searchFilter = (product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      };
   
 const filteredProducts = products.filter(filterProducts).filter(searchFilter);

  return (
    <div className="gallery-list-container">
      <div className="filter-search-row">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterSection filters={filters} setFilters={setFilters} showFilters={showFilters} setShowFilters={setShowFilters} />
      </div>

      <div className="gallery-list">
        {filteredProducts.map((product) => (
          <GalleryCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GalleryList;
