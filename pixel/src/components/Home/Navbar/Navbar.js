import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../images/icon.png';

const Navbar = () => {
    return (
        <div data-testid="test-Navbar" className="full-container">
            <nav className="navbar navbar-expand-lg navbar-light p-0 bg-dark ">
                <div className="container-fluid text-light">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={logo} alt="Icon" className="logo" style={{ width: '50px' }} />
                        <h1 className="pl-3 text-light">Pixel</h1>
                    </Link>
                    <button className="btn btn-danger ml-3"><Link to="/addImage" className="text-light"> Upload Image </Link></button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link active px-3 text-light h5  my-2"> Home <span className="sr-only">(current)</span> </Link>
                            <a className="nav-link px-3 my-2" ><Link to="/dashboard" className="text-light h5 ">Images</Link></a>
                            <button className="btn btn-outline-danger mx-3 my-2" type="button"> <Link to="/signedIn" className="text-light">Sign In</Link>  </button>
                            <button className="btn btn-danger mx-3 my-2"><Link to="/signedIn" className="text-light">Sign Up</Link></button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;