import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { image, name, price } = product;
    const navigate = useNavigate();

    const navigateBuyOrder = e => {
        navigate('/BuyOrder')
    }
    return (
        <div className="product col-sm-12 col-md-6 col-lg-4 g-3 mb-5">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <p>Price: ৳ {price}</p>
                    <Card.Text>
                        <p>Cotton Cloth</p>
                        <p>100% Comfortable</p>
                        <p>Size: M,L,XL</p>
                    </Card.Text>
                    <Button className="btn btn-danger" onClick={navigateBuyOrder}><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Buy Now </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;