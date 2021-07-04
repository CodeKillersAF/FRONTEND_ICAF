import axios from "../../axios";
import React, { useState, useEffect } from "react";

function keynoteSpeaker() {
  const [keynotes, setKeynotes] = useState([]);

  useEffect(() => {
    fetchData();
  });
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
        <div className="card text-center">
          <div className="card-header">
            <h1>
              <b>Keynotes</b>
            </h1>
          </div>
        </div>
        {keynotes.map((keynote) => (
          <div className="text-center">
            <div className="header"></div>
            {/* <div class="card-body"> */}
            <br />

            <h5 className="card-title">
              <b>{keynote.speakerName}</b>
            </h5>
            <img
              src={keynote.speakerImageUrl}
              className="rounded-circle"
              width="200px"
              height="200px"
              alt="..."
            ></img>
            <br />

            <b>{keynote.position}</b>
            <br />
            <div className="container">
              <p className="card-text">{keynote.description}</p>
              <br />
              <br />
              <br />
            </div>
          </div>
        ))}
        {/* </div> */}
        {/* </section> */}
      </div>
    </div>
  );
}

export default keynoteSpeaker;
