/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import HeroPhotoNEW from '../assets/HeroPhotoNEW.png';



function AboutMeCard() {

  return (

    <div className="card col-11 aboutMeCard">
      <div className="card-body">
        <div>
          <img src={HeroPhotoNEW} className="img-fluid" alt="..." />
          <p id="aboutmeContact"></p>
        </div >
        {/* <div> */}

        <h5 className="card-title" >bryan moreno</h5>
        <h6 className="card-subtitle mb-2 text-muted">full stack developer</h6>
        <p className="card-text">Student. UW Coding Bootcamp 2021. Bartender with a love of coding & all things
            tech.32 </p>
        {/* </div> */}

        <a href="https://linkedin.com/in/bryan-moreno-360877128" className="card-link fab fa-linkedin" />

        <a href="https://drive.google.com/file/d/12-DtfiCD9neXaYTvRGocvRiiZqTtc2_0/view?usp=sharing" className="card-link fas fa-portrait" />

        <a href="https://github.com/bfourGitHub" className="card-link fab fa-github" />
      </div>
    </div>

  );

};

export default AboutMeCard;