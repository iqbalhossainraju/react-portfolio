import React from 'react';
import educationBackground from '../../../assets/education-bg.jpg';

const Education = ({ education }) => {
    const { name, institute, passing_year, subject, gpa } = education;
    return (
        <section >
            <div class="card lg:max-w-lg shadow-xl image-full">
                <figure><img src={educationBackground} alt="Shoes" /></figure>
                <div class="card-body text-center">
                    <h2 class="font-bold uppercase text-white">name: {name}</h2>
                    <h3 class="uppercase font-bold text-white">institution: {institute}</h3>
                    <h4 class="uppercase font-bold text-white">Subject: {subject}</h4>
                    <h4 class="uppercase font-bold text-white">Passing year: {passing_year}</h4>
                    <h4 class="uppercase font-bold text-white">gpa: {gpa}</h4>
                </div>
            </div>
        </section>
    );
};

export default Education;