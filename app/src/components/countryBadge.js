import React from 'react'
import '../css/components/countryBadge.css'

function CountryBadge(border) {

  return (
    <div className='badge'>{border.border}</div>
  )
}

export default CountryBadge