import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import RegisterForm from "./ResearchPaperDetailsRegForm/ResearchPaperDetailsRegForm";
import RegisterList from "./ResearchPaperDetailsRegList/researchPaperDetailsRegList";

const ResearchPaperDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
           <center><h4>Register Form</h4></center>
          <RegisterForm />
        </div>
        <div className="col">
          <RegisterList />
        </div>
      </div>
    </div>
  );
};

export default ResearchPaperDetails;
