import React , { useState }  from "react";
import axios from "../../axios";
import "../ContactUsHome/home.css";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function contactdetails() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmitHandle = () => {

    let data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
    
    axios.post('/contact-us/create-a-contact',data)
    .then(response => {
      console.log(response.data.data);
      alert('Your message sent');
    })
    .catch(error => {
      console.log({error: error.message});
      alert(error.message);
    })
  }


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
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=""
                    required
                  />
                </div>

                <div class="mb-4">
                  <label for="exampleFormControlInput1" class="lableForm">
                    Subject
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="3"

                    required
                  ></textarea>
                </div>

                <div class="mb-4">
                  <button type="submit" className="btn btn-success" onClick={onSubmitHandle}>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default contactdetails
