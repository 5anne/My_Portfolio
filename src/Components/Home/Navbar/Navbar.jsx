import React from 'react';
import { FaBars, FaBlogger, FaHome } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import iconImg from '../../../assets/botanical-capital-letter_53876-111467.jpg'
import '../Navbar/Navbar.css'
import { FaUser } from 'react-icons/fa6';
import { RiContactsBook3Fill } from 'react-icons/ri';
import { GrProjects } from 'react-icons/gr';
import { TbLogs } from 'react-icons/tb';
import { IoLinkSharp } from 'react-icons/io5';

const Navbar = () => {

    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/meals">Meals</NavLink>
        <NavLink to="/upcomingMeals">Upcoming Meals</NavLink>
    </>

    return (
        <div>
            <div className="py-4 fixed z-10 bg-gray-700 bg-opacity-40 flex justify-around items-center text-white  w-screen">
                {/* <div className="dropdown dropdown-bottom dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className=""><FaBars></FaBars></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-black rounded-box z-[1] w-60 p-2 shadow">
                        <li className="text-blue-800"><a>{links}</a></li>
                    </ul>
                </div> */}
                <div className='flex items-center gap-2'>
                    <img className='w-8 border-2 rounded-full' src={iconImg} alt="" />
                    <p className='cinzel text-xl font-bold'><span className='text-[#d36634]'>A</span>ny</p>
                </div>
                <div className="flex justify-center items-center gap-10 ">
                    <div className="tooltip tooltip-bottom" data-tip="Home">
                        <Link><button className="hover:text-[#d36634] text-xl"><FaHome></FaHome></button></Link>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="About">
                        <Link><button className="hover:text-[#d36634] text-lg"><FaUser></FaUser></button></Link>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Blogs">
                        <Link><button className="hover:text-[#d36634] text-xl"><TbLogs /></button></Link>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Projects">
                        <Link><button className="hover:text-[#d36634] text-lg"><GrProjects /></button></Link>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Contacts">
                        <Link><button className="hover:text-[#d36634] text-xl"><RiContactsBook3Fill /></button></Link>
                    </div>
                </div>
                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="border-2 border-[#355e3b] rounded-full hover:text-[#d36634] text-xl p-2"><IoLinkSharp /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;