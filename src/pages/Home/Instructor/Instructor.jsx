import React from 'react';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const Instructor = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors')
        return res.data;
    })
    const instructores = instructors?.filter(allinstructor => allinstructor?.role === 'instructor');
    return (
        <div>
        <Helmet>
            <title>NotoCard Music/Instructors</title>
        </Helmet>
        <h1 className='text-center text-3xl text-bold mt-24'> NotoCard Music Academy All Instructors Here<span className='text-purple-500'>({instructores?.length})</span></h1>
    <div className='grid grid-cols-3 gap-10 mt-24 mb-24 px-8'>
        {
            instructores?.map(instructor => <div
               key={instructor?._id}
                className="card card-compact w-full bg-base-100 border border-purple-600 shadow drop-shadow-lg p-2">
                <img className='w-full h-96 rounded-lg' src={instructor?.image} alt="instrutor" />
                <div className="card-body">
                    <h2 className=" text-lg text-semibold font-sans">Instructor Name: {instructor?.name}</h2>
                    <p className=" text-lg text-semibold font-sans">Instructor Email: {instructor?.email}</p>
                </div>
            </div>)
        }
    </div>
    </div>
    );
};

export default Instructor;