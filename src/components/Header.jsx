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
                <li className="button">
                    <a href="#">Integrations</a>
                </li>
                <li className="button"><a href="#">Pricing</a></li>
                <li className="button"><a href="#">Log In</a></li>
                <li className="button highlight"><a href="#">Try for Free</a></li>
            </ul>
      </header>
    );
}

export default Header;