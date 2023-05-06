import React, { useState, useEffect } from 'react';
import classes from './HeroImages.module.css';

import image_1 from '../../../assets/images/hero/hero-img-1.png';
import image_2 from '../../../assets/images/hero/hero-img-2.png';
import image_3 from '../../../assets/images/hero/hero-img-3.png';

const IMAGES = [image_1, image_2, image_3]

function HeroImage({image, ...attrs}) {
    return (
        <div className={classes.image} {...attrs}>
            <img src={image} alt=""/>
        </div>
    )
}

function HeroImages() {
    const [currentImage, setCurrentImage] = useState(0)

    const slider = () => {
        setTimeout(() => {
            if (currentImage === IMAGES.length - 1) {
                return setCurrentImage((currentImage) => 0)
            }
            setCurrentImage((currentImage) => currentImage + 1)
        }, 3000);
    }

    useEffect(() => {
        slider();
    }, [currentImage]);

    return (
        <div className={classes.images}>
        {
            IMAGES.map((image, index) =>
                <HeroImage image={image} key={index}/>
            )
        }
        <div className={classes.slider}>
            <HeroImage image={IMAGES[currentImage]} id="slider_image"/>
        </div>
        </div>
    );
}

export default HeroImages;