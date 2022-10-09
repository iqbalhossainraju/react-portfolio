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
                            <label htmlFor="name">Enter The Product Name You choice :</label><br />
                            <input className="form-control" type="text" name="user_product" id="product_name" placeholder="Example: Amgo Bari Feni" required />
                        </>
                        <br />
                        <>
                            <label htmlFor="name">Enter your Full Name :</label><br />
                            <input className="form-control" type="text" name="user_name" id="name" placeholder="Example: Iqbal Hossain" required />
                        </>
                        <br />
                        <>
                            <label htmlFor="email">Enter your Email :</label> <br />
                            <input className="form-control" type="email" name="user_email" id="email" placeholder="Example: iqbalhossain@example.com" required />
                        </>
                        <br />
                        <>
                            <label htmlFor="number">Enter your Phone Number :</label> <br />
                            <input className="form-control" type="number" name="user_phone" id="phone" placeholder="Example: 01869175104" required />
                        </>
                        <br />

                        <>
                            <label htmlFor="size">Enter your Size :</label> <br />
                            <input className="form-control" type="text" name="user_size" id="size" placeholder="Example: M, L, XL" required />
                        </>
                        <br />
                        <>
                            {/* <img className="img-fluid" src={AllPaymentGateway} alt="" /> */}
                            <p className="bkash">Bkash: 01590096242</p>
                            <label htmlFor="transactionsId">Transactions Id :</label>
                            <input className="form-control" type="text" name="message" id="transactionsId" placeholder="Bkash transactionsId" required />
                        </>
                        <input className="btn btn-danger form-control my-3" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyOrder;