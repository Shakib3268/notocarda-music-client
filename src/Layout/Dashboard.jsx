import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
      <li><NavLink to='/dashboard/myclass'>My Selected Class</NavLink></li>
      <li><NavLink>My Enrolled Class</NavLink></li>
      <li><NavLink>Payment</NavLink></li>
       <div className="divider"></div>
       <li><NavLink>Home</NavLink></li>
       <li><NavLink>InsTructor</NavLink></li>
       <li><NavLink>Classes</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;