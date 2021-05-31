import React from 'react';
import AboutMeCard from './AboutMeCard';
// import SkillsCard from './SkillsCard';
// import ProjectCards from '../components/ProjectCards';


function CardCluster () {

    return(

        <div className="cardCluster" id="aboutMe">

            <AboutMeCard />
            {/* <SkillsCard /> */}

        </div>

    )

}

export default CardCluster;