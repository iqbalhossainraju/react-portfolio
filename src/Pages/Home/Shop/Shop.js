import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="container shop-items mt-3">
            <div className="row">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                    >
                    </Product>)
                }
            </div>
        </div>
    );
};

export default Shop;