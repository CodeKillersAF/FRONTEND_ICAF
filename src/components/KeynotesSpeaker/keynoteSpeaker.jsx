import axios from "../../axios";
import React, { useState, useEffect } from "react";

function keynoteSpeaker() {
  const [keynote, setKeynotes] = useState([]);

  async function fetchData() {
    await axios.get("/keynotes/get-approved-keynotes").then((response) => {
      setKeynotes(response.data.data);
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
          <div class="text-center">
            <div class="header">
            </div>
            {/* <div class="card-body"> */}
            <br />
              <h5 class="card-title">
                <b>Lecturer Name</b> 
              </h5>
              <img
                src="https://i.ibb.co/ZhFKQ1H/lecturer.jpg"
                class="rounded-circle"
                width="200px"
                height="200px"
                alt="..."
              ></img><br />
              <b>Position</b><br />

              <p class="card-text">
                So, as is our hallowed duty as a literary and culture
                website—though with full awareness of the potentially fruitless
                and endlessly contestable nature of the task—in the coming
                weeks.So, as is our hallowed duty as a literary and culture
                website—though with full awareness of the potentially fruitless
                and endlessly contestable nature of the task—in the coming
                weeks.
              </p>
              <br /><br /><br />
            </div>
          {/* </div> */}
          {/* </section> */}
          </div>
    </div>
  );
}

export default keynoteSpeaker;
