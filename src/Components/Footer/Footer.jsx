import React from 'react';
import './Footer.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <h1>buroharro</h1>
        <p>landschap stedenbouw</p>
      </div>
      <div className="footer__text">
        <h1>Feel good landscapes – that's what we like. Facebook Instagram</h1>
        <ul>
          <li>
            <a href="#fb">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#ins">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
