import React from 'react';
import classNames from "classnames";
import classes from './AdvantageCards.module.css';

import authentication from '../../../assets/images/advantage/authentication.svg';
import data_security from '../../../assets/images/advantage/data-security.svg';
import discussions from '../../../assets/images/advantage/discussions.svg';
import faq_base from '../../../assets/images/advantage/faq-base.svg';
import seo from '../../../assets/images/advantage/seo.svg';
import suggestions from '../../../assets/images/advantage/suggestions.svg';
import rocket from '../../../assets/images/advantage/rocket.svg';
import globe from '../../../assets/images/advantage/globe.svg';
import controls from '../../../assets/images/advantage/controls.svg';

console.log(authentication);

function Card({icon, title, description}) {
    return (
        <div className={classes.card}>
            <img src={icon} className={classes.icon}/>
            <p className={classes.title}>{title}</p>
            <p className={classes.description}>{description}</p>
        </div>
    );
}

function AdvantageCards() {

    const data = [{
        'icon': authentication,
        'title': 'Authenticated users',
        'description': 'Socially authenticated posts. So no SPAM. Spend time on meaningful questions from high-intent visitors.',
    },
    {
        'icon': data_security,
        'title': 'Respect visitors privacy',
        'description': 'Visitors can post anonymously, encouraging honest QnA and protecting their data.',
    },
    {
        'icon': discussions,
        'title': 'After they’ve left',
        'description': 'Reach visitors, notify them of your responses, even after they have left your website. Even for anonymous posts!',
    },
    {
        'icon': faq_base,
        'title': 'Seed your questions',
        'description': 'Don\'t wait till they ask. Publish your own FAQ, to kindle the conversation, and guide customers.',
    },
    {
        'icon': seo,
        'title': 'Automatic SEO',
        'description': 'hagrid automatically feeds your QnA to the Google FAQ Schema, rank higher with zero effort.',
    },
    {
        'icon': suggestions,
        'title': 'Hyperintelligent Autocomplete',
        'description': 'Get them to the answers, while they are asking the questions',
    },
    {
        'icon': rocket,
        'title': 'Powerful and flexible',
        'description': 'Order questions as you like, respond in private, restrict answers to particular pages and anything else you can think of',
    },
    {
        'icon': globe,
        'title': 'Speak any language',
        'description': 'We support all the major languages of the world. If we don\'t speak yours, we\'ll add it in 15 minutes.',
    },
    {
        'icon': controls,
        'title': 'Infinite customisation',
        'description': 'Get hagrid to match your webpage brand and theme, down to the last pixel; without writing any code.',
    },
    ]

    return (
        <div className={classes.cards}>
        {
            data.map((card, index) =>
                <Card icon={card.icon} title={card.title} description={card.description} key={index}/>
            )
        }
        </div>
    );
}

export default AdvantageCards;