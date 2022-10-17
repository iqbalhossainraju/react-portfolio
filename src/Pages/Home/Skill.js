import React from 'react';
import skill from '../../assets/icon/skill.png';

const Skill = () => {
    return (
        <section style={{ background: `url(${skill})` }}>
            <h2 className="text-center font-bold text-2xl font-bold text-primary">Skill</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 uppercase justify-items-center">
                <div>
                    <ul class="steps steps-vertical">
                        <li class="step step-primary"><span className="text-secondary hover:text-accent font-bold text-xl">html
                            <div class="rating ml-3">
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" checked />
                            </div>
                        </span>
                        </li>

                        <li class="step step-primary"><span className="text-secondary hover:text-accent font-bold text-xl">css
                            <div class="rating ml-3">
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                            </div>
                        </span>
                        </li>

                        <li class="step step-primary"><span className="text-secondary hover:text-accent font-bold text-xl">bootstrap
                            <div class="rating ml-3">
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" checked />
                            </div>
                        </span>
                        </li>

                        <li class="step step-primary"><span className="text-secondary hover:text-accent font-bold text-xl">tailwind
                            <div class="rating ml-3">
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                            </div>
                        </span>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul class="steps steps-vertical">
                        <li class="step step-primary"><span className="text-secondary hover:text-accent font-bold text-xl">javaScript
                            <div class="rating ml-3">
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                            </div>
                        </span>
                        </li>

                        <li class="step step-primary"><span className="text-secondary hover:text-accent font-bold text-xl">react-js
                            <div class="rating ml-3">
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                            </div>
                        </span>
                        </li>

                        <li class="step step-primary"><span className="text-secondary hover:text-accent font-bold text-xl">node-js
                            <div class="rating ml-3">
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                            </div>
                        </span>
                        </li>

                        <li class="step step-primary"><span className="text-secondary hover:text-accent font-bold text-xl">mongodb
                            <div class="rating ml-3">
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" checked />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-primary" />
                            </div>
                        </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skill;