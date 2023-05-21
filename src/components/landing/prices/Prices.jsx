import React from 'react';
import classes from './Prices.module.css';
import Button from '../../UI/button/Button.jsx';

import scribble from '../../../assets/images/scribbles/scribble-11.svg';

function Card({title, price, description, popular}) {
    const most_popular = popular === true ?
        <div className={classes.popular}>
            MOST POPULAR
            <img src={scribble} alt="" loading="lazy"/>
        </div>
    : '';

    return (
        <div className={classes.card}>
            {most_popular}
            <p className={classes.title}>{title}</p>
            <p className={classes.price}>{price} <span className={classes.duration}>/ month</span></p>
            <p className={classes.description}>{description}</p>
            <div className={classes.button}>
                <Button href="/login" size="medium">Try for Free</Button>
            </div>
        </div>
    )
}

function Prices() {
    return (
        <div className={classes.container}>
            <Card title="Monthly" price="$9.99" description="Billed monthly"/>
            <Card title="Yearly" price="$7.99" description="Billed at $95.88 /year" popular/>
        </div>
    )
}

export default Prices;