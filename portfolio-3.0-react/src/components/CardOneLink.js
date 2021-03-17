/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
// import Card from "react-bootstrap/Card";
import macbook from "../assets/macbook.jpg";

function ReadMeGen() {

    return (

        <div className="card featuredProjects">
            <div className="card-body">
                <img src={macbook} className="card-img-top" alt="..." />
                <h5 className="card-title">ReadME Generator</h5>
                <p className="card-text">A user friendly CLI that creates a readME.md file.</p>
            </div>

            <div className="card-body">
                <a href="https://github.com/bfourGitHub/Easy-Readme-Generator" className="card-link fab fa-github" />

            </div>
        </div>
    );
};

export default ReadMeGen;