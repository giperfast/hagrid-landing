import React from 'react';
import classNames from "classnames";
import classes from './HeroImages.module.css';

import image_1 from '../../../assets/images/hero/hero-img-1.png';
import image_2 from '../../../assets/images/hero/hero-img-2.png';
import image_3 from '../../../assets/images/hero/hero-img-3.png';


function HeroImage({image}) {
    return (
        <div className={classes.image}>
            <img src={image}/>
        </div>
    )
}


function HeroImages() {
    const images = [image_1, image_2, image_3]

    return (
        <div className={classes.images}>
        {
            images.map((image, index) =>
                <HeroImage image={image} key={index}/>
            )
        }
        </div>
    );
}

export default HeroImages;