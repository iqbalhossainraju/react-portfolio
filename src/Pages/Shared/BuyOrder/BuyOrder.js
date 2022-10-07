import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import BdPaymentGateway from '../../../Images/icon/bd-payment-gateway.png';
import PaymentGateway from '../../../Images/icon/payment-gateway.png';
import './BuyOrder.css';

const BuyOrder = () => {
    return (
        <div className="container">
            <div className="row buyOrder my-5" >

                <div className="col-lg-6 col-md-6 col-12">
                    <img className="img-fluid" src={PaymentGateway} alt="PaymentGateway" />
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                    >
                        <Form.Control name="firstName" type="text" placeholder="Enter Your First Name" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                    >
                        <Form.Control name="lastName" type="text" placeholder="Enter Your Last Name" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Mobile Number"
                        className="mb-3"
                    >
                        <Form.Control name="phone" type="number" placeholder="example@0186..." />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control name="email" type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <div>
                        <div className="payment-icon py-3">
                            <img className="img-fluid" src={BdPaymentGateway} alt="BdPaymentGateway" />
                        </div>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Bkash Trans. ID"
                            className="mb-3"
                        >
                            <Form.Control name="transId" type="text" placeholder="example@0186..." />
                        </FloatingLabel>
                    </div>

                    <button className="btn btn-danger form-control">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default BuyOrder;