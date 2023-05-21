import React from 'react';
import classNames from "classnames";
import classes from './Section.module.css';


function Section({children, color = '#18181b', id, ...attrs}) {
    return (
        <section style={{backgroundColor: color}} className={classNames(classes.section, attrs.className)}>
            <div class="anchor_target" id={id}></div>
            {children}
        </section>
    );
}

export default Section;