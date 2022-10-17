import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../assets/icon/header-lines.svg';
import background2 from '../../assets/icon/home-banner-bg2.png';
import portfolio from '../../assets/portfolio.png';
import FocusButton from '../Shared/FocusButton';

const HomeBanner = () => {
    return (
        <section style={{ background: `url(${background2})`, backgroundSize: 'cover' }}>
            <div style={{ background: `url(${background})`, backgroundSize: 'cover' }}>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={portfolio} class="sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg" />
                        <div>
                            <h1 class="text-3xl font-bold">Hi There!</h1>
                            <h3 className='text-xl my-3 font-bold'>I'm,</h3>
                            <h2 className="text-4xl font-bold text-primary">Iqbal Hossain</h2>
                            <p class="py-6 font-bold text-accent">I'm a Web Designer & Developer!</p>
                            <FocusButton><Link to="/about">Learn More!</Link></FocusButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;