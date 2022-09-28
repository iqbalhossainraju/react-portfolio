import React from 'react';
import SkillConcept from "../../../Images/skill-concept.png";
import "./Skill.css";

const Skill = () => {
    return (
        <div className="container">
            <div className="section-title mt-3">
                <h1>SK<span className="text-danger">I</span>LL</h1>
                <p className="undermark"></p>
            </div>

            <div className="row">
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={SkillConcept} alt="" />
                </div>
                <div className="col-md-6 col-12">

                </div>
            </div>
        </div>
    );
};

export default Skill;