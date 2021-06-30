import axios from '../../axios';
import React, { useState,useEffect } from 'react';

function keynoteSpeaker() {
    const [keynote, setKeynotes] = useState([]);

    async function fetchData(){
        await axios.get('/keynotes/get-approved-keynotes')
        .then((response)=>{
            
            setKeynotes(response.data.data);
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    

    return (
        <div>
                <br />
                <section className="keynote">

                    <div className="container text-center">
                        <h1><b>Our Keynote Speakers</b></h1>
                        <p>Lots of speakers share their knowledge</p>

                        <div className="row">
                            {keynote.map((speaker) => (

                            <div className="col-lg-4 col-md-4 col-sm-10 col-12 d-block m-auto">
                                <figure className="figure">
                                    <img src={speaker.speakerImageUrl}
                                      className="rounded-circle" height="200px" width="200px" />

                                      <figcaption>
                                          <h2>{speaker.speakerName}</h2>
                                          <p className="figure-caption">{speaker.position}</p>
                                          <p className="figure-caption">{speaker.description}</p>
                                      </figcaption>
                                </figure>
                            </div>

                        ))}

                        </div>
                    </div>
                </section>
            </div>
    )
}

export default keynoteSpeaker
