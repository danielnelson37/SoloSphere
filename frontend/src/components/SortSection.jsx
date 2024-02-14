import React from 'react';

const SortSection = ({ sortOptions, sortBy, setSortBy, showSort, setShowSort, handleSortChange }) => {
  return (
    <div className="sort-section">
      <button className="sort-button" onClick={() => setShowSort(!showSort)}>
        Sort
      </button>

      {showSort && (
        <div className="sort-options">
          <label>
            Sort by
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                handleSortChange();
              }}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
    </div>
  );
};

export default SortSection;
