import React, { Component } from "react";
import "./key.css";

export default class keynotehome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="keynote-hero-container">
          <div className="homepage" />
          <h1>Keynotes</h1>
          <hr className="hrClass"/>
          <h3>Let's see keynotes of our conferences..!!</h3>
        </div>
      </div>
    );
  }
}
