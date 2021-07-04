import axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../researchPaperDetails.css";


const RegisterList = () => {
  const [approvedAttendees, setApprovedAttendees] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/api/research-paper-publisher/get-approved-research-paper-publishers"
      )
      .then((response) => {
        console.log(response.data.data);
        setApprovedAttendees(response.data.data);
      })
      .catch((error) => {
        console.log({ error: error.message });
      });
  }, []);

  return (
    <div className="container">
      <center><h4>How to Register your research paper...</h4></center>
      <div className="list-group">
        <div className="scrollable">
          {approvedAttendees && approvedAttendees.map((attendee) => (
            <li className="list-group-item">{attendee.first_name}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterList;
