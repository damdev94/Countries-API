import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import SearchBar from '../components/searchBar'
import RegionFilter from '../components/regionFilter'
import '../css/pages/home.css'
import Card from '../components/card'

function Home() {

  const countries = useSelector((state) => state)

  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    setFilteredCountries(countries)
  }, [countries])
  

  const handleSearchCountryByName = (e) => {
    const searchTerm = e.target.value;
    const filteredCountries = countries.filter(country => 
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCountries(filteredCountries)
  }
   
  
  const displaycountries = filteredCountries?.length > 0 ? (
    filteredCountries.slice(0, 10).map((country) => (
      <Card  
        flag={country.flags.png}
        capital={country.capital[0]}
        continent={country.continents[0]}
        countryName={country.name.common}
        population = {country.population}
        key={country.name.common}
      />
    ))
  ) : <div>Chargement des pays...</div>

  return (
    <div className='home-container'>
      <SearchBar 
        handleSearchCountryByName= {handleSearchCountryByName}
      />
      <RegionFilter />
      <div className='countries-list'>
        {displaycountries}
      </div>
    </div>
  );
}

export default Home