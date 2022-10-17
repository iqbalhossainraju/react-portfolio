import React, { useEffect, useState } from 'react';
import Shop from './Shop';

const Shops = () => {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setShops(data))
    }, []);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-12">
                {
                    shops.map(shop => <Shop
                        key={shop._id}
                        shop={shop}
                    ></Shop>)
                }
            </div>
        </div>
    );
};

export default Shops;