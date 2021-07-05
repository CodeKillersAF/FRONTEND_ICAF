import React, { useState, useEffect } from 'react';
import { CardDetail } from '../components/Card'
import Button from '../components/Button/Button';
import axios from '../axios';

function Download() {

    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get('/template/templateAllFront')
         .then((res) => {
            // console.log(res.data);
             setState(res.data.data);
            //console.log(res.data.url)
         })
         .catch((err) => {
             console.log(err.message);
         })
    }, [])

    const getDownload = async (url) => {
        await setDownloadUrl(url);
        console.log(url)
    }

    const divider = {
        height: '1rem',
        backgroundColor: 'rgba(0, 0, 0, .1)',
        border: 'solid rgba(0, 0, 0, .15)',
        borderWidth: '1px 0',
        boxShadow: 'inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15)'
    }

    return (
        <div>
            {state.map((template) => (
                <div key={template._id}>
            <CardDetail title={template.topic}>
                    <p>{template.description}</p>

                   <button className="btn btn-primary btn-md px-4 gap-3"><a href={template.url} 
                   style={{ color: "#fff", textDecoration: "none" }}>Download</a></button>

                </CardDetail>
            <div style={divider}></div>
            </div>
            ))}
        </div>
    )
}

export default Download
