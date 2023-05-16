import React, { useState, useEffect } from 'react';
import axios from "axios";
import classes from './Testimonials.module.css';
import Preloader from '../../UI/preloader/Preloader.jsx';

async function getTestimonials() {
    let resp
    await axios.get(`${process.env.REACT_APP_API_URL}/testimonials`, { 
        params: {
            'page': 1,
            'limit': 9
        }
    }).then((response) => {
        resp = response.data
    })
    console.log(resp)
    return resp
}

function Card({text, avatar, name, designation}) {
    return (
        <div className={classes.item}>
            <p className={classes.text}>{text}</p>
            <div className={classes.author}>
                <img src={process.env.REACT_APP_API_URL + avatar} className={classes.avatar} loading="lazy" alt=""/>
                <div className={classes.author_information}>
                    <p className={classes.name}>{name}</p>
                    <p className={classes.designation}>{designation}</p>
                </div>
            </div>
        </div>
    )
}

function Testimonials() {
    const [data, setData] = useState([]);

    const testimonials = async () => {
        let data = []
        const response = await getTestimonials()

        response.records.map((record) => {
            const column = record.column
            const index = column-1

            if (column > data.length) {
                const count = column-data.length
                for (let i = 0; i < count; i++) {
                    data.push([])
                }
            }

            data[index].push({
                'id': record.id,
                'text': record.text,
                'avatar': record.user.profile.avatar,
                'name': record.user.profile.name,
                'designation': record.user.profile.designation,
            })

            return true
        })

        setData(data)
    }

    useEffect(() => {
        testimonials();
    }, []);

    if (data.length === 0)
    {
        return <Preloader/>
    }

    return (
        <div className={classes.container}>
        {
            data.map((column, index) => {
                return (
                    <ul className={classes.list} key={index}>
                    {
                        column.map((testimonial, index) => {
                            return (
                                <li key={testimonial.id}>
                                    <Card text={testimonial.text} avatar={testimonial.avatar} name={testimonial.name} designation={testimonial.designation}/>
                                </li>
                            )
                        })
                    }
                    </ul>
                )
            })
        }
        </div>
    )
}

export default Testimonials;