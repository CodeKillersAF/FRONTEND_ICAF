import React, { useState } from "react";
import axios from 'axios';
import { storage } from "../../../firebase";

const RegisterForm = () => {

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

        axios.post("http://localhost:8080/api/research-paper-publisher/add-research-paper-publisher",data)
        .then(response => {
            console.log(response.data.data);
        })
        .catch(error => {
            console.log({error: error.message});
        })
    }

    const onFileSelect = (e) => {
      setFile(e.target.files[0]);
      console.log('file selected');
  }

  async function uploadFile(e) {
    e.preventDefault()
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
          if(pdfAsUrl != ''){
            setPdfUploaded(true);
          }
         console.log(pdfUpLoaded);
        })
      }
    )

  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}

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
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]{10}"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail" className="form-label">
            Upload Research Paper
          </label>
          <div class="custom-file">
            <input
              type="file"
              className="custom-file-input"
              onChange={onFileSelect}
              required
            />
          </div>
          <button className="btn btn-primary" onClick = { uploadFile }  >
            Upload File...
          </button>
        </div>
        {pdfUpLoaded && <button type="submit" className="btn btn-primary" > Submit </button>}
        {!pdfUpLoaded && <button type="submit" className="btn btn-primary" disabled> Submit </button>}
      </form>
    </div>
  );
};

export default RegisterForm;
