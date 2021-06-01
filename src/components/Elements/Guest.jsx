import React from 'react'
import Speaker from './Speaker';
import './Speaker.css';

function guest() {
    return (
                    
        <div className='speaker'>
            <h1>Check Out New Guest Speakers..!</h1>
    
            
            <div className="speaker_container">
                            
                <div className="speaker_wrapper">
                                
                    <ul className="speaker_all">
                        <Speaker 
                            src="https://i.ibb.co/dkyBFKg/speaker.jpg" text="Can add any text" label="Speaker" path='/add'
                        />
                        <Speaker 
                            src="" text="Can add any text" label="Speaker" path='/add'
                        />
                        <Speaker 
                            src="./Images/speaker.jpg" text="Can add any text" label="Speaker" path='/add'
                        />
                    </ul>
                    <ul className="speaker_all">
                        <Speaker 
                            src="./Images/speaker.jpg" text="Can add any text" label="Speaker" path='/add'
                        />
                        <Speaker 
                            src="./Images/speaker.jpg" text="Can add any text" label="Speaker" path='/add'
                        />
                        <Speaker 
                            src="./Images/speaker.jpg" text="Can add any text" label="Speaker" path='/add'
                        />
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default guest
