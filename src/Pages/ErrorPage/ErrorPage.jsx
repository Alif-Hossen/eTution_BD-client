import React from 'react';
import errorImg from "../../assets/404 error with a tired person-pana.png"
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <img className='h-[600px] w-[900px] mx-auto my-8' src={errorImg} alt="" />
            <div className="text-center mb-8">
                <NavLink
                    to="/"
                    className="mb-8  btn secondary text-black rounded-2xl mx-auto"
                >
                    Back To Home
                </NavLink>
            </div>

        </div>
    );
};

export default ErrorPage;