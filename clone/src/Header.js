import React from 'react';
import "./Header.css";
import logo from "./Static/Images/amazon_logo.png"
const Header = () => {
  return (
    <div className='header'>
        <img className='header__logo' src={logo}></img>
        <div className='header__search'>
            <input className='header__searchInput' type="text"/>
        </div>
        <div className='header__nav'>

        </div>
    </div>
  )
}

export default Header;