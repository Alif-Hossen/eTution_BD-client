import React, { useState } from 'react';
import loginImg from "../../assets/loginImg.png";
import { useForm } from 'react-hook-form'; 
import { NavLink } from 'react-router';
import { User, GraduationCap } from 'lucide-react'; 

const RoleCard = ({ selectedRole, currentRole, icon: Icon, title, setRole }) => (
    <div 
        onClick={() => setRole(currentRole)}
        className={`flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition w-1/2 justify-center 
        ${selectedRole === currentRole 
            ? 'bg-lime-500/20 border-2 border-lime-600 shadow-md' 
            : 'bg-gray-50 border border-gray-200 hover:bg-lime-500/10'
        }`}
    >
        <div className={`p-2 rounded-full ${selectedRole === currentRole ? 'bg-lime-600 text-white' : 'bg-gray-300 text-gray-700'}`}>
            <Icon className="w-6 h-6" />
        </div>
        <span className="text-lg font-semibold text-gray-800">{title}</span>
    </div>
);

const Login = () => {
    const [role, setRole] = useState('Student'); 

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = (data) => {
        const loginData = {
            ...data,
            role: role, 
        };
        
        console.log("Login Data:", loginData);

    };

    return (

        <div className='flex flex-col lg:flex-row justify-center max-w-[1400px] mx-auto my-10 p-4 lg:my-20'>
            
            <div className='w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0'>
                <img 
                    className=' w-full max-w-sm lg:max-w-lg h-auto object-contain rounded-xl shadow-lg' 
                    src={loginImg} 
                    alt="Login Illustration" 
                />
            </div>

            <div className="w-full lg:w-1/2 bg-white shadow-xl p-8 rounded-2xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>

                <div className="flex gap-4 justify-around mb-8 p-4 bg-gray-50 rounded-lg">
                    <RoleCard selectedRole={role} currentRole="Tutor" icon={User} title="Tutor" setRole={setRole} />
                    <RoleCard selectedRole={role} currentRole="Student" icon={GraduationCap} title="Student" setRole={setRole} />
                </div>


                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email/Phone */}
                    <div className="mb-4">
                        <label className="text-gray-700 font-medium">Email Your Email</label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            {...register("emailOrPhone", { required: "Email or Phone is required" })}
                            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 
                            focus:ring-lime-400 outline-none transition"
                        />
                        {errors.emailOrPhone && (
                            <p className="text-red-500 text-sm mt-1">{errors.emailOrPhone.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="text-gray-700 font-medium">Password </label>
                        <input
                            type="password"
                            placeholder="•••••••"
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 
                            focus:ring-lime-400 outline-none transition"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Forgot Password and Remember Me */}
                    <div className="flex justify-between items-center mb-6">
                        <label className="text-sm text-gray-600 flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <a href="#" className="text-sm text-lime-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>


                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#BCE955] text-black font-semibold 
                        py-3 rounded-xl shadow-lg hover:bg-lime-600 transition duration-300">
                        Login
                    </button>
                </form>

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