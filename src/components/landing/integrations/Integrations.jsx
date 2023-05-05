import React from 'react';
import classNames from "classnames";
import classes from './Integrations.module.css';
import Button from '../../UI/button/Button.jsx';

import wavy_line from '../../../assets/images/wavy-line.svg';
import js_mono from '../../../assets/images/integrations/js-mono.svg';
import webflow_mono from '../../../assets/images/integrations/webflow-mono.svg';
import react_mono from '../../../assets/images/integrations/react-mono.svg';
import wp_mono from '../../../assets/images/integrations/wp-mono.svg';
import wix_mono from '../../../assets/images/integrations/wix-mono.svg';
import shopify_mono from '../../../assets/images/integrations/shopify-mono.svg';
import carrd_mono from '../../../assets/images/integrations/carrd-mono.svg';

function Integrations() {
   return (
    <section className={classes.integrations}>
        <div className={classes.title_group}>
            <img src={wavy_line} className={classNames(classes.wavy_lines, classes.left_wavy_line)} alt=""/>
            On your website in less than 10 minutes
            <img src={wavy_line} className={classNames(classes.wavy_lines, classes.right_wavy_line)} alt=""/>
        </div>
        <div className={classes.buttons}>
            <Button href="#" size="small">
                <img src={js_mono} className={classes.logo} alt="js_logo"/>
            </Button>
            <Button href="#" size="small">
                <img src={webflow_mono} className={classes.logo} alt="webflow_logo"/>
            </Button>
            <Button href="#" size="small">
                <img src={react_mono} className={classes.logo} alt="react_logo"/>
            </Button>
            <Button href="#" size="small">
                <img src={wp_mono} className={classes.logo} alt="wordpress_logo"/>
            </Button>
            <Button href="#" size="small">
                <img src={wix_mono} className={classes.logo} alt="wix_logo"/>
            </Button>
            <Button href="#" size="small">
                <img src={shopify_mono} className={classes.logo} alt="shopify_logo"/>
            </Button>
            <Button href="#" size="small">
                <img src={carrd_mono} className={classes.logo} alt="carrd_logo"/>
            </Button>
        </div>
    </section>
   )
}

export default Integrations;