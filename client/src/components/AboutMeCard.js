/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import HeroPhotoNEWMin from '../assets/HeroPhotoNEWMin.png';



function AboutMeCard() {

  return (

    <div className="card col-11 aboutMeCard">
      <div className="card-body">
        <div>
          <img src={HeroPhotoNEWMin} className="img-fluid" alt="..." />
          <p id="aboutmeContact"></p>
        </div >
        {/* <div> */}

        <h5 className="card-title" >bryan moreno</h5>
        <h6 className="card-subtitle mb-2 text-muted">full stack web developer</h6>
        <p className="card-text">UW Coding Boot Camp 2021.</p>
        <div className="mb-4 card-text" style={{ textAlign : "-webkit-center"}}>
        <p className="card-text" style={{maxWidth: "40rem"}} >Seattle-based developer with an outgoing personality, positive attitude & collaborative spirit. Hard worker with a love for the delicate art of coding & object oriented design. Expert problem solver with a strong background in interdisciplinary design.</p>

        </div>
        {/* </div> */}

        <a href="https://www.linkedin.com/in/bryanmorenowebdev/" className="card-link fab fa-linkedin" />

        <a href="https://drive.google.com/file/d/12-DtfiCD9neXaYTvRGocvRiiZqTtc2_0/view?usp=sharing" className="card-link fas fa-file-alt" />

        <a href="https://github.com/bfourGitHub" className="card-link fab fa-github" />
        <h6 className="mt-2" style={{ color: "rgba(172, 135, 80)" }}>bfourbryan@gmail.com</h6>
      </div>
    </div>

  );

};

export default AboutMeCard;