import React from 'react'
import '../css/components/detailCard.css'
import CountryBadge from './countryBadge'

function DetailCard({
    borders,
    countryName,
    countryNativeName, 
    population, 
    region, 
    subRegion, 
    capital, 
    domain, 
    currencies, 
    languages, 
    flag
  }) {

  const displayBorders = () => {
      if(borders) {
        return borders.map((border, index) => {
          return <CountryBadge border= {border} key= {index}/>
        })
      }
      return <div>No borders with another country </div> 
  }

  return (
    <div className='detail-card-container'>
      <img src={flag} alt='flag'></img>
      <h1>{countryName}</h1>

      <div className='infos'>
        <p>Native Name: {countryNativeName}</p>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Sud Region: {subRegion}</p>
        <p>Capital: {capital}</p>
      </div>

      <div className='infos'>
        <p>Top Level Domain: {domain}</p>
        <p>Currencies: {currencies}</p>
        <p>Languages: {languages}</p>
      </div>

      <h2>Border Countries:</h2>
      <div className='country-badges'>
        {displayBorders()}
      </div>
    </div>
  )
}

export default DetailCard