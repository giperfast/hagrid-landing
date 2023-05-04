import React, { useState, useEffect } from 'react';
import axios from "axios";
import classes from './Testimonials.module.css';
import classNames from "classnames";

async function getTestimonials() {
    let resp
    await axios.get("https://api.airtable.com/v0/appwBMPpVDCDEHMr6/hagrid", {
        headers: {
          Authorization: "Bearer key04kzdBL9zJQCwp",
        },
    }).then((response) => {
        resp = response
    })
    return resp
}

function TestimonialCard({text, avatar, name, designation, link}) {
    return (
        <div className={classes.item}>
            <p className={classes.text}>{text}</p>
            <div className={classes.author}>
                <img src={avatar} className={classes.avatar} loading="lazy" alt=""/>
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

        response.data.records.map((record) => {
            const column = record.fields['Column']
            const index = column-1

            if (column > data.length) {
                const count = column-data.length
                for (let i = 0; i < count; i++) {
                    data.push([])
                }
            }

            data[index].push({
                'id': record.fields.id,
                'quote': record.fields['Quote'],
                'avatar': record.fields['Attachments'][0].url,
                'name': record.fields['Name'],
                'designation': record.fields['Designation'],
                'link': record.fields['Link'],
            })
        })

        setData(data)
    }

    useEffect(() => {
        testimonials();
    }, []);

    if (data.length == 0)
    {
        return <div>preloader</div>
    }

    return (
        <div className={classes.container}>
        {
            data.map((column, index) => {
                return (
                    <ul className={classes.list}>
                    {
                        column.map((testimonial) => {
                            return (
                                <li key={testimonial.id}>
                                    <TestimonialCard text={testimonial.quote} avatar={testimonial.avatar} name={testimonial.name} designation={testimonial.designation} link={testimonial.link}/>
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