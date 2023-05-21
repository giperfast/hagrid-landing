import React, { useState, useEffect } from 'react';
import axios from "axios";
import classes from './Questions.module.css';
import Checkbox from '../../UI/checkbox/Checkbox.jsx';
import Button from '../../UI/button/Button.jsx';
import Preloader from '../../UI/preloader/Preloader.jsx';
import LoginOverlay from '../../landing/login-overlay/LoginOverlay.jsx';

async function getQuestions(page) {
    const limit = 6;
    let resp = '';
    await axios.get(`${process.env.REACT_APP_API_URL}/questions`, { 
        params: {
            'page': page,
            'limit': limit
        }
    }).then((response) => {
        resp = response.data;
    })
    return resp;
}

function Card({question, answer, username, avatar}) {
    return (
        <div className={classes.card}>
            <div className={classes.question}>
                <div className={classes.title}>{question}</div>
                <div className={classes.user}>
                    <img src={process.env.REACT_APP_API_URL + avatar} className={classes.avatar} alt="" loading="lazy"/>
                    <p className={classes.username}>{username}</p>
                </div>
            </div>
            <div className={classes.answer}>{answer}</div>
        </div>
    );
}

const CardMemo = React.memo(Card);

function Questions() {
    const [page, setPage] = useState(1);
    const [questions, setQuestions] = useState([]);
    const [showButton, setShowButton] = useState(true);
    const [showPreloader, setShowPreloader] = useState(false);
    const [showLoginOverlay, setShowLoginOverlay] = useState(false);
    const input = React.createRef();

    const load_questions = async () => {
        setShowPreloader(true);
        setShowButton(false);
        const resp = await getQuestions(page);
        const array = [...questions, ...resp.records];

        if (array.length !== resp.total_records_count)
        {
            setShowButton(true);
        }
        setShowPreloader(false);
        setQuestions(array);
    }

    useEffect(() => {
        load_questions();
    }, [page]);
    
    const post_question = async () => {
        if (input.current.innerText)
        {
            setShowLoginOverlay(true);
        }
    }
    
    return (
        <div className={classes.container}>
            <a href="/" className={classes.watermark}>Powered by <span className={classes.bold}>hagrid</span></a>
            <div className={classes.post}>
                <p className={classes.post_title}>Ask us Anything</p>
                <div className={classes.input_container}>
                    <div id="post_text" ref={input} className={classes.input} contentEditable></div>
                </div>
                <div className={classes.submit_container}>
                    <Checkbox label="Anonymously"/>
                    <Button type="rounded" size="medium" onClick={() => post_question()}>Post your question</Button>
                </div>
            </div>
            <div className={classes.title_container}>
                <p className={classes.sub_title}>All Questions</p>
                <Button onClick={() => setShowLoginOverlay(true)} type="rounded" size="small" theme="light">Login</Button>
            </div>
            {
                questions.map((question, index) => {
                    return <CardMemo question={question.text} answer={question.answer.text} username={question.user.profile.name} avatar={question.user.profile.avatar} key={question.id}/>
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
            <LoginOverlay active={showLoginOverlay} setActive={setShowLoginOverlay}/>
        </div>
    );
}

export default Questions;