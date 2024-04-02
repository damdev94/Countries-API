import React from 'react'
import '../css/components/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='container'>
        <h1>Where in the world?</h1>
        <div className='theme'>
            <FontAwesomeIcon icon={faMoon} />
            <p>Dark Mode</p>
        </div>
    </div>
  )
}

export default Header