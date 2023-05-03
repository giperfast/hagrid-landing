import React, { useState } from 'react';
import classes from './Questions.module.css';
import classNames from "classnames";
import Checkbox from '../checkbox/Checkbox.jsx';
import Button from '../button/Button.jsx';


function Card() {
    return (
        <div className={classes.card}>
            <div className={classes.question}>
                <div className={classes.title}>
                    How can I answer people's questions? How will they get the answers?
                </div>
                <div className={classes.user}>
                    <img className={classes.avatar} src="https://lh3.googleusercontent.com/a-/AOh14Gj-6rn4-elWTtG_j1J9lY6BFbvYNniL_-3Adiy3xQ=s96-c" alt=""/>
                    <p className={classes.username}>Vinod Bollini</p>
                </div>
            </div>
            <div className={classes.answer}>
            In the hagrid dashboard you can look at your visitors’ 
            questions, respond with an answer (like this one), and 
            also edit responses. Here are some things you should know: 
            1. A question will only show in widget, to all visitors, 
            when a response exists. 2. Visitors can always see their 
            own questions, even if unanswered. 3. When you respond to 
            a question the first time, the person who asked the question 
            gets a quick little email notification, so they can come 
            and check out your response! Why don’t you ask us a question 
            here, and we’ll respond!? Nothing like the real thing…
            </div>
        </div>
    )
}

function Questions() {
    return (
        <div className={classes.container}>
            <a href="#" className={classes.watermark}>Powered by <span className={classes.bold}>hagrid</span></a>

           <div className={classes.post}>
                <p className={classes.post_title}>Ask us Anything</p>
                <div className={classes.input_container}>
                    <div id="post_text" className={classes.input} contentEditable></div>
                </div>
                <div className={classes.submit_container}>
                    <Checkbox label="Anonymously"/>
                    <Button type="rounded" size="medium">Post your question</Button>
                </div>
           </div>
           <div className={classes.title_container}>
                <p className={classes.sub_title}>All Questions</p>
                <Button type="rounded" size="small">Login</Button>
            </div>

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

            <div className={classes.bottom_container}>
                <Button type="rounded" size="small">Load more questions</Button>
            </div>
        </div>
    );
}

export default Questions;