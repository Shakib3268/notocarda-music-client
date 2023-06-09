import React from 'react';
import logo from '../../assets/cover.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions = <>
    <Link to='/'><li><a>Home</a></li></Link>
    <Link><li><a>Instructor</a></li></Link>
    <Link><li><a>Classes</a></li></Link>
    <Link><li><a>Dashboard</a></li></Link>
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <Link><img src={logo} className='w-[150px]' alt="" srcset="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;