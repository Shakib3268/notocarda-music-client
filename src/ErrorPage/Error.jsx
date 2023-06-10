import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=''>
            <img className='ml-[400px] h-[400px]' src="https://i.ibb.co/qnmfXyf/oops-404-error-with-broken-robot-concept-illustration-114360-5529.jpg" alt="" />
            <Link to='/'><button className='btn ml-[500px] mt-4'>Back to homepage</button></Link>
        </div>
    );
};

export default Error;