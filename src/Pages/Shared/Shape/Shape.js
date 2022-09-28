import React from 'react';
import './Shape.css';

const Shape = () => {
    return (
        <div className="Shape">
            <div className="waveShape">
                <div class="ocean">
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
            </div>

            <svg className="waveShape-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L40,213.3C80,203,160,181,240,186.7C320,192,400,224,480,208C560,192,640,128,720,101.3C800,75,880,85,960,122.7C1040,160,1120,224,1200,234.7C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
    );
};

export default Shape;