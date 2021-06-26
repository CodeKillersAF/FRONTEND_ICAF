import React from 'react';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">ICAF </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-fill w-100">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/keynote">Keynote</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/workshop">Workshop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/download">Template</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/signIn">SignIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signUp">SignUp</a>
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
