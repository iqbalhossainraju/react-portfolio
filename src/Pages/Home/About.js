import React from 'react';
import aboutBackground from '../../assets/icon/about-me.gif';
import portfolio from '../../assets/portfolio2.png';

const About = () => {
    const yearUpdate = new Date().getFullYear();
    return (
        <section style={{ background: `url(${aboutBackground})` }}>
            {/* <h2 className='text-3xl text-secondary text-center'>About Me</h2> */}
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={portfolio} class="sm:max-w-sm lg:max-w-lg rounded-lg" />
                    <div>
                        <h1 class="text-5xl font-bold text-primary uppercase">about me</h1>
                        <p class="py-6">Hi, My name is <span className="font-bold text-xl text-secondary">Iqbal Hossain Raju</span>. Welcome to my portfolio. I am a skilled web designer & developer. I have a good skill in JavaScript Programming Language.
                            I have a also good skill in <span className="font-bold text-secondary">HTML, CSS, Bootstrap, Tailwind</span>. In {yearUpdate} I want to make myself more efficient and I am working towards that goal. Everyone will pray for me and those who will hire me are given below my CV.</p>
                        <a className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary font-blod hover:from-primary hover:to-secondary border-none" href="own_cv.pdf" download="own_cv.pdf">download cv</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;