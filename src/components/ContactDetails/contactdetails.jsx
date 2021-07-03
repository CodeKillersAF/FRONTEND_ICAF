import React, { Component } from "react";
import "../ContactUsHome/home.css";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
                  <div className="box">
                    <div className="icon"><RoomIcon /></div>
                    <div className="text">
                      <h3>Address</h3>
                      <p>SLIIT Malabe Campus, New Kandy Rd, Malabe 10115</p>
                    </div>
                  </div>

                
                  <div className="box">
                  <div className="icon"><EmailIcon /></div>
                  <div className="text">
                      <h3>Email</h3>
                      <p>icaf2021@sliit.lk</p>
                    </div>
                  </div>

                  <div className="box">
                  <div className="icon"><ContactPhoneIcon /></div>
                  <div className="text">
                      <h3>Contact Number</h3>
                      <p>+94 11 754 4801, +94 11 241 3901</p>
                    </div>
                  </div>

                  <div className="box">
                  <div className="icon"><LinkedInIcon /></div>
                  <div className="text">
                      <h3>Linked In</h3>
                      <p>sliit.linked-in./linked-in/sliit</p>
                    </div>
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
