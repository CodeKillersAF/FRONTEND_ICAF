import axios from "../../axios";
import React, { useState, useEffect } from "react";

function keynoteSpeaker() {
  const [keynotes, setKeynotes] = useState([]);

  useEffect(() => {
    fetchData();
  })
  async function fetchData() {
    await axios.get("/keynotes/get-approved-keynotes").then((response) => {
      setKeynotes(response.data.data);
      console.log(response.data.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
     <div>
        <br />
        <br />
        {/* <section className="sectionDesign"> */}
        <div class="card text-center">
            <div class="card-header">
        <h1>
            <b>Keynotes</b>
        </h1>
        </div>
        </div>
        {keynotes.map((keynote)=>(
          <div class="text-center">
            <div class="header">
            </div>
            {/* <div class="card-body"> */}
            <br />
            
              <h5 class="card-title">
                <b>{keynote.speakerName}</b> 
              </h5>
              <img
                src={keynote.speakerImageUrl}
                class="rounded-circle"
                width="200px"
                height="200px"
                alt="..."
              ></img><br />
              
              <b>{keynote.position}</b><br />

              <p class="card-text">
                {keynote.description}
              </p>
              <br /><br /><br />
              
            </div>
            ))}
          {/* </div> */}
          {/* </section> */}
          </div>
          
    </div>
  );
}

export default keynoteSpeaker;
