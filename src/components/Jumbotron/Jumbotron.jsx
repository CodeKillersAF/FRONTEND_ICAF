import React from 'react';
import './Jumbotron.css'

export default function Jumbotron(props) {

    return (
        <div>
            {/* <video className="container-fluid px-0" autostart autoPlay src={props.video} type="video/mp4" /> */}
            <div className="back">
                {/* <img className="container-fluid px-0 imageStyle" src="https://firebasestorage.googleapis.com/v0/b/icaf-app-aa49c.appspot.com/o/frontend-background-images%2Fmain.jpg?alt=media&token=1241d282-fbc5-49e0-930e-14f724c7a295" /> */}
                <video className="container-fluid px-0" autoPlay loop muted src="https://firebasestorage.googleapis.com/v0/b/icaf-app-aa49c.appspot.com/o/frontend-background-images%2Fvideo-2.mp4?alt=media&token=b9924e79-0ede-4411-9819-20eb862faa09" type="video/mp4" />
                <div className="bottom-left">{props.title}</div>
                <div className="bottom-new">{props.content}</div>
            </div>
        </div>
    )

}
