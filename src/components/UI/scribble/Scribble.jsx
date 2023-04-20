import React from 'react';
import classes from './Scribble.module.css';

function Scribble({image, top, left}) {
    return (
        <img src={image} style={{top: top, left: left}}  className={classes.scribble} loading="lazy"></img>
    );
}

export default Scribble;