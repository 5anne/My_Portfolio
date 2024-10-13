import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import '../About/About.css'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.postimg.cc/cJMR3T5P/abstract-business-professional-background-banner-design-multipurpose-1340-16859.jpg)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-3/5 mx-auto">
                        <h1 className="text-4xl font-bold cinzel">Why I'm the Right Fit</h1>
                        <p className='border-b-2 border-[#e9692c] w-1/4 mx-auto my-5'></p>
                        <p className="mb-5 playfair-display flex">
                            <span className='text-[#e9692c] text-xl'><RiDoubleQuotesL /></span>As a dedicated web developer with [number] years of experience, I am passionate about crafting innovative and user-friendly web applications. My strong technical skills in [list of technologies] combined with my problem-solving abilities and creative mindset allow me to deliver high-quality solutions. I am a collaborative team player who thrives on learning and continuously strives to improve my skills. I am confident in my ability to contribute significantly to your team and help achieve your project goals.<span className='text-[#e9692c] text-xl'><RiDoubleQuotesR /></span>
                        </p>
                        <div className='flex items-start gap-96'>
                            <div className="dropdown dropdown-open">
                                <div tabIndex={0} role="button" className="playfair-display text-2xl border-b-2 border-[#e9692c]">Skills</div>
                                <ul tabIndex={0} className="dropdown-content menu text-start playfair-display w-[400px]">
                                    <li>Languages: JavaScript </li>
                                    <li>Frontend: HTML, CSS, React.js </li>
                                    <li>Backend: Node.js, Express.js, MongoDB </li>
                                    <li>Frameworks: Tailwind CSS </li>
                                    <li>Tools: Visual Studio Code, Dev Tool, React Dev Tool, GitHub </li>
                                    <li>Deployment: Netlify, Firebase, and Vercel </li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-open">
                                <div tabIndex={0} role="button" className="playfair-display text-2xl border-b-2 border-[#e9692c]">Education</div>
                                <ul tabIndex={0} className="dropdown-content menu text-start playfair-display w-[400px]">
                                    <li>Bachelor of Laws (LL.B), Law (2019 - 2022)</li>
                                    <li>Jagannath University</li>
                                    <li>CGPA: 3.40/4</li>
                                    <li>Professional Certification: Complete Web Development</li>
                                    <li>Institute: Programming Hero</li>
                                    <li>Year: 2024</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;