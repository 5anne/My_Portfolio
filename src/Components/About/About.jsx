import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import '../Home/Home.css'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.postimg.cc/cJMR3T5P/abstract-business-professional-background-banner-design-multipurpose-1340-16859.jpg)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="lg:w-3/5 mx-auto p-4">
                        <h1 className="text-3xl md:text-4xl font-bold cinzel mt-16 md:mt-0">Why I'm the Right Fit</h1>
                        <p className='border-b-2 border-[#e9692c] w-1/4 mx-auto my-5'></p>
                        <p className="mb-5 playfair-display flex">
                            <span className='text-[#e9692c] text-xl'><RiDoubleQuotesL /></span>My technical skills in HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and MongoDB combined with my problem-solving abilities and creative mindset allow me to deliver qualitative solutions. I am a collaborative team player who thrives on learning and continuously strives to improve skills. I am confident that I can contribute significantly to your team and help achieve your project goals.<span className='text-[#e9692c] text-xl'><RiDoubleQuotesR /></span>
                        </p>
                        <div className='flex flex-col md:flex-row items-start gap-40 md:gap-80 lg:gap-96 mb-16'>
                            <div className="dropdown dropdown-open">
                                <div tabIndex={0} role="button" className="playfair-display text-2xl border-b-2 border-[#e9692c]">Skills</div>
                                <ul tabIndex={0} className="dropdown-content menu text-start playfair-display w-[350px] md:w-[400px]">
                                    <li>Languages: JavaScript, C, C++ </li>
                                    <li>Frontend: HTML, CSS, React.js, Next.js </li>
                                    <li>Backend: Node.js, Express.js, MongoDB </li>
                                    <li>Frameworks: Tailwind CSS </li>
                                    <li>Tools: Visual Studio Code, Dev Tool, React Dev Tool, Git </li>
                                    <li>Deployment: Netlify, Firebase, and Vercel </li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-open mb-24 md:mb-0">
                                <div tabIndex={0} role="button" className="playfair-display text-2xl border-b-2 border-[#e9692c]">Education</div>
                                <ul tabIndex={0} className="dropdown-content menu text-start playfair-display w-[350px] md:w-[400px]">
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