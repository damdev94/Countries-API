import React from 'react'
import '../css/components/searchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar({handleSearchCountryByName}) {
  return (
    <div className='search-bar-container'>
        <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        <input onChange={(e) => handleSearchCountryByName(e)} type='text' placeholder='Search for a country...'/>
    </div>
  )
}

export default SearchBar