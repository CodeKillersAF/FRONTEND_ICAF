import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ICAF</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-fill w-100">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/keynote">Keynote</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/workshop">Workshop</Link>
                        </li>
                       <li className="nav-item">
                            <Link className="nav-link" to="/research">Research</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/download">Download</Link>
                        </li>
                        <li className="nav-item">                      
                             <Link className="nav-link" to="/contact-us">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/register">Register</Link>
                        </li>
                       
                    </ul>
                </div>
                {/* <div className="d-flex">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/signIn">SignIn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signUp">SignUp</a>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </nav>

    )
}