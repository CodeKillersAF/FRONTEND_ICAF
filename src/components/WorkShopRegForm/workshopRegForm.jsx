import React, { useState } from "react";
import axios from "axios";
import { storage } from "../../firebase";

const WorkShopRegForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [file, setFile] = useState(null);
  const [pdfAsUrl, setPdfAsUrl] = useState("");
  const [pdfUpLoaded, setPdfUploaded] = useState(false);

  let data = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone,
    praposal_url : pdfAsUrl
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8080/api/work-shop-conductor/add-workshop-conductor",
        data
      )
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log({ error: error.message });
      });
  };

  const onFileSelect = (e) => {
      setFile(e.target.files[0]);
      console.log('file selected');
  }

  async function uploadFile(e) {
    e.preventDefault()
    let bucketName = "workshopsPraposal";
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
        .ref("workshopsPraposal")
        .child(file.name)
        .getDownloadURL()
        .then((firebaseURL) => {
          setPdfAsUrl(firebaseURL);
          console.log(pdfAsUrl);
          if(pdfAsUrl != ''){
            setPdfUploaded(true);
          }
         console.log(setPdfUploaded);
        })
      }
    )

  }

  return (
    <div className="container">
      <center>
        <h4>Register Here...</h4>
      </center>
      <form onSubmit={ handleSubmit }>
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
            onChange={(e) => setFirstName(e.target.value)}
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
            onChange={(e) => setLastName(e.target.value)}
            required
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
            required
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
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail" className="form-label">
            Upload Workshop Praposal
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

export default WorkShopRegForm;
