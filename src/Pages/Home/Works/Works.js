import React, { useEffect, useState } from 'react';
import Work from './Work';

const Works = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch(`works.json`)
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [])
    return (
        <div className="my-10">
            <h2 className="text-3xl text-center text-primary my-5">Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    works.map(work => <Work
                        key={work._id}
                        work={work}
                    ></Work>)
                }
            </div>
        </div>
    );
};

export default Works;