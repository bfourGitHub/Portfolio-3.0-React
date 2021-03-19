/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
import typewriter from "../assets/typewriter.jpg";
import workshop from "../assets/workshop.jpg";




function DesignCards() {

    const projects = [       
        
        {
            id: "theJetwayAP",
            imgURL: workshop,
            name: "The Jetway Apartment Project",
            description: "An iterative renovation of a 297 sq ft apartment in the Emerald City.",
            comingSoon: "Coming Soon..."
        },
        {
            id: "andyMeetsTheNeighbors",
            imgURL: typewriter,
            name: "Andy Meets the Neighbors",
            description: "A short story about an unassuming old building, its eccentric residents & the new guy in #304.",
            comingSoon: "Coming Soon..."
        },
    ];

    return (

        // <Card>
            projects.map((projects) => (

                <div className="card featuredProjects" id={projects.id}>
                    <div className="card-body">
                        <img src={projects.imgURL} className="card-img-top" alt="..." />
                        <h5 className="card-title projectName">{projects.name}</h5>
                        <p className="card-text">{projects.description}</p>
                    </div> 
                    

                    <div className="card-body projectCardLinks">
                        <a href={projects.gitHubLink} className={projects.fontAGitIcon} />
                        <a href={projects.deployedLink} className={projects.fontAExTIcon} />
                        <p className="card-link">{projects.comingSoon}</p>
                    </div>
                </div>
            ))

        // </Card>
    );
};

export default DesignCards;