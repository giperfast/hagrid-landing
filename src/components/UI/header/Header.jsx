import React from 'react';
import classes from './Header.module.css';
import logo from '../../../assets/images/logo.svg';
import Button from '../button/Button.jsx';

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
                <li>
                    <Button href="#" size="medium">
                        Try for Free
                    </Button>
                </li>
            </ul>
        </header>
    );
}

export default Header;