import React from 'react';
import { Link } from 'react-router-dom';
import './Speaker.css';

function speaker(props) {
    return (
        <>
        
            <li className="speaker_list"> 
                                                    {/* pass props */}
                <Link className="speaker_img_link" to={props.path}>
                                        
                    <figure className="speaker_pic-wrap" data-category={props.label}>
                                                        
                        <img src={props.src} alt="speaker" className="speaker_img" />
                    </figure>
                            
                    <div className="speaker_info">
                                    
                        <h5 className="speaker_text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>


    )
}

export default speaker
