import React, { useRef, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import '../Home/Home.css'
import { FaRightLong } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const emailIds = {
    service_id: import.meta.env.VITE_SERVICE_ID,
    template_id: import.meta.env.VITE_TEMPLATE_ID,
    public_key: import.meta.env.VITE_PUBLIC_KEY
}

const Contacts = () => {
    const form = useRef();
    const recipientEmail = 'b180501034@law.jnu.ac.bd';

    const handleClick = () => {
        const gmailUrl = `mailto:${recipientEmail}`;
        window.open(gmailUrl);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const { service_id, template_id, public_key } = emailIds;

        emailjs
            .sendForm(service_id, template_id, form.current, {
                publicKey: public_key,
            })
            .then(
                () => {
                    alert('Email has been sent successfully!');
                    console.log('SUCCESS!');
                },
                (error) => {
                    alert('Failed to send email', error.message);
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <Navbar></Navbar>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.postimg.cc/cJMR3T5P/abstract-business-professional-background-banner-design-multipurpose-1340-16859.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl md:text-4xl font-semibold text-center cinzel py-8 mt-16">Contact With Me</h1>
                        <div className="flex justify-center"><p className="border w-40 border-[#e9692c]"></p></div>
                        <div className="flex flex-col gap-8 mt-8">
                            <div className="h-full">
                                <form ref={form} onSubmit={sendEmail}>
                                    <input className="border-2 border-gray-500 rounded-lg p-2 my-2 w-full text-black"
                                        type="text"
                                        name='from_name'
                                        placeholder="Your Name"
                                        required />
                                    <input className="border-2 border-gray-500 rounded-lg p-2 my-2 w-full text-black"
                                        type="email"
                                        name='from_email'
                                        placeholder="Your Email"
                                        required />
                                    <input className="border-2 border-gray-500 rounded-lg p-2 my-2 w-full text-black"
                                        type="number"
                                        name='from_number'
                                        placeholder="Your Phone Number"
                                        required />
                                    <input className="border-2 border-gray-500 rounded-lg p-2 pb-28 my-2 w-full text-black"
                                        type="text"
                                        name='message'
                                        placeholder="Write Message"
                                        required />
                                    <button className="bg-cyan-950 px-4 py-2 flex justify-center items-center gap-3 text-white rounded-md w-full hover:bg-cyan-800">Let's Talk <FaRightLong></FaRightLong></button>
                                </form>
                            </div>
                            <div className="flex justify-center items-center gap-4 mb-16">
                                <a href='https://www.linkedin.com/in/tahamina-haq-any-2b6884194/' className='hover:text-[#d36634] text-2xl'><FaLinkedin></FaLinkedin></a>
                                <a href='https://github.com/5anne?tab=repositories' className='hover:text-[#d36634] text-2xl'><FaGithub></FaGithub></a>
                                <Link onClick={handleClick}><a className='hover:text-[#d36634] text-2xl'><MdMarkEmailUnread /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contacts;