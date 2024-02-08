//Product list that takes filter and search components
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import FilterSection from './FilterSection';
import products from '../productsData';

const ProductList = () => {
  const [filters, setFilters] = useState({
    date: 'all',
    price: 'all',
    media: 'all',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  //filtering logic
  const filterProducts = (product) => {
     const { date, price, media } = filters;

    const dateFilter = date === 'all' || product.date === parseInt(date, 10);
     const priceFilter =
      price === 'all' ||
       (price === '0-2000' && product.price <= 2000) ||
      (price === '3000-10000' && product.price >= 3000 && product.price <= 10000) ||
      (price === '10000+' && product.price > 10000);

     const mediaFilter = media === 'all' || product.media.toLowerCase().includes(media.toLowerCase());

    return dateFilter && priceFilter && mediaFilter;
   };
  
   //search filter logic 
  const searchFilter = (product) => {
         return product.name.toLowerCase().includes(searchTerm.toLowerCase());
       };
    
  const filteredProducts = products.filter(filterProducts).filter(searchFilter);

  return (
    <div className="product-list-container">
      <div className="filter-search-row">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterSection filters={filters} setFilters={setFilters} showFilters={showFilters} setShowFilters={setShowFilters} />
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;





