import React, { Component } from "react";
import "../ContactUsHome/home.css";
import RoomIcon from "@material-ui/icons/Room";

export default class contactdetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="content">
              </div>
              <div className="container">
                <div className="contactInfo">
                  <div className="box mb-5">
                    <div className="icon"></div>
                    <div className="text">
                      <h3>Address</h3>
                      <p>address details</p>
                    </div>
                  </div>

                  <div className="box mb-5">
                      <h3>Email</h3>
                      <p>our email</p>
                  </div>

                  <div className="box mb-5">
                      <h3>Contact Number</h3>
                      <p>contact number</p>
                  </div>

                  <div className="box mb-5">
                      <h3>Other</h3>
                      <p>other details</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="contactForm">
                <div class="mb-4">
                  <label for="exampleFormControlInput1" className="lableForm">
                    Your Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                    required
                  />
                </div>

                <div className="mb-4">
                  <label for="exampleFormControlInput1" className="lableForm">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                    required
                  />
                </div>

                <div class="mb-4">
                  <label for="exampleFormControlInput1" class="lableForm">
                    Subject
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                    required
                  />
                </div>

                <div class="mb-4">
                  <label for="exampleFormControlTextarea1" class="lableForm">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div class="mb-4">
                  <button type="submit" className="btn btn-success">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>

    );
  }
}
