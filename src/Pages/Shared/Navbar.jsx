import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/logo.png"
import UseAuth from '../../Hooks/UseAuth';

const Navbar = () => {

    const {user, logOutUser} = UseAuth();

    const handleLogout = () => {
        logOutUser()
        .then(() => {   
            console.log("Logged out successfully");
        })
        .catch(error => {
            console.error("Logout Error:", error);
        });
    };

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
            <NavLink to="tutors"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                Tutors
            </NavLink>
        </li>
        <li>
            <NavLink to="tuitions"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                Tuitions
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
            <NavLink to="contact"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                Contact
            </NavLink>
        </li>

        <li>
            <NavLink to="privacy-policy"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                Privacy Policy
            </NavLink>
        </li>
        <li>
            <NavLink to="terms-and-conditions"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }>
                Terms And Condition
            </NavLink>
        </li>

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
                    <NavLink to="/" className="btn btn-ghost text-xl">
                        <img className='h-[60px] w-[60px]' src={logo} alt="" />
                        <p >e<span className='text-[#BCE955]'>Tuition</span>BD</p>
                    </NavLink>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {/* LOGIN BUTTON --> */}

            <div className="navbar-end">
                {
                    user ? 

                    <NavLink 
                        onClick={handleLogout}
                    to="/login" className="btn text-black  border-none rounded-3xl px-8 secondary">Log out</NavLink>
                     : 
                    <NavLink to="/login" className="btn text-black  border-none rounded-3xl px-8 secondary">Login</NavLink>
                }

                <Link to="/become-tutor" className="btn font-semibold text-black border-none rounded-3xl mx-2 px-8 bg-blue-600">Be a Tutor</Link>

            </div>
        </div>
    );
};

export default Navbar;
