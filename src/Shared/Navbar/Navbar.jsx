import React, { useContext } from "react";
import logo from "../../assets/cover.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { BsPersonCircle } from 'react-icons/bs';
import { Helmet } from "react-helmet-async";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  const navOptions = (
    <>
      <Link to="/">
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to="instructor">
        <li>
          <a>Instructor</a>
        </li>
      </Link>
      <Link to="classes">
        <li>
          <a>Classes</a>
        </li>
      </Link>
      <Link to="/dashboard/myclasses">
        <li>
          <a>Dashboard</a>
        </li>
      </Link>
    </>
  );
  return (
    <div>
      <Helmet>
        <title>NotoCard || Home</title>
      </Helmet>
      <div className="navbar z-10 bg-opacity-40 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link>
            <img src={logo} className="w-[150px]" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user?.photoURL ? (
            <div className="flex justify-center items-center">
              <div className="avatar">
                <div className="w-11 rounded-full">
                  <img src={user.photoURL} title={user.displayName} />
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="btn ml-3 bg-[#1ed8f0]  hover:bg-[#1bc2d8]"
              >
                Log out
              </button>
            </div>
          ) : (
            <Link className="btn bg-[#1ed8f0]  hover:bg-[#1bc2d8]" to="/login">
              <BsPersonCircle />
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
