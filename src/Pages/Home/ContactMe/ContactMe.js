import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import swal from 'sweetalert';
import contactImage from '../../../Images/contact-me.png';
import './ContactMe.css';


const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qlg55cg', 'template_qhuw2mp', form.current, '1bM5Pg78xAubCrI-2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        swal("Email Send!", "Thank You For Your Email!", "success");
    };
    return (
        <div>
            <div className="container">
                <div className="section-title mt-5">
                    <h1>CONT<span className="text-danger">A</span>CT ME</h1>
                    <p className="undermark"></p>
                </div>

                <div className="row contacts">
                    <div className="col-md-6 col-12">
                        <img className="img-fluid" src={contactImage} alt="contactImage" />
                    </div>

                    <div className="col-md-6 col-12">
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <label for="validationTooltip01">Name</label>
                                <input className="form-control" id="validationTooltip01" placeholder="Enter Your Name" type="text" name="user_name" required />
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                            </div>

                            <div className="my-4">
                                <label for="validationTooltip02">Email</label>
                                <input className="form-control" id="validationTooltip02" placeholder="Enter Your Email" type="email" name="user_email" required />
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                            </div>

                            <div>
                                <label for="validationTooltip03">Message</label>
                                <textarea className="form-control" id="validationTooltip03" placeholder="Enter Your Message" name="message" required />
                                <div className="valid-tooltip">
                                    Looks good!
                                </div>
                            </div>

                            <input className="my-4 btn contactMe" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;