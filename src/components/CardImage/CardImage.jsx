import React from 'react';


export default function CardImage(props) {

    return (
        <>
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 
                                position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className={props.tagclassName}>{props.tag}</strong>
                        <h3 className="mb-0">{props.title}</h3>
                        <div className="mb-1 text-muted">{props.date}</div>
                        <p className="card-text mb-auto">{props.content}</p>
                        <a href={props.link} className="stretched-link">Continue</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        {/* <img className="container-fluid" src={props.image} alt="sample" /> */}
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}


