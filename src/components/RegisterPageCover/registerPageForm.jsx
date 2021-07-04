import React , {useState} from 'react';
import axios from 'axios';
import { storage } from "../../firebase";
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const RegisterFormAttendee = () => {

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email,setEmail]  = useState('');
  const [phone, setPhone] = useState('');
  const [participate, setParticipate] = useState('');

  const [file, setFile] = useState(null);
  const [imgAsUrl, setImgAsUrl] = useState("");
  const [imgUpLoaded, setImgUploaded] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    let data = {
      first_name: firstName,
      last_name : lastName,
      email: email,
      phone: phone,
      date: participate,
      bank_slip_url : imgAsUrl
    };

    console.log(data);

    axios.post("http://localhost:8080/api/attendee/add-attendee",data)
    .then( response => {
      console.log(response.data.data)
    })
    .catch( error => {
      console.log({error: error.message})
    })

  }

  const onFileSelect = (e) => {
    setFile(e.target.files[0]);
    console.log('file selected');
  }

  async function uploadFile(e) {
    e.preventDefault();
    setOpen(!open);
    let bucketName = "bankSlips";
    let uploadTask = storage.ref(`${bucketName}/${file.name}`).put(file);
    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (err) => {
        console.log(err);
      },
      () => {
       storage
        .ref("bankSlips")
        .child(file.name)
        .getDownloadURL()
        .then((firebaseURL) => {
          setImgAsUrl(firebaseURL);
          console.log(imgAsUrl);
          setOpen(false);
          if(imgAsUrl != ''){
            setImgUploaded(true);
          }
         console.log(imgUpLoaded);
        })
      }
    )

  }

  return (
    <>
    <center>
    <div className="cover-color">
    <br />
    

    <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
        {" "}Uploading....
      </Backdrop>

    <div className="regpage">
       <div className="reg-title">Register Here</div>
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label> */}
          <div class="inputs">
          <input className="reg-input"
            type="text"
            // className="form-control"
            id="firstname"
            name="firstname"
            value={firstName}
            onChange = { e => setFirstName(e.target.value)}
            placeholder="Enter First Name"
          />
          </div>
        {/* </div> */}
        {/* <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Last Name
          </label> */}
           <div class="inputs">
          <input className="reg-input"
            type="text"
            //className="form-control"
            id="lastname"
            name="lastname"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Enter Last Name"
          />
          </div>
        {/* </div> */}
        {/* <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label> */}
          <input className="reg-input"
            type="email"
            //className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={ e => setEmail(e.target.value)}
            placeholder="Enter Email Address"
          />
        {/* </div> */}
        {/* <div className="mb-3">
          <label for="exampleInputEmail" className="form-label">
            Phone
          </label> */}
          <input className="reg-input"
            type="tel"
            //className="form-control"
            id="phone"
            name="phone"
            value={phone}
            pattern="[0-9]{10}"
            onChange = { e => setPhone(e.target.value)}
            placeholder="Enter Telephone Number"
          />
        {/* </div> */}
        {/* <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Participate at
          </label> */}
          <input className="reg-input"
          type="date"  
          //className = "form-control" 
          id="participate" 
          name="participate" 
          value={participate}
          onChange={ e => setParticipate(e.target.value)}
          />
        {/* </div> */}
        {/* <div className="mb-3">
          <label for="exampleInputEmail" className="form-label">
            Upload Workshop Praposal
          </label> */}
          <div className="custom-file">
            <input
              type="file"
              //className="custom-file-input"
              onChange={onFileSelect}
              required
            />
          {/* </div> */}
          <button className="btn btn-primary" onClick = { uploadFile }  >
            Upload File...
          </button>
        </div>
        
        {imgUpLoaded && <button type="submit" className="reg-button" > Submit </button>}
        {!imgUpLoaded && <button type="submit" className="disable-button"  disabled> Submit </button>}
      </form>
    </div>
    
    <br />
    </div>
    </center>
    </>
  );
};

export default RegisterFormAttendee;
