import React from 'react'
import '../css/components/regionFilter.css'

function RegionFilter() {
  return (
    <div className='region-filter-container'>
        <nav>
            <ul>
                <li className='dropdown-menu'>
                    <a href='#' className='main-arrow'>Filter by Region</a>
                    <ul className='back-menu'>
                        <li><a href="#">Africa</a></li>
                        <li><a href="#">America</a></li>
                        <li><a href="#">Asia</a></li>
                        <li><a href="#">Europe</a></li>
                        <li><a href="#">Oceania</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default RegionFilter