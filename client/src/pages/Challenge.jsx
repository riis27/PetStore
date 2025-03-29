import React from 'react';
import './style.css';

const Challenge = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-right w-100">
                            <a className="navbar-brand" href="index.html">
                                <img src="./assets/logo.jpeg" className="navbar-image" alt="Pawsh" />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="about.html">
                                            Our Mission <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="adoption.html">Adoption</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="services.html">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="FAQs.html">FAQs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div id="page-header">
                <h2>Welcome to Our Market</h2>
                <p>Explore our wide range of products and services.</p>
            </div>
            <div id="market"></div>
        </>
    );
};

export default Challenge;