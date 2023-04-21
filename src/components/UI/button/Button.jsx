import React from 'react';
import classNames from "classnames";
import classes from './Button.module.css';



function Button({children, size, ...attrs}) {

    let Tag = attrs.href ? 'a' : 'button'

    return (
        <Tag {...attrs} className={classNames(classes.button, classes[size])}>
            {children}
        </Tag>
    );
}

export default Button;