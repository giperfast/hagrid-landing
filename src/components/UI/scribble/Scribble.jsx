import React from 'react';
import classes from './Scribble.module.css';

function Scribble({image, top, left, bottom, right}) {
    return (
        <img src={image} style={{top: top, left: left, bottom: bottom, right: right}}  className={classes.scribble} alt="scribble" loading="lazy"></img>
    );
}

export default Scribble;