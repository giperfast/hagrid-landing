import React, { useState } from 'react';
import classes from './Header.module.css';
import classNames from "classnames";
import Button from '../../UI/button/Button.jsx';

import logo from '../../../assets/images/logo.svg';
import small_logo from '../../../assets/images/small-logo.svg';

function Header() {
    const [showLoginOverlay, setShowLoginOverlay] = useState(false)
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={classes.small_logo}>
                <img src={small_logo} alt="logo"/>
            </div>
            <ul className={classes.buttons}>
                <li className={classes.button}>
                    <a href="#">Integrations</a>
                </li>
                <li className={classes.button}>
                    <a href="#">Pricing</a>
                </li>
                <li className={classNames(classes.button, classes.important)}>
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