import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container copyright">
            &copy; {new Date().getFullYear()} Copyright:{' '} <span class="text-danger">Iqbal Hossain</span>
        </div>
    );
};

export default Footer;