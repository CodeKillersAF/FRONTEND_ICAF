import React from 'react';


export default function CardDetail(props) {
    return (
        <div className="px-4 py-5 my-5">
            <h1 className="display-7 fw-bold text-center">{props.title}</h1>
            <h5 className="fw-bold text-center">{props.subtitle}</h5>
            <div className="col-lg-8 mx-auto">
                {props.children}
            </div>
        </div>
    )
}