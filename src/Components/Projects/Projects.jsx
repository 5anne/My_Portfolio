import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import projectOne from '../../assets/Screenshot (11).png';
import projectTwo from '../../assets/Screenshot (12).png';
import projectThree from '../../assets/Screenshot (13).png';
import '../Projects/Projects.css';
import { FaRightLong } from 'react-icons/fa6';

const Projects = () => {
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
                    <div className="">
                        <h1 className="cinzel text-4xl font-bold mt-28">Featured Projects</h1>
                        <div className="flex justify-center"><p className="border w-40 border-[#e9692c] mt-6 mb-16"></p></div>
                        <div className="flex justify-evenly items-start gap-6 mb-16">
                            <div className="card glass w-96">
                                <figure>
                                    <img
                                        src={projectOne}
                                        alt="car!" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Groove Real Estate Inc.</h2>
                                    <p>This is a website where a user can find relevant real estaste properties under an umbrella and book them. </p>
                                    <p className='text-start font-bold font-serif text-[#0d3838]'>Features:</p>
                                    <ol type='a' className='text-start'>
                                        <li>Login and Register</li>
                                        <li>Dynamic Page title</li>
                                        <li>Private Route set up</li>
                                    </ol>
                                    <div className="card-actions justify-evenly">
                                        <button className="btn bg-[#0d3838] border-none rounded-none text-white"><a href="https://groove-real-estate-44a4b.web.app/">Live link</a></button>
                                        <button className="btn bg-[#0d3838] border-none rounded-none text-white"><a href="https://github.com/5anne/B9A9-Groove-Real-Estate?tab=readme-ov-file">Source code</a></button>
                                        <button className="btn bg-[#0d3838] border-none rounded-none text-white"><a href="https://github.com/5anne/B9A9-Groove-Real-Estate?tab=readme-ov-file">Server code</a></button>
                                    </div>
                                </div>
                            </div>
                            <div className="card glass w-96">
                                <figure>
                                    <img
                                        src={projectTwo}
                                        alt="car!" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Clay Pot</h2>
                                    <p>Clay Pot is a website of ceramics and pottery collection where a user can purchase classic items and manage their personal profile.</p>
                                    <p className='text-start font-bold font-serif text-[#0d3838]'>Features:</p>
                                    <ol type='a' className='text-start'>
                                        <li>Single Page Application</li>
                                        <li>Dark/Light theme toggle</li>
                                        <li>'Update' and 'Delete' functionlities</li>
                                    </ol>
                                    <div className="card-actions justify-evenly">
                                        <button className="btn bg-[#0d3838] border-none rounded-none text-white"><a href="https://clay-pot-cba02.web.app/">Live link</a></button>
                                        <button className="btn bg-[#0d3838] border-none rounded-none text-white"><a href="https://github.com/5anne/B9A10-Ceramics-And-Pottery-Client?tab=readme-ov-file">Source code</a></button>
                                        <button className="btn bg-[#0d3838] border-none rounded-none text-white"><a href="https://github.com/5anne/B9A10-Ceramics-And-Pottery-Server">Server code</a></button>
                                    </div>
                                </div>
                            </div>
                            <div className="card glass w-96">
                                <figure>
                                    <img
                                        src={projectThree}
                                        alt="car!" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Chakri Bazar.com</h2>
                                    <p>In this website a user can find, add, update and delete jobs of any categories. It is basically focued on CRUD opertions.</p>
                                    <p className='text-start font-bold font-serif text-[#0d3838]'>Features:</p>
                                    <ol type='a' className='text-start'>
                                        <li>CRUD operations</li>
                                        <li>Toggle Theme</li>
                                        <li>Update application of Added jobs</li>
                                    </ol>
                                    <div className="card-actions justify-evenly">
                                        <button className="btn bg-[#0d3838] border-none rounded-none text-white"><a href="https://chakri-bazar-8e75f.web.app/">Live link</a></button>
                                        <button className="btn bg-[#0d3838] border-none rounded-none text-white"><a href="https://github.com/5anne/B9A11-Chakri-Bazar-Client?tab=readme-ov-file">Source code</a></button>
                                        <button className="btn bg-[#0d3838] border-none rounded-none text-white"><a href="https://github.com/5anne/B9A11-Chakri-Bazar-Server">Server code</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mb-16'>
                            <button className='btn cinzel bg-[#355e3b] font-bold text-white text-center border-2 border-[#e9692c] rounded-none'><a className='flex items-center gap-2' href="https://github.com/5anne?tab=repositories">More Projects <FaRightLong></FaRightLong></a></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;