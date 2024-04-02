import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../css/pages/country.css'
import DetailCard from '../components/detailCard'
import ReturnButton from '../components/returnButton'
import populationDisplay from '../utils/populationDisplay'

function Country() {
  const [isLoading, setIsLoading] = useState(true);
  const { countryName } = useParams();
  const countries = useSelector((state) => state);
  const country = countries?.length > 0 ? countries.find((country) => country.name.common === countryName) : null;

  useEffect(() => {
    setIsLoading(!country);
  }, [country]); 

  const displayCurrencies = () => {
    return Object.values(country.currencies).map(currency => currency.name.toString()).join(', ');
    }

  const nativename = () => {
  return Object.values(country.name.nativeName)?.[0]?.common?.toString() ?? 'N/A';
};

  const displayDetailCard = () => {
    if (!isLoading && country) {
      return <DetailCard 
        borders= {country.borders}
        countryName={country.name.common}
        countryNativeName={nativename()} 
        population={populationDisplay(country.population)}
        region={country.continents[0]}
        subRegion={country.subregion}
        capital={country.capital[0]}
        domain={country.tld[0]}
        currencies={displayCurrencies()}
        languages={Object.values(country.languages).join(', ') || 'N/A'} 
        flag={country.flags.png}
      />;
    }
    return null
  };
 
  return (
    <div className='country-container'>
      <ReturnButton />
      {displayDetailCard()}
    </div>
  );
}

export default Country;