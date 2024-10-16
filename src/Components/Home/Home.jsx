import React from 'react';
import Navbar from './Navbar/Navbar';
import { FaDownload, FaPhone } from 'react-icons/fa6';
import profileImg from '../../assets/IMG_20241012_024211.jpg';
import '../../Components/Home/Home.css'
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='min-h-svh'>
            <div className='bg-[#355e3b] '>
                <Navbar></Navbar>
                <div className='md:flex justify-between items-center px-8 md:px-14 py-28'>
                    <div className='text-white flex-1 space-y-4 playfair-display mb-10 md:mb-0'>
                        <h1 className='font-bold text-4xl '>Hi! I'm Tahamina Haq Any, a</h1>
                        <h1 className='font-bold text-4xl cinzel'><span className='text-[#e9692c]'>Frontend</span> Web Developer</h1>
                        <p className=''>I am a passionate front-end developer  with a foundation in JavaScript and web technologies such as HTML5, CSS3, and React.js. I specialize in crafting user-friendly web applications. My full-stack experience includes Back-End development using Node.js, Express.js, and MongoDB, enabling me to deliver complete web solutions.</p>
                        <div className='flex items-center gap-4'>
                            <a href="https://drive.google.com/file/d/18uP6PT0Thse5Rp0quXeC3PAXqWEYZIU0/view?usp=drive_link"><button className='btn bg-[#e9692c] font-bold text-white text-center border-none rounded-none flex items-center gap-2'><FaDownload></FaDownload> Download Resume</button></a>
                            <Link to='/contacts'><button className='btn bg-[#355e3b] font-bold text-white text-center border-2 border-[#e9692c] rounded-none flex items-center gap-2'><FaPhone></FaPhone> Contacts</button></Link>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img className='clip w-96 mx-auto border-8 border-[#e9692ccc]' src={profileImg} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;