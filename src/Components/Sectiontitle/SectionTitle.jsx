import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center'>
            <p className='text-3xl text-[#C25934] font-bold'>{subHeading}</p>
            <h3 className='text-5xl font-bold text-[#0C4B65]'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;