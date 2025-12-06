import React from 'react';
import loginImg from "../../assets/loginImg.png"
import { NavLink } from 'react-router';
const Login = () => {
    return (
        <div className='flex justify-between max-w-[1400px] mx-auto my-20 '>
            <div>
                <img className='max-w-[900px] max-h-[500px] mx-4 ' src={loginImg} alt="" />
            </div>
            <div className="w-full md:w-1/2 bg-white shadow-xl p-8 rounded-2xl border border-gray-100">

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back</h2>

                {/* Email */}
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="example@mail.com"
                        className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 
              focus:ring-lime-400 outline-none transition"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Password</label>
                    <input
                        type="password"
                        placeholder="•••••••"
                        className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 
              focus:ring-lime-400 outline-none transition"
                    />
                </div>

                {/* Forgot Password */}
                <div className="text-right mb-4">
                    <a href="#" className="text-sm text-lime-600 hover:underline">
                        Forgot password?
                    </a>
                </div>

                {/* Login Button */}
                <button
                    className="w-full bg-gradient-to-r from-lime-300 to-lime-500 text-black font-semibold 
            py-3 rounded-xl shadow hover:opacity-90 transition">
                    Login
                </button>

                {/* Signup Link */}
                <p className="text-center mt-5 text-gray-700">
                    Don’t have an account?{" "}
                    <NavLink to="/register" className="text-lime-600 font-semibold hover:underline">
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;