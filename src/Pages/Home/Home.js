import React from 'react';
import About from './About';
import Contacts from './Contacts';
import Educations from './Educations/Educations';
import HomeBanner from './HomeBanner';
import Skill from './Skill';
import Works from './Works/Works';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <About />
            <Skill />
            <Educations />
            <Works />
            <Contacts />
        </div>
    );
};

export default Home;