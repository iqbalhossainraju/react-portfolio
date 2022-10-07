import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <div className="container">
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