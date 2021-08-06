import React from 'react';
import './Header.scss';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
function Header() {
  //handle Open Header
  const handleCloseMenu = () => {
    let fadeHeader = document.querySelector('.fade-header');
    let nav = document.querySelector('.header__menu');
    let openMenu = document.querySelector('.header__openMenu');
    openMenu.setAttribute('style', 'opacity:1;   visibility: visible;');
    fadeHeader.setAttribute('style', 'opacity:0;   visibility: hidden');
    nav.setAttribute('style', 'opacity:0;   visibility: hidden');
  };
  //Handle Open Menu
  const handleOpenMenu = () => {
    let fadeHeader = document.querySelector('.fade-header');
    let nav = document.querySelector('.header__menu');
    let openMenu = document.querySelector('.header__openMenu');
    openMenu.setAttribute('style', 'opacity:0;   visibility: hidden');
    fadeHeader.setAttribute('style', 'opacity:1;   visibility: visible;');
    nav.setAttribute('style', 'opacity:1;   visibility: visible;');
  };
  return (
    <header className="header">
      {/* Header Logo */}
      <div className="header__logo">
        <div className="header__logo__image">
          <img
            src="https://buroharro.nl/wp-content/themes/buro-harro/dist/images/buro-harro-logo.svg"
            alt="logo"
          />
        </div>
        <div className="header__openMenu" onClick={() => handleOpenMenu()}>
          <MenuOpenIcon />
        </div>
      </div>

      <div className="header__menu">
        {/* Header Navbar */}
        <nav className="header__menu__navbar">
          <ul>
            <li>
              <a href="#a">Projects</a>
            </li>
            <li>
              <a href="#b">News</a>
            </li>
            <li>
              <a href="#c">About us</a>
            </li>
            <li>
              <a href="#d">Contact</a>
            </li>
          </ul>
        </nav>
        {/* Header Translate Word */}
        <div className="header__menu__translateWord">
          <span>NL</span>
          <span>EN</span>
        </div>
        <div className="header__menu__close" onClick={() => handleCloseMenu()}>
          <HighlightOffIcon />
        </div>
      </div>
      <div className="fade-header" />
    </header>
  );
}

export default Header;
