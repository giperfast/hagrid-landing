import React, { useState } from 'react';
import classes from './Questions.module.css';
import classNames from "classnames";

function Questions() {
   
    return (
        <div className={classes.container}>
            <a href="#" className={classes.watermark}>Powered by <span className={classes.bold}>hagrid</span></a>

           <div className={classes.post}>
                <p className={classes.post_title}>Ask us Anything</p>
                <div className={classes.input_container}>
                    <div id="post_text" className={classes.input} contentEditable></div>
                </div>
           </div>
        </div>
    );
}

export default Questions;