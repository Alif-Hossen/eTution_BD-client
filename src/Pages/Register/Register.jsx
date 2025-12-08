import React from 'react';
import loginImg from "../../assets/loginImg.png"
import { NavLink } from 'react-router';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    return (
        <div className='xl:flex justify-between max-w-[1400px] mx-auto my-20'>
            <div>
                <img className='xl:max-w-[900px] max-w-[400px] xl:max-h-[700px] mx-4' src={loginImg} alt="" />
            </div>

            <div className="w-full md:w-1/2 bg-white shadow-xl p-8 rounded-2xl border border-gray-200">

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back</h2>

                {/* Name */}
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Name</label>
                    <input
                        type="text"
                        placeholder="John Wick"
                        className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-xl
                        placeholder-gray-600 text-black focus:ring-2 focus:ring-lime-400 outline-none transition"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="example@mail.com"
                        className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-xl
                        placeholder-gray-600 text-black focus:ring-2 focus:ring-lime-400 outline-none transition"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Password</label>
                    <input
                        type="password"
                        placeholder="•••••••"
                        className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-xl
                        placeholder-gray-600 text-black focus:ring-2 focus:ring-lime-400 outline-none transition"
                    />
                </div>

                {/* Role Selection */}
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Role Selection</label>
                    <select className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-xl
                      text-black focus:ring-2 focus:ring-lime-400 outline-none transition">
                        <option value="Student">Student</option>
                        <option value="Tutor">Tutor</option>
                    </select>
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label className="text-gray-700 font-medium">Phone</label>
                    <input
                        type="text"
                        placeholder="+880 1513151416"
                        className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-xl
                        placeholder-gray-600 text-black focus:ring-2 focus:ring-lime-400 outline-none transition"
                    />
                </div>

                <button className="w-full rounded-2xl my-4 btn bg-white text-black border-[#e5e5e5]">
                    <FcGoogle />
                    Login with Google
                </button>

                {/* Login Button */}
                <button
                    className="w-full bg-[#BCE955] text-black font-semibold 
                    py-3 rounded-xl shadow hover:opacity-90 transition">
                    Register
                </button>

                {/* Signup Link */}
                <p className="text-center mt-5 text-gray-700">
                    Have an account?{" "}
                    <NavLink to="/login" className="text-lime-600 font-semibold hover:underline">
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;
