import React from 'react';
import errImg from '../../assets/3747371.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center w-[500px] mx-auto'>
                <img src={errImg} alt="" />
            </div>
            <p className='text-center text-2xl'>Page Not Found</p>
            <div className='flex justify-center items-center mt-2'>
                <Link to='/'>Go Back <button className='btn'>Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;