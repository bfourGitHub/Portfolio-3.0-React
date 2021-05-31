import React from 'react';
// import AboutMeCard from '../components/AboutMeCard';
import DesignCards from './DesignCards';


function CardCluster3() {

    return (

        <div className="cardCluster" id="aboutMe">



            <div className="card col-11 aboutMeCard" style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}>
                <div className="card-body">

                    <h5 className="card-title" style={{ color: "white" }} >bryan moreno</h5>
                    <h6 className="card-subtitle mb-2 text-muted">interdisciplinary design</h6>
                    <div className="col-md-7 col-sm-12 col-xs-12" style={{ display:"inline-block" }}>
                        <p className="card-text" style={{ color: "rgba(172, 135, 80)", justifyContent: "center" }}>When we talk about design, we sometimes only think about one specific medium; great design is the culmination of many design disciplines coming together.</p>
                        <p className="card-text" style={{ color: "rgba(172, 135, 80, 0.7)", justifyContent: "center" }}>"Architects spend an entire life with this unreasonable idea that you can fight against gravity."</p>
                        <p className="card-text" style={{ color: "rgba(172, 135, 80, 0.7)", justifyContent: "center" }}>-Renzo Piano</p>
                    </div>
                </div>
            </div>

            <DesignCards />



        </div>

    );

};

export default CardCluster3;