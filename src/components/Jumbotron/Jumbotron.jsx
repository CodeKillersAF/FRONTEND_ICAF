import React from 'react';
import Button from '../Button/Button'

export default function Jumbotron(props) {

    return (
        <div>
            {/* <video className="container-fluid px-0" autostart autoPlay src={props.video} type="video/mp4" /> */}
            <img className="container-fluid px-0" src={props.image} />
            <div className="p-5 mb-4 bg-light rounded-3 text-center">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{props.title}</h1>
                    <p className="fs-4">{props.content}</p>
                    <Button className="btn btn-primary btn-lg" name="Download" />
                </div>
            </div>
        </div>
        // <div className="container py-4">
        //     <div className="p-5 mb-4 bg-light rounded-3">
        //         <div className="container-fluid py-5">
        //             {/* <video className="container-fluid" controls autostart autoPlay src={props.video} type="video/mp4" /> */}
        //             <video className="container-fluid" autostart autoPlay src={props.video} type="video/mp4" />
        //             <img className="container-fluid" src={props.image} />
        //             <h1 className="display-5 fw-bold">{props.title}</h1>
        //             <p className="col-md-8 fs-4">{props.content}</p>
        //             <Button className="btn btn-primary btn-lg" name="Download" />

        //         </div>
        //     </div>
        // </div>
    )

}
