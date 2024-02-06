//Search bar works independent from filter system

// import React, { useState } from 'react';
// import ProductCard from './ProductCard';
// import products from '../productsData'; // Adjust the path accordingly

// const ProductList = () => {
//   const [filters, setFilters] = useState({
//     date: 'all',
//     price: 'all',
//     media: 'all',
//   });
//   const [searchTerm, setSearchTerm] = useState('');

//   const filterProducts = (product) => {
//     const { date, price, media } = filters;

//     const dateFilter = date === 'all' || product.date === parseInt(date, 10);
//     const priceFilter =
//       price === 'all' ||
//       (price === '0-2000' && product.price <= 2000) ||
//       (price === '3000-10000' && product.price >= 3000 && product.price <= 10000) ||
//       (price === '10000+' && product.price > 10000);

//     const mediaFilter = media === 'all' || product.media.toLowerCase().includes(media.toLowerCase());

//     return dateFilter && priceFilter && mediaFilter;
//   };

//   const searchFilter = (product) => {
//     return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//            product.media.toLowerCase().includes(searchTerm.toLowerCase());
//   };

//   const filteredProducts = products.filter(filterProducts).filter(searchFilter);

//   return (
//     <div className="product-list">
//       <div className="filters">
//         <label>
//           Filter by Date:
//           <select
//             value={filters.date}
//             onChange={(e) => setFilters({ ...filters, date: e.target.value })}
//           >
//             <option value="all">All</option>
//             <option value="2019">2019</option>
//             <option value="2020">2020</option>
//             <option value="2021">2021</option>
//             <option value="2022">2022</option>
//             <option value="2023">2023</option>
//             <option value="2024">2024</option>
//           </select>
//         </label>

//         <label>
//           Filter by Price:
//           <select
//             value={filters.price}
//             onChange={(e) => setFilters({ ...filters, price: e.target.value })}
//           >
//             <option value="all">All</option>
//             <option value="0-2000">0-2000</option>
//             <option value="3000-10000">3000-10000</option>
//             <option value="10000+">10000+</option>
//           </select>
//         </label>

//         <label>
//           Filter by Media:
//           <select
//             value={filters.media}
//             onChange={(e) => setFilters({ ...filters, media: e.target.value })}
//           >
//             <option value="all">All</option>
//             <option value="Digital">Digital</option>
//             <option value="Oil">Oil</option>
//             <option value="Acrylic">Acrylic</option>
//             <option value="Marker">Marker</option>
//             <option value="Graphite">Graphite</option>
//             <option value="Charcoal">Charcoal</option>
//             <option value="Sculpture">Sculpture</option>
//             <option value="Collage">Collage</option>
//           </select>
//         </label>
//       </div>

//       <div className="search-bar">
//         <label>
//           Search:
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </label>
//       </div>

//       {filteredProducts.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../productsData'; // Adjust the path accordingly


const ProductList = () => {
  const [filters, setFilters] = useState({
    date: 'all',
    price: 'all',
    media: 'all',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

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

  const searchFilter = (product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredProducts = products.filter(filterProducts).filter(searchFilter);

  return (
    <div className="product-list-container">
      <div className="filter-search-row">
       <div className="search-bar">
        <label>
          Search:
          <input
            type="text"
            value={searchTerm}
            className="search-bar-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
       </div>
      <button className="filter-button" onClick={() => setShowFilters(!showFilters)}>Filter</button>
      </div>

      {showFilters && (
        <div className="filters">
          <label>
            Filter by Date:
            <select
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            >
              <option value="all">All</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </label>

          <label>
            Filter by Price:
            <select
              value={filters.price}
              onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            >
              <option value="all">All</option>
              <option value="0-2000">0-2000</option>
              <option value="3000-10000">3000-10000</option>
              <option value="10000+">10000+</option>
            </select>
          </label>

          <label>
            Filter by Media:
            <select
              value={filters.media}
              onChange={(e) => setFilters({ ...filters, media: e.target.value })}
            >
              <option value="all">All</option>
              <option value="Digital">Digital</option>
              <option value="Oil">Oil</option>
              <option value="Acrylic">Acrylic</option>
              <option value="Marker">Marker</option>
              <option value="Graphite">Graphite</option>
              <option value="Charcoal">Charcoal</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Collage">Collage</option>
            </select>
          </label>
        </div>
      )}

    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
    
  );
};

export default ProductList;
