import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import swal from 'sweetalert';
import contact from '../../assets/contact-from.png';
import contactBg from '../../assets/icon/contact-bg.gif';

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qlg55cg', 'template_qhuw2mp', form.current, '1bM5Pg78xAubCrI-2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        swal({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    };
    return (
        <section style={{ background: `url(${contactBg})`, backgroundSize: 'cover' }}>
            <h1 class="text-3xl text-center text-primary font-bold">Contact with me</h1>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={contact} class="sm:max-w-sm lg:max-w-lg rounded-lg" />

                    <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 justify-items-center mt-2'>
                        <input
                            name="user_name"
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            block
                        />
                        <br />

                        <input
                            name="user_email"
                            type="email"
                            placeholder="Email Address"
                            className="input input-bordered w-full max-w-xs"
                            block
                        />
                        <br />

                        <textarea
                            name="message"
                            className="textarea textarea-bordered w-full max-w-xs py-8 mb-5"
                            placeholder="Your Message"
                            block >
                        </textarea>
                        <br />

                        <input
                            className='btn btn-wide btn-primary text-white bg-gradient-to-r from-secondary to-primary font-blod hover:from-primary hover:to-secondary border-none'
                            type="submit"
                            value="submit" />
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contacts;