import React from 'react'
import '../css/components/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function Header({toggleTheme}) {
  return (
    <div className='container'>
        <h1>Where in the world?</h1>
        <div className='theme' onClick={() => toggleTheme()}>
            <FontAwesomeIcon icon={faMoon} className='moon-icon' />
            <p>Dark Mode</p>
        </div>
    </div>
  )
}

export default Header