import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {


    const links = <>

        <li className=''>
            <NavLink to="/"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="aboutUs"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink to="">Privacy Policy</NavLink>
        </li>
        <li>
            <NavLink to="">Terms And Condition</NavLink>
        </li>
        {/* <li><NavLink></NavLink></li> */}
    </>


    return (
        <div className="text-white navbar bg-[#1F462D] my-4 max-w-[1400px] rounded-3xl mx-auto shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">eTuition BD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to="login" className="btn text-black hover:text-yellow-500 border-none rounded-3xl px-8 secondary">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;