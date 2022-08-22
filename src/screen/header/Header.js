/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { NavMenu } from '../../components/NavMenu';
import { NavBtns } from '../../components/NavBtns';

const Header = () => {
  return (
    <header className="header" id="header">
        <nav className="nav container">
            <a href='https://www.linkedin.com/in/sousa-andreza/' target="_blank" className='nav__logo'>Andreza Sousa</a>
            <NavMenu></NavMenu>
            <NavBtns></NavBtns>
        </nav>
    </header>
  )
}

export default Header