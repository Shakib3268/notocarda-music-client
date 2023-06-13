import React from 'react';

const AllClasses = ({item}) => {
    const{classname,image,instructoremail,instructorname,price,seats} = item || {}
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Class Name: {classname}</h2>
          <p>Instructor Name : {instructorname}</p>
          <p>Instructor Email : {instructoremail}</p>
          <p>Available Seat : {seats}</p>
          <p>price : ${price}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Select</button>
          </div>
        </div>
      </div>
    );
};

export default AllClasses;