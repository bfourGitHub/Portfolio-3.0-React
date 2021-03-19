/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
import macbook from "../assets/macbook.jpg";
import coding from "../assets/coding.jpg";
import typewriter from "../assets/typewriter.jpg";
import adventue from "../assets/adventue.jpg";
import workshop from "../assets/workshop.jpg";
import freshFood from "../assets/freshFood.jpg";
import puddleJump from "../assets/puddleJump.jpg";
import fountainPen2 from "../assets/fountainPen2.jpg";




function ProjectCards() {

    const projects = [
        {
            id: "trailChasers",
            imgURL: adventue,
            name: "Trail Chasers",
            description: "Your new hiking buddy! An easy to use application that helps you find your next hike.",
            gitHubLink: "https://github.com/TaaniBravo/Trail-Chaser-Hiking-App",
            deployedLink: "https://taanibravo.github.io/Trail-Chaser-Hiking-App/",
            fontAGitIcon: "card-link fab fa-github",
            fontAExTIcon: "card-link fas fa-external-link-alt",
        },
        {
            id: "foodDadABase",
            imgURL: freshFood,
            name: "Food Dad-A-Base",
            description: "Easy to use app to test your cooking skills (no studying required) while also having a laugh!",
            gitHubLink: "https://github.com/goantonioUW/food-dadabase",
            deployedLink: "https://food-dad-a-base.herokuapp.com/login",
            fontAGitIcon: "card-link fab fa-github",
            fontAExTIcon: "card-link fas fa-external-link-alt",
        },
        {
            id: "weatherDashboard",
            imgURL: puddleJump,
            name: "Weather Dashboard",
            description: "A simple weather application to help plan a fun weekend.",
            gitHubLink: "https://github.com/bfourGitHub/Weather_Dashboard",
            deployedLink: "https://bfourgithub.github.io/Weather_Dashboard/",
            fontAGitIcon: "card-link fab fa-github",
            fontAExTIcon: "card-link fas fa-external-link-alt",
        },
        {
            id: "readMEGenerator",
            imgURL: macbook,
            name: "ReadME Generator",
            description: "A user friendly CLI that creates a readME.md file.",
            gitHubLink: "https://github.com/bfourGitHub/Easy-Readme-Generator",
            fontAGitIcon: "card-link fab fa-github",
        },
        {
            id: "employeeTracker",
            imgURL: coding,
            name: "Employee Tracker CLI",
            description: "A simple CLI to create & manage your team.",
            gitHubLink: "https://github.com/bfourGitHub/Employee-Tracker",
            fontAGitIcon: "card-link fab fa-github",
        },
        {
            id: "noteTaker",
            imgURL: fountainPen2,
            name: "Note Taker App",
            description: "A simple note-taking application to jot down things you need to remember.",
            gitHubLink: "https://github.com/bfourGitHub/Note-Taker",
            deployedLink: "https://note-taker-moreno.herokuapp.com/",
            fontAGitIcon: "card-link fab fa-github",
            fontAExTIcon: "card-link fas fa-external-link-alt",
        },
        // {
        //     id: "dailyPlanner",
        //     imgURL: planner,
        //     name: "Daily Planner",
        //     description: "A simple calendar application to keep you on track throughout your day.",
        //     gitHubLink: "https://github.com/bfourGitHub/Daily-Planner",
        //     deployedLink: "https://bfourgithub.github.io/Daily-Planner/",
        //     fontAGitIcon: "card-link fab fa-github",
        //     fontAExTIcon: "card-link fas fa-external-link-alt",
        // },
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

                <div className="card featuredProjects">
                    <div className="card-body" id={projects.id}>
                        <img src={projects.imgURL} className="card-img-top" alt="..." />
                        <h5 className="card-title projectName">{projects.name}</h5>
                        <p className="card-text">{projects.description}</p>
                    </div> 
                    

                    <div className="card-body projectCardLinks">
                        <a href={projects.gitHubLink} className={projects.fontAGitIcon} />
                        <a href={projects.deployedLink} className={projects.fontAExTIcon} />
                        <p>{projects.comingSoon}</p>
                    </div>
                </div>
            ))

        // </Card>
    );
};

export default ProjectCards;