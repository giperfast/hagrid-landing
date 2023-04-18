import React from 'react';
import '../styles/Header.less';
import logo from '../images/logo.svg';

function Header() {
    return (
      <header className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <ul className="buttons">
                <li>Integrations</li>
                <li>Pricing</li>
                <li>Log In</li>
                <li>Try for Free</li>
            </ul>
      </header>
    );
}

export default Header;