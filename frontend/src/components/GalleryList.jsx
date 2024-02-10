// GalleryList.jsx without pagination
// import React, { useState } from 'react';
// import GalleryCard from './GalleryCard';
// import SearchBar from './SearchBar';
// import GalleryFilterSection from './GalleryFilterSection'; // You can reuse this if needed
// import products from '../productsData';

// const GalleryList = () => {
//   const [filters, setFilters] = useState({
//     date: 'all',
//     media: 'all',
//   });
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showFilters, setShowFilters] = useState(false);

//   // Filter logic similar to ProductList.jsx, adjust as needed

//   const filterProducts = (product) => {
//     const { date, price, media } = filters;

//    const dateFilter = date === 'all' || product.date === parseInt(date, 10);
    

//     const mediaFilter = media === 'all' || product.media.toLowerCase().includes(media.toLowerCase());

//    return dateFilter && mediaFilter;
//   };
 
//   //search filter logic 
//  const searchFilter = (product) => {
//         return product.name.toLowerCase().includes(searchTerm.toLowerCase());
//       };
   
//  const filteredProducts = products.filter(filterProducts).filter(searchFilter);

//   return (
//     <div className="gallery-list-container">
//       <div className="filter-search-row">
//       <h1 className="gallery-title">GALLERY</h1>
//         <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//         <GalleryFilterSection filters={filters} setFilters={setFilters} showFilters={showFilters} setShowFilters={setShowFilters} />
//       </div>

//       <div className="gallery-list">
//         {filteredProducts.map((product) => (
//           <GalleryCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryList;


//GalleryList.jsx with pagnination
import React, { useState } from 'react';
import GalleryCard from './GalleryCard';
import SearchBar from './SearchBar';
import GalleryFilterSection from './GalleryFilterSection';
import products from '../productsData';

const itemsPerPage = 12; // Number of items to display per page

const GalleryList = () => {
  const [filters, setFilters] = useState({
    date: 'all',
    media: 'all',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filterProducts = (product) => {
    const { date, media } = filters;

    const dateFilter = date === 'all' || product.date === parseInt(date, 10);
    const mediaFilter = media === 'all' || product.media.toLowerCase().includes(media.toLowerCase());

    return dateFilter && mediaFilter;
  };

  const searchFilter = (product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredProducts = products.filter(filterProducts).filter(searchFilter);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="gallery-list-container">
      <div className="filter-search-row">
        <h1 className="gallery-title">GALLERY</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <GalleryFilterSection filters={filters} setFilters={setFilters} showFilters={showFilters} setShowFilters={setShowFilters} />
      </div>

      <div className="gallery-list">
        {currentItems.map((product) => (
          <GalleryCard key={product.id} product={product} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryList;
