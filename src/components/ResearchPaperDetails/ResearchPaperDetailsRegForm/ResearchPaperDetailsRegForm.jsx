import React, { useState } from "react";
import axios from '../../../axios';
import { storage } from "../../../firebase";
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))


const RegisterForm = () => {

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [file, setFile] = useState(null);
    const [pdfAsUrl, setPdfAsUrl] = useState("");
    const [pdfUpLoaded, setPdfUploaded] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            researchPaper_url: pdfAsUrl
        }

        axios.post("/research-paper-publisher/add-research-paper-publisher",data)
        .then(response => {
            console.log(response.data.data);
            alert('You are Registered');
        })
        .catch(error => {
            console.log({error: error.message});
            alert(error.message);
        })
    }

    const onFileSelect = (e) => {
      setFile(e.target.files[0]);
      console.log('file selected');
  }

  async function uploadFile(e) {
    e.preventDefault();
    setOpen(!open);
    let bucketName = "researchPaper";
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
        .ref("researchPaper")
        .child(file.name)
        .getDownloadURL()
        .then((firebaseURL) => {
          setPdfAsUrl(firebaseURL);
          console.log(pdfAsUrl);
          setOpen(false);
          if(pdfAsUrl != ''){
            setPdfUploaded(true);
          }
         console.log(pdfUpLoaded);
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

    <div className="divideReg">
    <div className="reg-title">Register Here</div>
      
      <form onSubmit={ handleSubmit }>
        {/* <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label> */}
          <div class="inputs">
          <input className="reg-input"
            type="text"
            //className="form-control"
            id="firstname"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Enter Last Name"
          />
        </div><br />
        {/* <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label> */}
          <input className="reg-input"
            type="email"
           // className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Email Address"
          /> <br />
        
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
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Enter Telephone Number"
          /> <br />
        {/* </div> */}
        {/* <div className="mb-3">
          <label for="exampleInputEmail" className="form-label">
            Upload Workshop Praposal
          </label> */}
          <div class="custom-file">
            <input
              type="file"
              className="custom-file-input"
              onChange={onFileSelect}
              required
            /> 
          {/* </div> */}
          <button className="btn btn-primary" onClick = { uploadFile }  >
            Upload File...
          </button>
        {/* </div> */}
        {pdfUpLoaded && <button type="submit" className="reg-button"> Submit </button>}
        {!pdfUpLoaded && <button type="submit" className="disable-button" disabled> Submit </button>}
     </div>
      </form>
    </div>

    <br />
    </div>
    </center>
    </>
  );
};

export default RegisterForm;
