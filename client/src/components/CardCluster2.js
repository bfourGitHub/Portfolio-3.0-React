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
                    <p className="card-text">UW Coding Boot Camp 2021. Bartender with a love of coding, design & all things tech.</p>

                </div>
            </div>

            <ProjectCards />

        </div>

    )

}

export default CardCluster2;