import React from 'react';

const FilterSection = ({ filters, setFilters, showFilters, setShowFilters }) => {
    return (
        <div className="filter-section">
            <button className="filter-button" onClick={() => setShowFilters(!showFilters)}>
                Filter
            </button>
       

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
    </div>
    );
};

export default FilterSection;