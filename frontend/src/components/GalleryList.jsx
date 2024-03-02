import React, { useState, useEffect } from 'react';
import GalleryCard from './GalleryCard';
import SearchBar from './SearchBar';
import GalleryFilterSection from './GalleryFilterSection';
import SortSection from './SortSection';
import products from '../productsData';

const itemsPerPage = 12;
const maxButtonsToShow = 3;

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
    setCurrentPage(1); //Rests page when search term changes
  }

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = applyFiltersAndSort().slice(indexOfFirstItem, indexOfLastItem);


  const renderPaginationButtons = () => {
    const buttons = [];
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    let startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

    if (endPage - startPage + 1 < maxButtonsToShow) {
      startPage = Math.max(1, endPage - maxButtonsToShow + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <button key="prev" onClick={() => handlePageChange(currentPage - 1)}>
          &lt;
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? 'active' : ''}>
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      buttons.push(
        <button key="next" onClick={() => handlePageChange(currentPage + 1)}>
          &gt;
        </button>
      );
    }

    return buttons;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default GalleryList;
