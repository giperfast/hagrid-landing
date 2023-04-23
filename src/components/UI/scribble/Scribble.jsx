import React from 'react';
import classNames from "classnames";
import classes from './Scribble.module.css';

import scribble2 from '../../../assets/images/scribbles/scribble-2.svg';
import scribble3 from '../../../assets/images/scribbles/scribble-3.svg';
import scribble8 from '../../../assets/images/scribbles/scribble-8.svg';
import scribble9 from '../../../assets/images/scribbles/scribble-9.svg';

function Scribble({scribble}) {
    switch (scribble) {
        case '2':
            return <img src={scribble2} className={classNames(classes.scribble, classes.scribble2)} alt="" loading="lazy"></img>
        case '3':
            return <img src={scribble3} className={classNames(classes.scribble, classes.scribble3)} alt="" loading="lazy"></img>
        case '8':
            return <img src={scribble8} className={classNames(classes.scribble, classes.scribble8)} alt="" loading="lazy"></img>
        case '9':
            return <img src={scribble9} className={classNames(classes.scribble, classes.scribble9)} alt="" loading="lazy"></img>

        default:
            break;
    }

}

export default Scribble;