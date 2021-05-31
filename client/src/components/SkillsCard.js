import React from 'react';

function SkillsCard() {

    return (

        <div className="card col-11 skillsCard">
            <div style={{ marginTop:"1rem" }} >
            <h6 className="card-subtitle mb-3 mt-2 text-muted">programs & languages</h6>
            <p className="card-link fab fa-html5"></p>
            {/* <img src={HeroPhotoNEWMin} className="img-fluid" alt="..." /> */}
            <p className="card-link fab fa-css3-alt"></p>
            <p className="card-link fab fa-js-square"></p>
            <p className="card-link fab fa-react"></p>
            </div>
        </div>

    );
};

export default SkillsCard;