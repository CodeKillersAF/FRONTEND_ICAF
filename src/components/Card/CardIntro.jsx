import React from 'react';


export default function CardIntro(props) {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">{props.title}</h1>
            <div className="col-lg-8 mx-auto">
                {props.children}
            </div>
        </div>
    )
}