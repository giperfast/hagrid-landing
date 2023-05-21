import React, { useState } from 'react';
import classes from './Showcase.module.css';
import classNames from "classnames";

import clip1 from '../../../assets/video/clip-1.mp4';
import clip2 from '../../../assets/video/clip-2.mp4';
import clip3 from '../../../assets/video/clip-3.mp4';

const DEFAULT_INDEX = 0;

const tabs = [
    {'id': 0, 'title': 'Respond and Connect', 'description': 'Answer questions privately or notify users (even after they have left), and post rich replies to questions', 'video': clip1},
    {'id': 1, 'title': 'Make it your Own', 'description': 'Quick presets to start, with deep customisation to match your website - fonts, colours, spacing, language.', 'video': clip3},
    {'id': 2, 'title': 'Stay in Control', 'description': 'Post your own questions (FAQ), order and reorder questions and customise questions per page', 'video': clip2},
];

function VideoFromIndex({index}) {
    if (tabs[index] == null) {
        return 'Video not found!';
    }
    return <video src={tabs[index]['video']} className={classes.video} muted={true} autoPlay={true} loop={true}></video>
}

function Showcase() {
    const [index, setIndex] = useState(DEFAULT_INDEX);

    return (
        <div className={classes.showcase}>
            <div className={classes.buttons}>
            {
                tabs.map((button) => {
                    const is_active = button.id === index ? classes.active : '';
                    return <button onClick={() => setIndex(button.id)} className={classNames(classes.button, is_active)} key={button.id}>{button.title}</button>
                })
            }
            </div>

            <VideoFromIndex index={index}/>
            <p className={classes.description}>{tabs[index] == null ? '' : tabs[index]['description']}</p>
        </div>
    );
}

export default Showcase;