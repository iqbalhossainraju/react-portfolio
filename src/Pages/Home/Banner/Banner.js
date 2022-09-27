import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import Profile from '../../../Images/header-img.png';

import './banner.css';

const banner = () => {
    return (
        <div className="flexible-box my-2 container">
            <div className="hero-box-wrap">
                <div className="box-1">
                    <h4>Hi there!</h4>
                    <h1 className="text-primary">I'm</h1>
                    <h1>Iqbal <span className="text-danger">Hossain</span></h1>
                </div>

                <div>
                    <p>Hi, My name is Iqbal Hossain Raju. Welcome to my portfolio. I am a skilled web designer & developer. In 2022 I want to make myself more efficient and I am working towards that goal. Everyone will pray for me and those who will hire me are given below my CV and various demos.</p>
                    <button class="btn btn-danger"><a className="text-decoration-none text-white" href="#">Download CV</a></button>
                </div>

                <div className="social-media pt-2">
                    <h3>Follow me:</h3>
                    <div className="social-icons">
                        <li> <a href="http://"> <FontAwesomeIcon icon={faFacebook} /> </a> </li>
                        <li> <a href="http://"> <FontAwesomeIcon icon={faGithub} /> </a> </li>
                        <li> <a href="http://"> <FontAwesomeIcon icon={faInstagram} /> </a> </li>
                        <li> <a href="http://"> <FontAwesomeIcon icon={faLinkedin} /> </a> </li>
                    </div>
                </div>
            </div>
            <div className="box-2">
                <img className="img-fluid" src={Profile} alt="" />
            </div>
        </div>
    );
};

export default banner;