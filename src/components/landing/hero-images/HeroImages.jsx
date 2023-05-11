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

const HeroImageMemo = React.memo(HeroImage)

function HeroImages() {
    let inTimeout = false
    const [currentImage, setCurrentImage] = useState(0)

    const slider = () => {
        inTimeout = true
        setTimeout(() => {
            if (currentImage >= IMAGES.length - 1) {
                return setCurrentImage(0)
            }
            setCurrentImage(currentImage + 1)
        }, 3000);
        inTimeout = false
    }

    useEffect(() => {
        if (inTimeout == false) {
            slider()
        }
    }, [currentImage]);

    return (
        <div className={classes.images}>
        {
            IMAGES.map((image, index) =>
                <HeroImageMemo image={image} key={index}/>
            )
        }
        <div className={classes.slider}>
            <HeroImageMemo image={IMAGES[currentImage]} id="slider_image"/>
        </div>
        </div>
    );
}

export default HeroImages;