import React from 'react'
import iconImg from '../../../assets/botanical-capital-letter_53876-111467.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-black text-white rounded p-10">
            <div className='flex justify-center items-center gap-2 border-b-2 border-[#e9692c] pb-4 w-1/2 mx-auto'>
                <img className='w-8 border-2 rounded-full' src={iconImg} alt="" />
            </div>
            <div className="grid grid-flow-col gap-4">
                <Link to='/about'><a className="link link-hover">About</a></Link>
                <Link to='/blogs'><a className="link link-hover">Services</a></Link>
                <Link to='/projects'><a className="link link-hover">Projects</a></Link>
                <Link to='/contacts'><a className="link link-hover">Contacts</a></Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.linkedin.com/in/tahamina-haq-any-2b6884194/' className='hover:text-[#d36634] text-xl'><FaLinkedin></FaLinkedin></a>
                    <a href='https://github.com/5anne?tab=repositories' className='hover:text-[#d36634] text-xl'><FaGithub></FaGithub></a>
                    <Link to='/contacts' className='hover:text-[#d36634]'><a className='text-xl'><MdMarkEmailUnread /></a></Link>
                </div>
            </div>
            <aside className='border-b-2 border-[#e9692c] pb-4 w-[60%] mx-auto'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Tahamina Haq Any</p>
            </aside>
        </footer>
    );
};

export default Footer;