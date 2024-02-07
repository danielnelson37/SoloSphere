import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => { 
    return (
        <div  className="search-bar">
            <label>
                Search
                <input 
                    type="text"
                    value={searchTerm}
                    className="search-bar-input"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
            </label>
        </div>
    )
};

export default SearchBar;