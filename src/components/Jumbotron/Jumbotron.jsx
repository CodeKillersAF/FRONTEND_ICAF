import React from 'react';
import Button from '../Button/Button'
import './Jumbotron.css'

export default function Jumbotron(props) {

    return (
        <div>
            {/* <video className="container-fluid px-0" autostart autoPlay src={props.video} type="video/mp4" /> */}
            <div className="back">
                <img className="container-fluid px-0 imageStyle" src={props.image} />
                <div class="bottom-left">{props.title}</div>
            </div>
        </div>
    )

}
