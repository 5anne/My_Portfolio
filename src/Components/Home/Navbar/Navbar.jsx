import React from 'react';
import { FaGithub, FaHome, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import iconImg from '../../../assets/botanical-capital-letter_53876-111467.jpg'
import '../../Home/Home.css'
import { FaUser } from 'react-icons/fa6';
import { RiContactsBook3Fill } from 'react-icons/ri';
import { GrProjects } from 'react-icons/gr';
import { TbLogs } from 'react-icons/tb';
import { IoLinkSharp } from 'react-icons/io5';
import { MdMarkEmailUnread } from 'react-icons/md';

const Navbar = () => {
    const recipientEmail = 'b180501034@law.jnu.ac.bd';

    const handleClick = () => {
        const gmailUrl = `mailto:${recipientEmail}`;
        window.open(gmailUrl);
    };

    return (
        <div>
            <div className="py-4 fixed z-10 bg-gray-700 bg-opacity-40 flex justify-around items-center text-white  w-screen">
                <div className='flex items-center gap-2'>
                    <img className='w-8 border-2 rounded-full' src={iconImg} alt="" />
                    <p className='cinzel text-xl font-bold'><span className='text-[#d36634]'>A</span>ny</p>
                </div>
                <div className="flex justify-center items-center gap-4 md:gap-10 ">
                    <div className="tooltip tooltip-bottom" data-tip="Home">
                        <Link to='/'><button className="hover:text-[#d36634] text-xl"><FaHome></FaHome></button></Link>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="About">
                        <Link to='/about'><button className="hover:text-[#d36634] text-lg"><FaUser></FaUser></button></Link>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Services">
                        <Link to='/services'><button className="hover:text-[#d36634] text-xl"><TbLogs /></button></Link>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Projects">
                        <Link to='/projects'><button className="hover:text-[#d36634] text-lg"><GrProjects /></button></Link>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Contacts">
                        <Link to='/contacts'><button className="hover:text-[#d36634] text-xl"><RiContactsBook3Fill /></button></Link>
                    </div>
                </div>
                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="border-2 border-[#355e3b] rounded-full hover:text-[#d36634] text-xl p-2"><IoLinkSharp /></div>
                    <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] shadow text-xl gap-6">
                        <a href='https://www.linkedin.com/in/tahamina-haq-any-2b6884194/' className='hover:text-[#d36634] pl-1 pt-4'><FaLinkedin></FaLinkedin></a>
                        <a href='https://github.com/5anne?tab=repositories' className='hover:text-[#d36634] pl-1'><FaGithub></FaGithub></a>
                        <Link onClick={handleClick} className='hover:text-[#d36634] pl-1'><a><MdMarkEmailUnread /></a></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;