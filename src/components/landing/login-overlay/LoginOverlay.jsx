import React from 'react';
import classes from './LoginOverlay.module.css';
import classNames from "classnames";
import Button from '../../UI/button/Button.jsx';

import close from '../../../assets/images/close.svg';
import facebook from '../../../assets/images/facebook.svg';
import google from '../../../assets/images/google.svg';
import twitter from '../../../assets/images/twitter.svg';

function LoginOverlay({active, setActive}) {
    const activeClass = active ? classes.active : ''
    return (
        <div className={classNames(classes.container, activeClass)} onClick={() => setActive(false)}>
            <div className={classes.wrapper} onClick={(e) => e.stopPropagation()}>
                <div className={classes.close} onClick={() => setActive(false)}>
                    <img src={close} alt=""/>
                </div>

                <p className={classes.title}>Log in to see your posts</p>
                <p className={classes.description}>Access all your posts and the responses.</p>

                <div className={classes.buttons}>
                    <Button type="rounded" theme="light"><img src={facebook} alt="facebook icon"/>Login with Facebook</Button>
                    <Button type="rounded" theme="light"><img src={google} alt="google icon"/>Login with Google</Button>
                    <Button type="rounded" theme="light"><img src={twitter} alt="google icon"/>Login with Twitter</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginOverlay;