import React from 'react';
import classNames from "classnames";
import classes from './Scribble.module.css';

import scribble2 from '../../../assets/images/scribbles/scribble-2.svg';
import scribble3 from '../../../assets/images/scribbles/scribble-3.svg';
import scribble8 from '../../../assets/images/scribbles/scribble-8.svg';

function Scribble({scribble}) {
    switch (scribble) {
        case '2':
            return (
                <img src={scribble2} className={classNames(classes.scribble, classes.scribble2)} alt="scribble 2" loading="lazy"></img>
            );
            break;
        case '3':
            return (
                <img src={scribble3} className={classNames(classes.scribble, classes.scribble3)} alt="scribble 3" loading="lazy"></img>
            );
            break;
        case '8':
            return (
                <img src={scribble8} className={classNames(classes.scribble, classes.scribble8)} alt="scribble 8" loading="lazy"></img>
            );
            break;

        default:
            break;
    }

}

export default Scribble;