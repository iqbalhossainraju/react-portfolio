import { faBootstrap, faCodepen, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import SkillConcept from "../../../Images/programming-concept.png";
import "./Skill.css";

const Skill = () => {
    return (
        <div className="container">
            <div className="section-title  mt-5">
                <h1>SK<span className="text-danger">I</span>LL</h1>
                <p className="undermark"></p>
            </div>

            <div className="row skill-details">
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={SkillConcept} alt="" />
                </div>
                <div className="col-md-6 col-12 font-sizing">
                    <h2>Hi! Myself <p className="text-danger">Iqbal Hossain</p> I'm a ReactJS Front-End Developer.</h2>
                    <h5>I have a good skill in JavaScript Programming Language.</h5>

                    <h5>I have a also good skill in <span>HTML<FontAwesomeIcon className="text-danger" icon={faHtml5} />
                    </span>, <span>CSS<FontAwesomeIcon className="text-danger" icon={faCss3Alt} /></span>, <span>Bootstrap<FontAwesomeIcon className="text-primary" icon={faBootstrap} /></span>, <span>Tailwind<FontAwesomeIcon className="text-info" icon={faCodepen} /></span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Skill;