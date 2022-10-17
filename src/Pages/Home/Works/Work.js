import React from 'react';
import { Link } from 'react-router-dom';
import FocusButton from '../../Shared/FocusButton';

const Work = ({ work }) => {
    const { img, name, description, links } = work;
    return (
        <div class="card card-compact lg:max-w-lg shadow-xl">
            <img src={img} alt="" />
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <FocusButton><Link to={links} target="_blank">visit website</Link></FocusButton>
            </div>
        </div>
    );
};

export default Work;