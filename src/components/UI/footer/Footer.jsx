import classes from './Footer.module.css';

import logo from '../../../assets/images/logo.svg';
import badge from '../../../assets/images/top-post-badge.svg';

function Footer() {
    return (
        <footer className={classes.container}>
            <div className={classes.logo_wrapper}>
                <img src={logo} className={classes.logo} alt="logo"/>
                <a href="https://www.producthunt.com/posts/hagrid?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-hagrid" target="_blank">
                    <img src={badge} className={classes.badge} alt="top 1 badge"/>
                </a>
            </div>
            <div className={classes.columns}>
                <div className={classes.column}>
                    <img src={logo} className={classes.logo} alt="logo"/>
                    <a href="https://www.producthunt.com/posts/hagrid?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-hagrid" target="_blank">
                        <img src={badge} className={classes.badge} alt="top 1 badge"/>
                    </a>
                </div>
                <div className={classes.column}>
                    <ul className={classes.buttons}>
                        <li className={classes.header}>Integration Guides</li>
                        <li><a href="#">Javascript</a></li>
                        <li><a href="#">Webflow</a></li>
                        <li><a href="#">ReactJS</a></li>
                        <li><a href="#">Wordpress</a></li>
                        <li><a href="#">Wix</a></li>
                        <li><a href="#">Shopify</a></li>
                        <li><a href="#">Carrd</a></li>
                    </ul>
                </div>
                <div className={classes.column}>
                    <ul className={classes.buttons}>
                        <li className={classes.header}>About</li>
                        <li><a href="#">Roadmap</a></li>
                        <li><a href="#">Story</a></li>
                        <li><a href="#">Handbook</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
                <div className={classes.column}>
                    <ul className={classes.buttons}>
                        <li className={classes.header}>Projects</li>
                        <li><a href="#">magiceraser.io</a></li>
                        <li><a href="#">backgrounderaser.io</a></li>
                        <li><a href="#">hagrid.io</a></li>
                    </ul>
                </div>
                <div className={classes.column}>
                    <ul className={classes.buttons}>
                        <li className={classes.header}>Legal</li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <p className={classes.copyright}>Copyright © 2020-2022 aarzoo, Inc. All rights reserved.</p>
        </footer>
    );
}

export default Footer;