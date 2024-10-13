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
                <div className='flex justify-between items-center px-14 py-28'>
                    <div className='text-white flex-1 space-y-4 playfair-display'>
                        <h1 className='font-bold text-4xl '>Hi! I'm Tahamina Haq Any, a</h1>
                        <h1 className='font-bold text-4xl cinzel'><span className='text-[#e9692c]'>Frontend</span> Web Developer</h1>
                        <p className=''>I am a self-motivated and enthusiastic junior web developer looking for an internship opportunity to apply my knowledge and experience of 10 months in Web Development. I am eager to contribute to a collaborative team and learn from experienced developers.</p>
                        <div className='flex items-center gap-4'>
                            <button className='btn bg-[#e9692c] font-bold text-white text-center border-none rounded-none flex items-center gap-2'><FaDownload></FaDownload> Download Resume</button>
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