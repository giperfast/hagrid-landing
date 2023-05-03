import React, { useState } from 'react';
import classes from './Reviews.module.css';
import classNames from "classnames";

function ReviewCard() {
    return (
        <div className={classes.item}>
            <p className={classes.text}>This is dope! I love that is notifies users of answered questions after they leave the website.</p>
            <div className={classes.author}>
                <img src="https://v5.airtableusercontent.com/v1/16/16/1683136800000/-srkmiUgFBgsbX3-A4Wr7g/ShzL0RXEz_hEOYv6N2_ysAnSVlaMzFKDJ6IBx-TsE-PicjkEsroZzscxWer8shts5bjt8xYk00bSiRQvpwlGRUtBZsmR1yVt-2KmKUd030k/dg3XY5-0HBUEDRlM0BRpK9aNO3FBDGD6fR1WsnioykU" className={classes.avatar} loading="lazy" alt=""/>
                <div className={classes.author_information}>
                    <p className={classes.name}>Stefan Wirth</p>
                    <p className={classes.job_position}>Product @NicheMates</p>
                </div>
            </div>
        </div>
    )
}

function Reviews() {
    return (
        <div className={classes.container}>
            <ul className={classes.list}>
                <li>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </li>
            </ul>
            <ul className={classes.list}>
                <li>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </li>
            </ul>
            <ul className={classes.list}>
                <li>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </li>
            </ul>
        </div>
    );
}

export default Reviews;