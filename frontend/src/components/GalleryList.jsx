

//GalleryList.jsx with pagnination
// import React, { useState } from 'react';
// import GalleryCard from './GalleryCard';
// import SearchBar from './SearchBar';
// import GalleryFilterSection from './GalleryFilterSection';
// import products from '../productsData';

// const itemsPerPage = 12; // Number of items to display per page

// const GalleryList = () => {
//   const [filters, setFilters] = useState({
//     date: 'all',
//     media: 'all',
//   });
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showFilters, setShowFilters] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);

//   const filterProducts = (product) => {
//     const { date, media } = filters;

//     const dateFilter = date === 'all' || product.date === parseInt(date, 10);
//     const mediaFilter = media === 'all' || product.media.toLowerCase().includes(media.toLowerCase());

//     return dateFilter && mediaFilter;
//   };

//   const searchFilter = (product) => {
//     return product.name.toLowerCase().includes(searchTerm.toLowerCase());
//   };

//   const filteredProducts = products.filter(filterProducts).filter(searchFilter);

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleFilterChange = () => {
//     setCurrentPage(1);
//   }

//   return (
//     <div className="gallery-list-container">
//       <div className="filter-search-row">
//         <h1 className="gallery-title">GALLERY</h1>
//         <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//         <GalleryFilterSection filters={filters} setFilters={setFilters} showFilters={showFilters} setShowFilters={setShowFilters} handleFilterChange={handleFilterChange} />
//       </div>

//       <div className="gallery-list">
//         {currentItems.map((product) => (
//           <GalleryCard key={product.id} product={product} />
//         ))}
//       </div>

//       <div className="pagination">
//         {Array.from({ length: totalPages }).map((_, index) => (
//           <button key={index} onClick={() => handlePageChange(index + 1)}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryList;





import React, { useState, useEffect } from 'react';
import GalleryCard from './GalleryCard';
import SearchBar from './SearchBar';
import GalleryFilterSection from './GalleryFilterSection';
import SortSection from './SortSection';
import products from '../productsData';

const itemsPerPage = 12;

const GalleryList = () => {
  const [filters, setFilters] = useState({
    date: 'all',
    media: 'all',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name'); // Default sorting by name
  const [showSort, setShowSort] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const sortOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Date', value: 'date' },
    { label: 'Unsort', value: 'unsorted' }, // Added "Unsorted" option
  ];

  const filterProducts = (product) => {
    const { date, media } = filters;
    const dateFilter = date === 'all' || product.date === parseInt(date, 10);
    const mediaFilter = media === 'all' || product.media.toLowerCase().includes(media.toLowerCase());
    return dateFilter && mediaFilter;
  };

  const searchFilter = (product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const sortProducts = (a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'date') {
      return a.date - b.date;
    }
    // If sortBy is 'unsorted', maintain the original order
    return 0;
  };

  const filteredProducts = products.filter(filterProducts).filter(searchFilter);
  const sortedProducts = filteredProducts.sort(sortProducts);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const applyFiltersAndSort = () => {
    const filteredProducts = products.filter(filterProducts).filter(searchFilter);
    const sortedProducts = filteredProducts.sort(sortProducts);
    return sortedProducts;
  };

  const handleSortChange = () => {
    setCurrentPage(1);
  };

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1); //Rests pae when search term changes
  }

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = applyFiltersAndSort().slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]); // Run only on component mount

  return (
    <div className="gallery-list-container">
      <div className="filter-search-row">
        <h1 className="gallery-title">GALLERY</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchChange} className="gallery-search-bar" />
        <GalleryFilterSection filters={filters} setFilters={setFilters} showFilters={showFilters} setShowFilters={setShowFilters} handleFilterChange={handleFilterChange} />
        <SortSection sortOptions={sortOptions} sortBy={sortBy} setSortBy={setSortBy} showSort={showSort} setShowSort={setShowSort} handleSortChange={handleSortChange} />
      </div>

      <div className="gallery-list">
        {currentItems.map((product) => (
          <GalleryCard key={product.id} product={product} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryList;
