import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import SearchBar from '../components/searchBar'
import RegionFilter from '../components/regionFilter'
import '../css/pages/home.css'
import Card from '../components/card'

function Home() {

  const countries = useSelector((state) => state)
  // if (countries) {
  //   console.log(countries[50].continents[0]);
  // }

  const [filteredCountries, setFilteredCountries] = useState([])
  const [currentRegion, setCurrentRegion] = useState('All')

  useEffect(() => {
    handleSearchCountryByRegion(currentRegion)
  }, [countries]);

  useEffect(() => {
    setFilteredCountries(countries)
  }, [countries])
  
  const filterCountriesByRegions = (region) => {
    if (region === 'All'){
      return countries
    }else if (region === 'America') {
      return countries.filter(country => country.continents.includes('North America') || country.continents.includes('South America'))
    } 
    return countries.filter(coutry => coutry.continents.includes(region))
  }

  const handleSearchCountryByName = (e) => {
    const searchTerm = e.target.value
    const regionFilteredCountries = filterCountriesByRegions(currentRegion)
    const filteredCountries = regionFilteredCountries.filter(country => 
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCountries(filteredCountries)
  }

  const handleSearchCountryByRegion = (region) => {
    setCurrentRegion(region)
    const regionFilteredCountries = filterCountriesByRegions(region)
    setFilteredCountries(regionFilteredCountries)
  };

  const displaycountries = filteredCountries?.length > 0 ? (
    filteredCountries.slice(0, 8).map((country) => (
      <Card  
        flag={country.flags?.png}
        capital={country.capital?.[0] ?? 'None'}
        continent={country.continents?.[0] ?? 'None'}
        countryName={country.name?.common}
        population = {country.population}
        key={country.name?.common}
      />
    ))
  ) : <div>No Country Found ...</div>

  return (
    <div className='home-container'>
      <div className='search-bar-and-region-filter'>
        <SearchBar 
          handleSearchCountryByName= {handleSearchCountryByName}
        />
        <RegionFilter 
          handleSearchCountryByRegion= {handleSearchCountryByRegion}
        />
      </div>
      <div className='countries-list'>
        {displaycountries}
      </div>
    </div>
  );
}

export default Home