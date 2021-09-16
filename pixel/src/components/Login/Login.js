import React, { useContext, useState } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Navbar from '../Home/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginForm';

import './Login.css'

const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };




    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''
    });
    initializeLoginFramework();


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        else { <h1>jdhsahdkj</h1> }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();

    }
    return (
        <div data-testid="test-Login" className="logIn">
            <Navbar></Navbar>
            <div className=" pt-5 text-light">
                <div className="text-center">
                    <h1 className="text-light px-5 mx-5">Welcome To Pixel .Please Sign In With Your Google To Go Further...!!!!</h1>
                </div>

                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-center pt-5">
                            <div id="booking-area" className="booking-form">
                                <h1 className="text-center">Pixel</h1>
                                <form onSubmit={handleSubmit} x>
                                    <div className="form-group ">
                                        {newUser && <label for="exampleInputName" className="col-md-12">Name</label>}
                                        {newUser && <input class="form-control text-dark" type="text" name="name" onBlur={handleBlur} placeholder="Your Name" required />}
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input class="form-control text-dark" type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" class="form-control text-dark" id="exampleInputPassword1" required />
                                    </div>
                                    <div className="d-grid">
                                        <input className="btn-lg  btn-block btn-danger" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
                                    </div>
                                    <div >
                                        {newUser ?
                                            <h5>Signed Up Already??? Ok Then <a className="text-danger" onClick={() => setNewUser(!newUser)} href="#">Sign In</a></h5>
                                            :
                                            <h5>New Here??? Become One Of Us <a className="text-danger" onClick={() => setNewUser(!newUser)} href="#">Sign Up</a></h5>}
                                    </div>
                                </form>

                                <p style={{ color: 'red' }}>{user.error}</p>
                                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
                            </div>
                        </div>
                        <div className="d-flex justify-content-center pt-5">
                            <button style={{ width: "380px" }} onClick={googleSignIn} className="btn btn-danger btn-block btn-lg mt-1"><FontAwesomeIcon icon={faUserPlus} /> Sign In With Google </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_AXoQyR.json"
                            background="transparent"
                            speed="1"
                            style={{ height: "600px" }}
                            loop
                            autoplay>
                        </lottie-player>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;