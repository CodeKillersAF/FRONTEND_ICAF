// rfce
import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HomeSection.css';

function HomeSection() {
    return (
        <div className='hero-container'>
            <video src="" autoPlay loop muted />
            <h1>International Conference Of Application Framework</h1>
            <p>Let's Collect Some Knowledge</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn-outline' buttonSize='btn-large'>Download</Button>
            </div>
        </div>
    )
}

export default HomeSection;
