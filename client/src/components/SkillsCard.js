import React from 'react';

// import PhotoShop from '../assets/PhotoShop.jpeg';
import PhotoShopIcon2 from '../assets/PhotoShopIcon2.jpg';
import IllustratorIcon from '../assets/IllustratorIcon.jpg';
import InDesignIcon from '../assets/InDesignIcon.jpg';

function SkillsCard() {

    return (

        <div className="card col-11 skillsCard">
            <div style={{ marginTop: "1rem" }} >
                <h6 className="card-subtitle mb-3 mt-2 text-muted">programs & languages</h6>
                <p className="card-link fab fa-html5"></p>
                <p className="card-link fab fa-css3-alt"></p>
                <p className="card-link fab fa-js-square"></p>
                <p className="card-link fab fa-react"></p>
            </div>
            <div style={{ marginBottom: "1rem" }} >
                <img src={PhotoShopIcon2} className="img-fluid card-link" style={{ width: "3rem", height: "3rem" }} alt="Photoshop" />
                <img src={IllustratorIcon} className="img-fluid card-link" style={{ width: "3rem", height: "3rem" }} alt="Illustrator" />
                <img src={InDesignIcon} className="img-fluid card-link" style={{ width: "3rem", height: "3rem" }} alt="InDesign" />

            </div>
        </div>

    );
};

export default SkillsCard;