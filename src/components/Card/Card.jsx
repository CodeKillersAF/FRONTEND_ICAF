import React from 'react';
import Button from '../Button/Button'


export default function Card(props) {

    return (
        <div className="col-md-6">
            <div className={props.cardclassName}>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <Button  className={props.buttonclassName}  name={props.name} />
            </div>
        </div>
    )
}


