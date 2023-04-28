import React from 'react';
import classes from './Checkbox.module.css';

function Checkbox({label, ...attrs}) {

    return (
        <div className={classes.checkbox}>
            <input type="checkbox" id="checkbox" className={classes.input} {...attrs}/>
            <label htmlFor="checkbox" className={classes.label}>{label}</label>
        </div>
    );
}

export default Checkbox;