import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Manageduser = () => {
    const {data : users = [],refetch} = useQuery(['users'],async () =>{
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <Helmet>
        <title>NotoCard || All User</title>
      </Helmet>
            <h2>{users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Istructor</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index) => <tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role === 'admin' ? 'admin' : <button className='btn btn-ghost bg-orange-500' onClick={() => handleMakeAdmin(user)}>Make Admin</button>}</td>
            <td>{user.role === 'instructor' ? 'instructor' : <button className='btn btn-ghost bg-blue-500'>Make instructor</button>}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Manageduser;