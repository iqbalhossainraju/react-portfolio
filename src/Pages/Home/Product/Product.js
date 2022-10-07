import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { image, name, price } = product;
    const navigate = useNavigate();

    const navigateBuyOrder = e => {
        navigate('/BuyOrder')
    }
    return (
        <div>
            <div className="product">
                <img src={image} alt="" />
                <h3>Name: {name}</h3>
                <h3>Price: {price} taka</h3>
                <button className="btn btn-outline-danger" onClick={navigateBuyOrder}>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;