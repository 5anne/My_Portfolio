import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import '../Home/Home.css'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import reactImg from '../../assets/web_16260192.png';
import webDesImg from '../../assets/ux_1055666.png';
import webDevImg from '../../assets/software_15267855.png'

const Services = () => {
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
                    <div className="md:w-4/5 lg:w-3/5 mx-auto my-24">
                        <h1 className="text-3xl md:text-4xl font-bold cinzel">My Services</h1>
                        <p className='border-b-2 border-[#e9692c] w-1/4 mx-auto my-5'></p>
                        <p className="mb-5 playfair-display flex">
                            <span className='text-[#e9692c] text-xl'><RiDoubleQuotesL /></span>My goal is to provide a seamless web application for the users. The MERN path with the combination of the visually appealing web interface that I use to build a dynamic and functional web application. Prioritizing the client's ideas and expectations, I focus on problem-solving and creativity. Moreover, as a fellow of a team, I'm the collaborator respecting other's ideas and opinions.<span className='text-[#e9692c] text-xl'><RiDoubleQuotesR /></span>
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div className='border-2 p-4 rounded-xl space-y-3 text-start'>
                                <img className='w-12' src={webDevImg} alt="" />
                                <h1 className='font-bold text-xl playfair-display'>Web Development</h1>
                                <p>I follow the MERN path to build a web application and write reusable, maintainable, and clean code following the best practices.</p>
                            </div>
                            <div className='border-2 p-4 rounded-xl space-y-3 text-start'>
                                <img className='w-12' src={webDesImg} alt="" />
                                <h1 className='font-bold text-xl playfair-display'>Web Design</h1>
                                <p>I ensure to make simple user-friendly and responsive web applications keeping them uncluttered.</p>
                            </div>
                            <div className='border-2 p-4 rounded-xl space-y-3 text-start'>
                                <img className='w-12' src={reactImg} alt="" />
                                <h1 className='font-bold text-xl playfair-display'>React Projects</h1>
                                <p>I build websites using React focusing on dynamic functionalities and avoiding redundancy of similar code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;