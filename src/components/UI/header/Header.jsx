import React from 'react';
import classes from './Header.module.css';
import logo from '../../../images/logo.svg';

console.log(process.env.PUBLIC_URL)

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <ul className={classes.buttons}>
                <li className={classes.button}>
                    <a href="#">Integrations</a>
                </li>
                <li className={classes.button}>
                    <a href="#">Pricing</a>
                </li>
                <li className={classes.button}>
                    <a href="#">Log In</a>
                </li>
                <li className={classes.button + ' ' + classes.highlight}>
                    <a href="#">Try for Free</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;