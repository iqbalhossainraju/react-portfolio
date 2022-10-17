import React from 'react';

const Shop = ({ shop }) => {
    const { img, name, price, description } = shop;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="shop" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    Name: {name}
                    <div class="badge badge-secondary">{price}taka</div>
                </h2>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-neutral">Size</div>
                    <div class="badge badge-neutral">M, L, XL</div>
                </div>
                <a class="btn btn-block text-white bg-gradient-to-r from-secondary to-primary font-blod hover:from-primary hover:to-secondary border-none" href="https://www.facebook.com/iqbalhossain04/posts/pfbid0hBU6HnvAHvrg9jzmcF1eHMYQDJ5FQz8CQaAysrRFxppAYZcGfLaTNemDZ9yn6THVl" target="_blank" rel="noreferrer">Buy on Facebook</a>
            </div>
        </div>
    );
};

export default Shop;