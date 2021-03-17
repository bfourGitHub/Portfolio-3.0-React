/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import adventue from '../assets/adventue.jpg';

function CardTwoLinks() {
    return(

        <div className="card featuredProjects" id="featuredProjects">
          <div className="card-body">
            <img src={adventue} className="card-img-top" alt="..."/>
              <h5 className="card-title">Trail Chasers</h5>
              <p className="card-text">Your new hiking buddy! An easy to use application that helps you find your next
            hike.</p>
          </div>

            <div className="card-body">
              <a href="https://github.com/TaaniBravo/Trail-Chaser-Hiking-App" className="card-link fab fa-github"/>
              <a href="https://taanibravo.github.io/Trail-Chaser-Hiking-App/"
                className="card-link fas fa-external-link-alt"/>
            </div>
        </div>

    );
};

export default CardTwoLinks;