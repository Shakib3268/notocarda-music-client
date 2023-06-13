import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllClasses from './AllClasses';

const Classes = () => {
    const apps = useLoaderData()
    const [filtData,setFiltData]=useState([])
    useEffect(() =>{
        const filtered = apps.filter(item => item.status === 'aproved')
        setFiltData(filtered)
       },[apps])
    return (
        <div>
            <div className='grid grid-cols-3 gap-4 mt-8 mb-6'>
            {
                filtData.map(item => <AllClasses key={item._id} item={item}></AllClasses>)
            }
            </div>
        </div>
    );
};

export default Classes;