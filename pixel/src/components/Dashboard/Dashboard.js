import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import PrivateImg from './PrivateImg';
import PublicImg from './PublicImg';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [publicImg, setPublicImg] = useState([])
    const [privateImg, setPrivateImg] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/getCommunity?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setPublicImg(data))
    }, [loggedInUser.email])


    useEffect(() => {
        fetch('http://localhost:3002/getPrivate?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setPrivateImg(data))
    }, [loggedInUser.email])

    return (
        <div data-testid="test-Dashboard">
            <div style={{ background: "#12161f", height: "950px" }} className="text-light">
                <Navbar />
                <h1 className=" pt-5 text-center">Hi {loggedInUser.name} , Here Is your Uploaded Images.</h1>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h1 className="text-center">Public Images</h1>
                        <div className="row d-flex justify-content-center">
                            {
                                publicImg.map(upload => <PublicImg upload={upload} ></PublicImg>)
                            }
                        </div>

                    </div>
                    <div className="col-md-6">
                        <h1 className="text-center">Private Images</h1>
                        <div className="row d-flex justify-content-center">
                            {
                                privateImg.map(upload => <PrivateImg upload={upload} ></PrivateImg>)
                            }
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;