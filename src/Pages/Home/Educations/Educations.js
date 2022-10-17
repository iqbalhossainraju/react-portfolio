import React, { useEffect, useState } from 'react';
import educationBackground2 from '../../../assets/education-bg-2.jpg';
import Education from './Education';

const Educations = () => {
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        fetch(`educations.json`)
            .then(res => res.json())
            .then(data => setEducations(data))
    }, []);

    return (
        <div className="mt-10" style={{ background: `url(${educationBackground2})`, backgroundSize: 'cover' }}>
            <h2 className="text-3xl text-center text-primary my-5">Education Qualifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-12">
                {
                    educations.map(education => <Education
                        key={education._id}
                        education={education}
                    ></Education>)
                }
            </div>
        </div>
    );
};

export default Educations;