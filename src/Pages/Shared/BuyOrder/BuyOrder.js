import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import swal from 'sweetalert';
import PaymentGateway from '../../../Images/icon/payment-gateway.png';
import './BuyOrder.css';

const BuyOrder = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t59hzfa', 'template_61dpsz3', form.current, '1bM5Pg78xAubCrI-2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        swal({
            position: 'top-end',
            icon: 'success',
            title: 'Thank You! contact You as very soon!',
            showConfirmButton: false,
            timer: 1500
        })
    };
    return (
        <div className="container">
            <div className="row buyOrder my-5" >

                <div className="col-lg-6 col-md-6 col-12">
                    <img className="img-fluid" src={PaymentGateway} alt="PaymentGateway" />
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                    <form ref={form} onSubmit={sendEmail}>
                        <>
                            <label htmlFor="name">Enter your Full Name</label><br />
                            <input className="form-control" type="text" name="user_name" id="name" placeholder="Enter your Full Name" required />
                        </>
                        <br />
                        <>
                            <label htmlFor="email">Enter your Email</label> <br />
                            <input className="form-control" type="email" name="user_email" id="email" placeholder="Enter your Email" required />
                        </>
                        <br />
                        <>
                            <label htmlFor="number">Enter your Phone Number</label> <br />
                            <input className="form-control" type="number" name="user_phone" id="phone" placeholder="Enter your Phone Number" required />
                        </>
                        <br />
                        <>
                            {/* <img className="img-fluid" src={AllPaymentGateway} alt="" /> */}
                            <p className="bkash">Bkash: 01869175104</p>
                            <label htmlFor="transactionsId">Transactions Id</label>
                            <input className="form-control" type="text" name="message" id="transactionsId" placeholder="Enter your transactionsId" required />
                        </>
                        <input className="btn btn-danger form-control my-3" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyOrder;