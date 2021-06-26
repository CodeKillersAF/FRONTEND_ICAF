import React, { useState } from 'react';

function keynoteTest() {

    const [keynote, setKeynotes] = useState([
        {
            name: "Speaker 1",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5iEj1qbLA8v0RsIuKWCxEN5Jo54thBUeDA&usqp=CAU",
            position: "position 1",
        },
        {
            name: "Speaker 2",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5iEj1qbLA8v0RsIuKWCxEN5Jo54thBUeDA&usqp=CAU",
            position: "position 2",
        },
        {
            name: "Speaker 3",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5iEj1qbLA8v0RsIuKWCxEN5Jo54thBUeDA&usqp=CAU",
            position: "position 3",
        }
    ]);

    return (
        <div>
                <br />
                <section className="keynote">

                    <div className="container text-center">
                        <h1><b>Our Key-note Speakers</b></h1>
                        <p>Lots of speakers are share there knowledge</p>

                        <div className="row">
                            {keynote.map((speaker) => (

                            <div className="col-lg-4 col-md-4 col-sm-10 col-12 d-block m-auto">
                                <figure className="figure">
                                    <img src={speaker.url}
                                      className="rounded-circle" height="200px" width="200px" />

                                      <figcaption>
                                          <h2>{speaker.name}</h2>
                                          <p className="figure-caption">{speaker.position}</p>
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

export default keynoteTest
