import React from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import SectionTitle from '../../../Components/Sectiontitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';

const PopularInstructor = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors')
        return res.data;
    })
    const instructores = instructors?.filter(allinstructor => allinstructor?.role === 'instructor');
    const popularInstructors = instructores.slice(0, 6);
    return (
        <div className='lg:px-8 px-1'>
           <SectionTitle subHeading='NotoCard Music Academy' heading='Most Popular Instrucctor'></SectionTitle>
            <div className='grid lg:grid-cols-3 gap-10 mt-24 mb-24'>
                {
                    popularInstructors?.map(singleInstructor => <div
                          key={singleInstructor?._id}
                        className="card card-compact w-full bg-base-100 border border-purple-600 shadow drop-shadow-lg p-2">
                        <img className='w-full h-96 rounded-lg' src={singleInstructor?.image} alt="instrutor" />
                        <div className="card-body">
                            <h2 className=" text-lg text-semibold font-sans">Instructor Name: {singleInstructor?.name}</h2>
                            <p className=" text-lg text-semibold font-sans">Instructor Email: {singleInstructor?.email}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;