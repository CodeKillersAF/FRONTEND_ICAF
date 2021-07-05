import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import "../researchPaperDetails.css";


const RegisterList = () => {
  const [approvedAttendees, setApprovedAttendees] = useState([]);

  useEffect(() => {
    axios
      .get(
        "/research-paper-publisher/get-approved-research-paper-publishers"
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
    <>
    <br />
    <center>
    <div className="reg-title">Pending List</div>
    </center>
    <hr />
    <br />
    <div class="list-group">
      {approvedAttendees.map((attendee) => (
  <a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{attendee.first_name}</h5>
      <small>Not Approved</small>
    </div>
    <p class="mb-1">{attendee.last_name}</p>
    <small>{attendee.email}</small>
  </a>
  ))}
</div>
<br />
</>
  );
};

export default RegisterList;
