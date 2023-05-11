import React from 'react';
import classes from './Preloader.module.css';
import classNames from "classnames";

function Preloader() {
    return (
        <div className={classes.preloader}>
            <div className={classNames(classes.bounce, classes.bounceFirst)}></div>
            <div className={classNames(classes.bounce, classes.bounceSecond)}></div>
            <div className={classes.bounce}></div>
        </div>
    );
}

export default React.memo(Preloader);