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
      return <div style={{marginTop: '7px'}}>No borders with another country </div> 
  }

  return (
    <div className='detail-card-container'>
      <div className='coutry-data'>

        <div className='flag'>
          <img src={flag} alt='flag'/>
        </div>


        <div className='text'>

          <div className='text-container'>
            
            <div className='text-1'>
              <h1>{countryName}</h1>
              <div className='infos'>
                <p><strong>Native Name: </strong>{countryNativeName}</p>
                <p><strong>Population: </strong>{population}</p>
                <p><strong>Region: </strong>{region}</p>
                <p><strong>Sub Region: </strong>{subRegion}</p>
                <p><strong>Capital: </strong>{capital}</p>
              </div>
            </div>
            
            
            <div className='text-2'>
              <p><strong>Top Level Domain: </strong>{domain}</p>
              <p><strong>Currencies: </strong>{currencies}</p>
              <p><strong>Languages: </strong>{languages}</p>
            </div>

          </div>  
            
            <div className='borders'>
              <h2>Border Countries:</h2>
              <div className='country-badges'>
                {displayBorders()}
              </div>
            </div>

        </div>
        
      </div>
    </div>
  )
}

export default DetailCard