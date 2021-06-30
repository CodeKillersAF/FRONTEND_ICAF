import React , {useState} from 'react';
import axios from 'axios';

const RegisterFormAttendee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email,setEmail]  = useState('');
  const [phone, setPhone] = useState('');
  const [participate, setParticipate] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault();

    let data = {
      first_name: firstName,
      last_name : lastName,
      email: email,
      phone: phone,
      date: participate
    };

    axios.post("http://localhost:8000/api/attendee/add-attendee",data)
    .then( response => {
      console.log(response.data.data)
    })
    .catch( error => {
      console.log({error: error.message})
    })

  }

  return (
    <div className="container">
       <center><h4>Register Here...</h4></center>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={firstName}
            onChange = { e => setFirstName(e.target.value)}
            
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={lastName}
            onChange={e => setLastName(e.target.value)}

          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={ e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            pattern="[0-9]{10}"
            onChange = { e => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Participate at
          </label>
          <input 
          type="date"  
          className = "form-control" 
          id="participate" 
          name="participate" 
          value={participate}
          onChange={ e => setParticipate(e.target.value)}
          />
        </div>

        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterFormAttendee;
