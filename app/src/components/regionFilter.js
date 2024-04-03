import React, { useState } from 'react';
import '../css/components/regionFilter.css';

function RegionFilter({handleSearchCountryByRegion}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='region-filter-container'>
      <nav>
        <ul>
          <li className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <a 
              href='#' 
              onClick={(event) => {
                handleSearchCountryByRegion('All')
                toggleDropdown()
              }} 
              className='main-arrow'
            >
              Filter by Region
            </a>
            {isOpen && (
              <ul className='back-menu'>
                <li><a href="#" onClick={(e) => {e.preventDefault(); handleSearchCountryByRegion('Africa'); setIsOpen(false);}}>Africa</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); handleSearchCountryByRegion('America'); setIsOpen(false);}}>America</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); handleSearchCountryByRegion('Asia'); setIsOpen(false);}}>Asia</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); handleSearchCountryByRegion('Europe'); setIsOpen(false);}}>Europe</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); handleSearchCountryByRegion('Oceania'); setIsOpen(false);}}>Oceania</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default RegionFilter;