import React from 'react'
import { Link } from 'react-router-dom'
import '../css/components/returnButton.css'

function ReturnButton() {
  return (
    <Link to={{pathname: '/'}} style={{textDecoration: 'none', color: 'black'}}>
      <div className='back-btn'>Back</div>
    </Link>
  )
}

export default ReturnButton