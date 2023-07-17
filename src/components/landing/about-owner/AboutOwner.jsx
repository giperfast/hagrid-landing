import classes from './AboutOwner.module.css';
import Button from '../../UI/button/Button.jsx';

import vinod from '../../../assets/images/vinod.jpg';
import mark_vinod from '../../../assets/images/mark-vinod.svg';
import quotes from '../../../assets/images/quotes.svg';

function AboutOwner() {
    return (
        <div className={classes.container}>
            <div className={classes.left_container}>
                <div className={classes.avatar_wrapper}>
                    <img src={vinod} className={classes.avatar} alt="" loading="lazy"/>
                    <img src={mark_vinod} className={classes.mark_avatar} alt="" loading="lazy"/>
                </div>
            </div>
            <div className={classes.right_container}>
                <div className={classes.quote_wrapper}>
                    <p className={classes.quote}>
                        Use my experience in transforming websites for conversion, and lessons from across 100s of websites. In 15 minutes, I’ll evaluate your website and set you up to win.
                    </p>
                    <img src={quotes} className={classes.quotes_image} alt="" loading="lazy"/>
                </div>
                <div className={classes.button}>
                    <Button href="https://calendly.com/vinodbollini/chat-about-hagrid" size="large" theme="light">Schedule a call with me</Button>
                </div>
            </div>
        </div>
    )
}

export default AboutOwner;