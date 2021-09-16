import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { storage } from '../../firebase/index.js'

const PublicImg = (props) => {
    const [ui, setUi] = useState(false)
    var storageRef = storage.ref();
    const { _id, url, title, imageName } = props.upload
    const handleDelete = (id) => {
        fetch(`http://localhost:3002/deletePublic/${id}`, {
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
        var desertRef = storageRef.child(`images/${imageName}`);
        desertRef.delete().then(() => {
            setUi(true)

        }).catch((error) => {
            console.log(error);
        });
        console.log(id)
    }


    return (
        <>
        {!ui &&
            <div  data-testid="test-PublicImg" className="card bg-secondary mx-1 my-1" style={{ width: '30%' }}>
                <img src={url} className="card-img-top h-50" alt={title} />
                <div className="card-body">
                    <h5 className="text-light text-center">{title}</h5>
                </div>
                <div classNameName="card-footer">
                    <button onClick={() => handleDelete(_id)} className="btn btn-danger btn-block">Delete</button>
                </div>
            </div>

        }
    </>
    );
};

export default PublicImg;