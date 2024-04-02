import React from 'react'
import { Link } from 'react-router-dom'
import '../css/components/card.css'
import populationDisplay from '../utils/populationDisplay'

function Card({countryName, population, continent, capital, flag}) {

  return (
    <Link
      to={{ pathname: `/country/${countryName}`}}>
      <div className='card-container'>
          <img src={flag} alt='flag'/>
          <div className='country-informations'>
              <h2>{countryName}</h2>
              <p><strong>Population: </strong>{populationDisplay(population)}</p>
              <p><strong>Region: </strong>{continent}</p>
              <p><strong>Capital: </strong>{capital}</p>
          </div>
      </div>
    </Link>
  )
}

export default Card