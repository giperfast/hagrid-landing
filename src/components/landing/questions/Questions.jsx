import React, { useState, useEffect } from 'react';
import axios from "axios";
import classes from './Questions.module.css';
import classNames from "classnames";
import Checkbox from '../../UI/checkbox/Checkbox.jsx';
import Button from '../../UI/button/Button.jsx';
import Preloader from '../../UI/preloader/Preloader.jsx';

const QUESTION_COUNT = 16

async function getQuestions(page) {
    const limit = 6
    const data = [
        {'id': '1', 'question': 'How can I answer people\'s questions? How will they get the answers?',
         'answer': 'In the hagrid dashboard you can look at your visitors’ questions, respond with an answer (like this one), and also edit responses. Here are some things you should know: 1. A question will only show in widget, to all visitors, when a response exists. 2. Visitors can always see their own questions, even if unanswered. 3. When you respond to a question the first time, the person who asked the question gets a quick little email notification, so they can come and check out your response! Why don’t you ask us a question here, and we’ll respond!? Nothing like the real thing…',
         'username': 'Vinod Bollini', 'avatar': 'https://lh3.googleusercontent.com/a-/AOh14Gj-6rn4-elWTtG_j1J9lY6BFbvYNniL_-3Adiy3xQ=s96-c'},
        
        {'id': '2', 'question': 'Authenticated users, what do you mean? How do people ask questions?',
         'answer': 'Any visitor can post a question. When they post their first question, the visitors log in to the hagrid with with their Twitter, Facebook or Google credentials. Once they post their questions, we (the website owners) can see the question, and respond with an appropriate answer in the hagrid dashboard. When someone posts a question you will also get a quick little email notification!',
         'username': 'Vivek Sharma', 'avatar': 'https://pbs.twimg.com/profile_images/1112392368219537408/kULmK4qp_normal.jpg'},

        {'id': '3', 'question': 'Who is hagrid for?',
         'answer': 'Just about anybody that likes people coming to their websites! Like us. Are you content-marketer? Do you run an e-com store? Do you have a SaaS landing page? You have probably worked hard to get someone to land on your website or store. Your best customers are the ones that want to ask you tons of questions.With hagrid you can get every one of those questions to make your page more effective for the next visitor.',
         'username': 'Akhilesh', 'avatar': 'https://pbs.twimg.com/profile_images/1475789398956408835/khsBmvIZ_normal.jpg'},

        {'id': '4', 'question': 'What is hagrid exactly?',
         'answer': 'hagrid is “widget”, just like this one, that you can add to any webpage! In the widget, visitors can ask questions, and we (the website owners) can respond. The questions and answers are public (unlike customer-support e-mails and chat, which are gathering dust in your attic). So with hagrid you get two big advantages: 1. Social proof & the resulting trust - see and hear other people “in the room” 2. A living breathing FAQ section - populated by your users A good parallel is the questions and answers section on an amazon.com product listing.',
         'username': 'Bharat Prabhakar', 'avatar': 'https://lh3.googleusercontent.com/a-/AOh14GillHCiM_bPyQSWBAy1jhQI3n4SwIAyFstcQo2KlWc=s96-c'},

        {'id': '5', 'question': 'Are you planning on allowing other OAuth login options?',
         'answer': 'Hi Darragh! Yes we are looking to expand OAuth options and also add direct password less logins. Is there a particular OAuth you\'d like to see? Would love to have a chat and get that working for you.',
         'username': 'Darragh O\'Sullivan', 'avatar': 'https://lh3.googleusercontent.com/a-/AOh14GiMk0XbAB3d8JHN2OtW0MK7dJgLVz8n0FimvcVo=s96-c'},

        {'id': '6', 'question': 'How old are you',
         'answer': 'Hey Aravind! The answer to your question is up in the wind really, but all this seem to suggest that I am about 94 years old and a bit. If you want to know about the company/product, we are a two year old company, and hagrid is relatively young project, that just now put into open beta.',
         'username': 'Aravind Sampathkumaran', 'avatar': 'https://lh3.googleusercontent.com/a/AATXAJxeHcME1tuxwzagQewYrvVdrfpj3xLOpI9uHlkB=s96-c'},

        {'id': '7', 'question': 'How much time does it take to install?',
         'answer': 'Melanie, depending on your platform it can take somewhere from 2-5 minutes, self-serve. We are working on self-serve guides for all the platforms. Currently, you can add this to your Webflow, React websites, or by using plain JS.',
         'username': 'Melanie Muenzer', 'avatar': 'https://lh3.googleusercontent.com/a/AATXAJyzx6XTQ7kLnZQ1uqBlVR7SYC3nbYA5qjhMqpRE=s96-c'},

        {'id': '8', 'question': 'If someone trolls this section can you remove their question?',
         'answer': 'Hey Isaac, I really want to remove this question to show you that we can. But then, that looks like a circular loop, that would be a paradox! Jokes apart: 1. Questions go live (for the world) when responded to. 2. Can be removed if needed. We think the world is civil enough for that!',
         'username': 'Isaac Castejon', 'avatar': 'https://lh3.googleusercontent.com/a-/AOh14GjFt0JT8t0QHQrjipujO57ZUmpapvNkgQPCGhVL=s96-c'},

        {'id': '9', 'question': 'Do you have a product roadmap that you can share with us? really helps to understand what you are building out next to know how the product will evolve to meet our needs. And chat you up if we need something you didn\'t think of yet!',
         'answer': 'We are bit embarrassed about how little of our roadmap we have built, and how much we have learnt in feedback from fine folks such as yourself. We\'ll put this together and share with you shortly. And once we have this in place, we will reach out to ask you what we should change. We\'re in it to build it!',
         'username': 'Brock Rowlands', 'avatar': 'https://lh3.googleusercontent.com/a-/AOh14Ggoj_093l34G0pNjJEeg6FB6cjXrvOYkAsiLwTd=s96-c'},

        {'id': '10', 'question': 'Is there custom branding for these? If I embed this on my Webflow site do I have the ability to have my custom colors, fonts, backgrounds, etc?',
         'answer': 'We have nearly endless customisation for the widget, so you can make it look just right on your website: fonts, colors, backgrounds, even the rounded corners! And you can change the style of the answers (accordion, always open...), language (if you don\'t see your language, just let us know, we\'ll add it in 15 minutes).',
         'username': 'Anonymous', 'avatar': 'https://hgrd-public.s3.amazonaws.com/public/avatars/anonymous-avatar-15.svg'},

        {'id': '11', 'question': 'Is it possible to post our question to have a FAQ base?',
         'answer': 'Yes. Absolutely! hagrid is now a fully powered FAQ widget. You can add and manage your own questions and answers; seamlessly blend these with the questions that your visitors have asked. On top of it, you can choose to publish these questions on one page, a few or all across your website. All the power you need.',
         'username': 'Anonymous', 'avatar': 'https://hgrd-public.s3.amazonaws.com/public/avatars/anonymous-avatar-3.svg'},

        {'id': '12', 'question': 'What is the pricing after the trial ends?',
         'answer': 'We have the world’s simplest (and affordable) pricing for you - $9.99 /month. This is an introductory offer pricing while we build hagrid into the wholesome product we envision. Once you subscribe, we make a promise that we will never increase what you pay for hagrid in the future.',
         'username': 'Anonymous', 'avatar': 'https://hgrd-public.s3.amazonaws.com/public/avatars/anonymous-avatar-13.svg'},

        {'id': '13', 'question': 'Beyond a point, the questions can become repetitive; is there an option to classify them, point users to older qns that were answered n all?',
         'answer': 'Actually you don\'t have to wait till questions get repetitive. We have search-as-you-type, in the question entry box, that will show you suggestions from public questions that might resolve your query without the need to ask a fresh question. This works as soon as you have 1 question that matches.',
         'username': 'Anonymous', 'avatar': 'https://hgrd-public.s3.amazonaws.com/public/avatars/anonymous-avatar-1.svg'},

        {'id': '14', 'question': 'How is this different from a comments box?',
         'answer': 'Hi Joey, hagrid can of course be used as a "powerful" comments box. While there are a lot of things we do that a "comments box" would not, here are my top 3 favourites:1. Reach your users after they have left your website, so they can see your responses2. Auto-search questions while you are typing so people can see a past response3. Embed rich content, like YouTube videos, Tweets and images',
         'username': 'Joey Kudish 🇺🇦', 'avatar': 'https://pbs.twimg.com/profile_images/1545202212606861313/k2PeTxKx_normal.jpg'},

        {'id': '15', 'question': 'Is this a robot?',
         'answer': 'No this is not a robot.We could do Turing-test like showdown if you like?',
         'username': 'Anonymous', 'avatar': 'https://hgrd-public.s3.amazonaws.com/public/avatars/anonymous-avatar-7.svg'},

        {'id': '16', 'question': 'Does Google index this content?',
         'answer': 'Absolutely! And more than just index.We actually feed your questions and answers to the Google FAQ schema, so that this is now structured information that can feed snippets in Google Search results. This should boost your SEO chops, all without any effort from you.', 
         'username': 'Anonymous', 'avatar': 'https://hgrd-public.s3.amazonaws.com/public/avatars/anonymous-avatar-15.svg'},
    ]

    const current_page = (page - 1) * limit
    return data.slice(current_page, current_page + limit)
}

function Card({question, answer, username, avatar}) {
    return (
        <div className={classes.card}>
            <div className={classes.question}>
                <div className={classes.title}>{question}</div>
                <div className={classes.user}>
                    <img className={classes.avatar} src={avatar} alt="" loading="lazy"/>
                    <p className={classes.username}>{username}</p>
                </div>
            </div>
            <div className={classes.answer}>{answer}</div>
        </div>
    )
}

function Questions() {
    const [page, setPage] = useState(1)
    const [questions, setQuestions] = useState([])
    const [showButton, setShowButton] = useState(true)
    const [showPreloader, setShowPreloader] = useState(false)


    const load_questions = async () => {
        setShowPreloader(true)
        setShowButton(false)

        const resp = await getQuestions(page)
        const last_element = resp.at(-1)

        if (last_element.id != QUESTION_COUNT)
        {
            setShowButton(true)
        }

        setShowPreloader(false)
        setQuestions([...questions, ...resp]);
    }

    useEffect(() => {
        load_questions();
    }, [page]);
    
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
                <Button type="rounded" size="small" theme="light">Login</Button>
            </div>
            {
                questions.map((question, index) => {
                    return <Card question={question.question} answer={question.answer} username={question.username} avatar={question.avatar} key={question.id}/>
                })
            }
            <div className={classes.bottom_container}>
            {
                showButton ? <Button onClick={() => setPage(page + 1)} type="rounded" size="small" theme="light">Load more questions</Button> : ''
            }
            {
                showPreloader ? <Preloader/> : ''
            } 
            </div>
        </div>
    );
}

export default Questions;