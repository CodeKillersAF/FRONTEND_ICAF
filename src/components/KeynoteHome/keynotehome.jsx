import React, { Component } from "react";
import "./key.css";

export default class keynotehome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="hero-container">
          <div className="homepage" />
          <h1>Key-Notes</h1>
          <hr className="hrClass"/>
          <h3>Let's see key-speakers of our conferences..!!</h3>
        </div>
      </div>
    );
  }
}
