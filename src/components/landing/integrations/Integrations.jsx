import React from 'react';
import classNames from "classnames";
import classes from './Integrations.module.css';
import Button from '../../UI/button/Button.jsx';
import Section from '../section/Section.jsx';

import wavy_line from '../../../assets/images/wavy-line.svg';
import js_mono from '../../../assets/images/integrations/js-mono.svg';
import webflow_mono from '../../../assets/images/integrations/webflow-mono.svg';
import react_mono from '../../../assets/images/integrations/react-mono.svg';
import wp_mono from '../../../assets/images/integrations/wp-mono.svg';
import wix_mono from '../../../assets/images/integrations/wix-mono.svg';
import shopify_mono from '../../../assets/images/integrations/shopify-mono.svg';
import carrd_mono from '../../../assets/images/integrations/carrd-mono.svg';

function Integrations() {
    const buttons = [
        {title: 'Ks', image: js_mono, url: 'https://www.javascript.com/'},
        {title: 'Webflow', image: webflow_mono, url: 'http://webflow.com/'},
        {title: 'React', image: react_mono, url: 'https://reactjs.org/'},
        {title: 'Wordpress', image: wp_mono, url: 'https://wordpress.org/'},
        {title: 'Wix', image: wix_mono, url: 'https://www.wix.com/'},
        {title: 'Shopify', image: shopify_mono, url: 'https://www.shopify.com/'},
        {title: 'Carrd', image: carrd_mono, url: 'https://carrd.co/'},
    ];

    return (
        <Section className={classes.integrations} id="integrations">
            <div className={classes.title_group}>
                <img src={wavy_line} className={classNames(classes.wavy_lines, classes.left_wavy_line)} alt=""/>
                On your website in less than 10 minutes
                <img src={wavy_line} className={classNames(classes.wavy_lines, classes.right_wavy_line)} alt=""/>
            </div>
            <div className={classes.buttons}>
                {
                    buttons.map((button, index) => {
                        return (
                            <Button href={button.url} target="_blank" size="small" theme="light" key={index}>
                                <img src={button.image} className={classes.logo} alt={button.title}/>
                            </Button>
                        )
                    })
                }
            </div>
        </Section>
    )
}

export default Integrations;