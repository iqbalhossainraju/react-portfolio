import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Explore from '../Explore/Explore';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skill></Skill>
            <Explore></Explore>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;