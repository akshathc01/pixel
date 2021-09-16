import React, { useContext, useState } from 'react';
import './AddImage.css';
import Navbar from '../Home/Navbar/Navbar';
import { storage } from '../../firebase';
import { UserContext } from '../../App';
import Swal from 'sweetalert2';


const AddImage = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log("Beacuse Test", loggedInUser);

  const [title, setTitle] = useState('')
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  var storageRef = storage.ref();

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.ceil(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        // console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );


    const gettingFormPart = document.getElementById('uploadImage');
    const hidingImagePart = document.getElementById('imagePart');
    gettingFormPart.style.display = 'none';
    hidingImagePart.style.display = 'block';
  };

  const handleDelete = () => {
    var desertRef = storageRef.child(`images/${image.name}`);
    desertRef.delete().then(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your image has been deleted',
        showConfirmButton: false,
        timer: 1500
      })
    }).catch((error) => {
      // console.log(error);
    });
  }

  const handlePrivate = () => {
    fetch('http://localhost:3002/addPrivate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        imageName: image.name,
        url,
        email: loggedInUser.email,
        title
      })
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your image has been uploaded',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleCommunity = () => {
    fetch('http://localhost:3002/addCommunity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        imageName: image.name,
        url,
        email: loggedInUser.email,
        title
      })

    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your image has been uploaded',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <section data-testid="test-addImage">
      <Navbar />
      <div style={{ position: "relative", paddingTop: '50px', background: "#12161f", height: "910px" }} className="addImage">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
          className="container text-center">


        </div>

        <form id="uploadImage" className="container">
          <h1 className="text-center text-light pb-5">Please Click On The Button To Upload Your Image</h1>
          <div className="form-row d-flex justify-content-center">
            <div className="input-group input-group-lg col-6">
              <input onChange={handleChange} type="file" className="form-control pt-1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>

            <div className="col-1 ">
              <button style={{ padding: '11px' }} onClick={handleUpload} type="button" className="btn btn-danger">Upload</button>
            </div>
          </div>
        </form>

        <div style={{ display: 'none' }} id="imagePart" className=" my-3 container text-center">
          <h6 className="text-light py-3 pb-5"> Image URL: {url} </h6>
          <img src={url} className="card-img-top text-center pb-5" alt={title} style={{ width: '30%', height: 'auto' }} />
          <div className="row pb-5">
            <div className="input-group my-3 w-50 text-center col-10 ">
              <input onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control border border-danger" placeholder="Image Title" aria-label="Image Title" aria-describedby="button-addon2" />

              <button onClick={handlePrivate} className="btn btn-outline-danger text-light ml-3" type="button" id="button-addon2">Add Private</button>
              <button onClick={handleCommunity} className="btn btn-outline-danger ml-3 col-2 text-light" type="button"> To Community </button>
              <button onClick={handleDelete} className="btn btn-outline-danger ml-3 col-2 text-light" type="button"> Delete </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddImage;