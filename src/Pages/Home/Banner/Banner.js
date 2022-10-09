import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import swal from "sweetalert";
import Profile from '../../../Images/header-img.png';
import Shape from "../../Shared/Shape/Shape";

import './banner.css';

const banner = () => {

    const downloadCv = (e) => {
        if (downloadCv !== "https//") {
            swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="https://www.facebook.com/iqbalhossainraju04/">Connected me on Facebook</a>'
            });
        }
        //  else if (downloadCv === "https//") {
        //     swal({
        //         position: 'top-end',
        //         icon: 'success',
        //         title: 'Download Successfully!',
        //         showConfirmButton: false,
        //         timer: 1500
        //     })
        // }
    }

    return (
        <div className="mt-4">
            <div className="container">
                <div class="row flexible-box">
                    <div class="col-md-6 col-12">
                        <div className="box-1">
                            <h4>Hi there!</h4>
                            <h1 className="text-primary">I'm</h1>
                            <h1>Iqbal <span className="text-danger">Hossain</span></h1>
                        </div>

                        <div>
                            <p>Hi, My name is Iqbal Hossain Raju. Welcome to my portfolio. I am a skilled web designer & developer. In 2022 I want to make myself more efficient and I am working towards that goal. Everyone will pray for me and those who will hire me are given below my CV and various demos.</p>
                            <button onClick={downloadCv} class="btn btn-danger py-3 my-3"><a className="text-decoration-none text-white" href="https//">Download CV</a></button>
                        </div>

                        <div className="social-media pt-2">
                            <div className="social-box-1">
                                <h5>Follow me:</h5>
                            </div>
                            <div className="social-box-2 d-flex">
                                <li> <a href="https://www.facebook.com/iqbalhossainraju04/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faFacebook} /> </a> </li>
                                <li> <a href="https://github.com/iqbalhossainraju" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /> </a> </li>
                                <li> <a href="https://www.instagram.com/iqbalhossain.official1/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faInstagram} /> </a> </li>
                                <li> <a href="https://www.linkedin.com/in/iqbal-hossain-b70836228/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /> </a> </li>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-12 order-1">
                        <img className="img-fluid" src={Profile} alt="" />
                    </div>
                </div>
            </div>
            <Shape></Shape>
        </div>
    );
};

export default banner;