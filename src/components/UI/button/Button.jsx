import React from 'react';
import classNames from "classnames";
import classes from './Button.module.css';

// size: small, medium, large
// type: rectangle, rounded

function Button({children, size = 'medium', type = 'rectangle', ...attrs}) {

    let Tag = attrs.href ? 'a' : 'button'

    return (
        <Tag {...attrs} className={classNames(classes.button, classes[type], classes[size])}>
            {children}
        </Tag>
    );
}

export default Button;