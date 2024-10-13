import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import '../Home/Home.css'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import reactImg from '../../assets/web_16260192.png';
import webDesImg from '../../assets/ux_1055666.png';
import webDevImg from '../../assets/software_15267855.png'

const Blogs = () => {
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
                            <span className='text-[#e9692c] text-xl'><RiDoubleQuotesL /></span>As a dedicated web developer with [number] years of experience, I am passionate about crafting innovative and user-friendly web applications. My strong technical skills in [list of technologies] combined with my problem-solving abilities and creative mindset allow me to deliver high-quality solutions. I am a collaborative team player who thrives on learning and continuously strives to improve my skills. I am confident in my ability to contribute significantly to your team and help achieve your project goals.<span className='text-[#e9692c] text-xl'><RiDoubleQuotesR /></span>
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div className='border-2 p-4 rounded-xl space-y-3 text-start'>
                                <img className='w-12' src={webDevImg} alt="" />
                                <h1 className='font-bold text-xl playfair-display'>Web Development</h1>
                                <p>I ensure to make a web application using MERN.</p>
                            </div>
                            <div className='border-2 p-4 rounded-xl space-y-3 text-start'>
                                <img className='w-12' src={webDesImg} alt="" />
                                <h1 className='font-bold text-xl playfair-display'>Web Design</h1>
                                <p>I ensure to make user-frienly and responsive web application.</p>
                            </div>
                            <div className='border-2 p-4 rounded-xl space-y-3 text-start'>
                                <img className='w-12' src={reactImg} alt="" />
                                <h1 className='font-bold text-xl playfair-display'>React Projects</h1>
                                <p>I build website using React which make the website smooth and fast.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;