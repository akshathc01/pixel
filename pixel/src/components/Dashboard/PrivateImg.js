import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { storage } from '../../firebase/index.js'

const PrivateImg = ({ upload }) => {

    const [ui, setUi] = useState(false)

    var storageRef = storage.ref();


    const handleDelete = (id) => {
        fetch(`http://localhost:3002/deletePrivate/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your image has been deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
            })

        var desertRef = storageRef.child(`images/${upload.imageName}`);
        desertRef.delete().then(() => {

            setUi(true)

        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <>
            {!ui &&
                <div  data-testid="test-PrivateImg" className="card bg-secondary mx-1 my-1" style={{ width: '30%' }}>
                    <img src={upload.url} className="card-img-top h-50" alt={upload.title} />
                    <div className="card-body">
                        <h5 className="card-title text-light text-center">{upload.title}</h5>
                    </div>
                    <div classNameName="card-footer">
                        <button onClick={() => handleDelete(upload._id)} className="btn btn-danger btn-block">Delete</button>
                    </div>
                </div>

            }
        </>
    );
};

export default PrivateImg;