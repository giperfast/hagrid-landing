import React, { useState, useEffect } from 'react';
import classes from './Showcase.module.css';

import clip1 from '../../../assets/video/clip-1.mp4';
import clip2 from '../../../assets/video/clip-2.mp4';
import clip3 from '../../../assets/video/clip-3.mp4';

const DEFAULT_SLIDE = 0

const buttons = [
    {'id': 0, 'title': 'Respond and Connect', 'video': clip1},
    {'id': 1, 'title': 'Make it your Own', 'video': clip3},
    {'id': 2, 'title': 'Stay in Control', 'video': clip2},
]

function VideoFromSlide({slide}) {
    if (buttons[slide] == null) {
        return 'Video not found!'
    }

    return <video src={buttons[slide]['video']} className={classes.video} muted={true} autoPlay={true} loop={true}></video>
}

function Showcase() {
    const [slide, setSlide] = useState(DEFAULT_SLIDE);
    
    const setActive = (index) => {
        const button_elements = Array.from(document.getElementsByClassName(classes.button));

        button_elements.map((element) => {
            const element_index = Number(element.attributes.index.value)
            if (element_index === index) {
                element.classList.add(classes.active)
                return true
            }

            element.classList.remove(classes.active)
            return false
        })
    }

    const changeVideo = (event) => {
        const button = event.target
        const index = Number(button.attributes.index.value)

        setActive(index)
        setSlide(index)
    }

    useEffect(() => {
        setActive(slide)
    });

    return (
        <div className={classes.showcase}>
            <div className={classes.buttons}>
            {
                buttons.map((button) => {
                    return <button onClick={changeVideo} index={button.id} className={classes.button} key={button.id}>{button.title}</button>
                })
            }
            </div>
            <VideoFromSlide slide={slide}/>
        </div>
    );
}

export default Showcase;