import React from 'react';
import classNames from "classnames";
import classes from './TextureSection.module.css';

function Title({main, title})
{
    if (main === true) {
        return (
            <h1 className={classNames(classes.title, classes.title__main)}>{title}</h1>
        )
    } else {
        return (
            <h2 className={classes.title}>{title}</h2>
        )
    }
}

function Description({main, description})
{
    if (main === true) {
        return (
            <h3 className={classNames(classes.description, classes.description__main)}>{description}</h3>
        )
    } else {
        return (
            <h3 className={classes.description}>{description}</h3>
        )
    }
}

function TextureSection({children, title, description, color = '#fdefef', main}) {
    return (
        <section style={{backgroundColor: color}} className={classes.section}>

            <Title main title={title}/>
            <Description main description={description}/>
            
            {children}
        </section>
    );
}

export default TextureSection;