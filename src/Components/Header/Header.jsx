import React from 'react';
import './Header.scss';
function Header() {
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
      </div>
    </header>
  );
}

export default Header;
