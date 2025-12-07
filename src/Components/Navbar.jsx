import React from 'react';
import { NavLink } from 'react-router';
import logo from "../assets/logo.png"

const Navbar = () => {

    const links = <>
        <li>
            <NavLink to="/"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                Tuitions
            </NavLink>
        </li>
        <li>
            <NavLink to="/"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                Tutors
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
            <NavLink to="aboutUs"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                Contact
            </NavLink>
        </li>
        <li><NavLink to="">Privacy Policy</NavLink></li>
        <li><NavLink to="">Terms And Condition</NavLink></li>
    </>

    return (
        <div className="
            text-white navbar bg-[#1F462D] 
            my-4 max-w-[1400px] rounded-3xl mx-auto shadow-sm
            sticky top-3 z-50
            backdrop-blur-lg bg-[#1F462D]/90
        ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow bg-[#1F462D] text-white">
                        {links}
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='h-[60px] w-[60px]' src={logo} alt="" />
                    <NavLink to="/" className="btn btn-ghost text-xl">e<span className='text-[#BCE955]'>Tuition</span>BD</NavLink>
                </div>
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
