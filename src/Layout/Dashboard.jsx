import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
    // const isAdmin = true
    // const isInstructor= true
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    return (
        <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#0C4B65]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-[#0C4B65] text-base-content">
      {/* Sidebar content here */}
      {
        isAdmin? <>
        <li><NavLink>Managed Classes</NavLink></li>
      <li><NavLink to='/dashboard/manageduser'>Managed User</NavLink></li>
        </> : isInstructor? <>
        <li><NavLink>Add a Class</NavLink></li>
      <li><NavLink>My Classes</NavLink></li>
        </> : <>
        <li><NavLink to='/dashboard/myclass'>My Selected Class</NavLink></li>
      <li><NavLink>My Enrolled Class</NavLink></li>
      <li><NavLink>Payment</NavLink></li>
        </>
      }
       <div className="divider"></div>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink>InsTructor</NavLink></li>
       <li><NavLink>Classes</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;