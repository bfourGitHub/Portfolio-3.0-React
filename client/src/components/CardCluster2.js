import React from 'react';
// import AboutMeCard from '../components/AboutMeCard';
import ProjectCards from './ProjectCards';


function CardCluster2() {

    return (

        <div className="cardCluster" id="aboutMe">

            <div className="card col-11 aboutMeCard">
                <div className="card-body">

                    <h5 className="card-title" >bryan moreno</h5>
                    <h6 className="card-subtitle mb-2 text-muted">full stack web developer</h6>
                    <p className="card-text">UW Coding Boot Camp 2021.</p>
                    <div className="mb-4 card-text" style={{ textAlign: "-webkit-center" }}>
                        <p className="card-text" style={{ maxWidth: "40rem" }} >Seattle-based developer with an outgoing personality, positive attitude & collaborative spirit. Hard worker with a love for the delicate art of coding & object oriented design. Expert problem solver with a strong background in interdisciplinary design.</p>

                    </div>

                </div>
            </div>

            <ProjectCards />

        </div>

    )

}

export default CardCluster2;