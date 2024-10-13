import React from 'react'
import iconImg from '../../../assets/botanical-capital-letter_53876-111467.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-black text-white rounded p-10">
            <div className='flex justify-center items-center gap-2 border-b-2 border-[#e9692c] pb-4 w-1/2 mx-auto'>
                <img className='w-8 border-2 rounded-full' src={iconImg} alt="" />
            </div>
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">About</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Projects</a>
                <a className="link link-hover">Contacts</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a className='hover:text-[#d36634] text-xl'><FaLinkedin></FaLinkedin></a>
                    <a className='hover:text-[#d36634] text-xl'><FaGithub></FaGithub></a>
                    <a className='hover:text-[#d36634] text-xl'><MdMarkEmailUnread /></a>
                </div>
            </div>
            <aside className='border-b-2 border-[#e9692c] pb-4 w-1/2 mx-auto'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Tahamina Haq Any</p>
            </aside>
        </footer>
    );
};

export default Footer;