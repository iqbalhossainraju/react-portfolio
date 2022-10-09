import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import ExploreWork1 from '../../../Images/explore-site-1.png';
import ExploreWork2 from '../../../Images/explore-site-2.png';
import './Explore.css';

const Explore = () => {
    return (
        <div className="container">
            <div className="section-title  mt-5">
                <h1>EXPL<span className="text-danger">O</span>RE WORK</h1>
                <p className="undermark"></p>
            </div>

            <div className="row">
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={ExploreWork1} alt="" />
                    <button className='explore-btn my-2 input-group text-center rounded-3 shadow-lg'><a href="https://food-resturant04.netlify.app/" target="_blank" rel="noreferrer">Explore Work <FontAwesomeIcon icon={faArrowAltCircleRight} /></a></button>
                </div>
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={ExploreWork2} alt="" />
                    <button className='explore-btn my-2 input-group text-center rounded-3 shadow-lg'><a href="https://travel-service-d6d18.web.app/" target="_blank" rel="noreferrer">Explore Work</a></button>
                </div>
            </div>
        </div>
    );
};

export default Explore;