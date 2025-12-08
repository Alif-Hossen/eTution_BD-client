import React, { useState } from 'react';
import loginImg from "../../assets/loginImg.png";
import { useForm } from 'react-hook-form'; 
import { NavLink } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { User, GraduationCap } from 'lucide-react'; 
const RoleCard = ({ selectedRole, currentRole, icon: Icon, title, setRole }) => (
    <div 
        onClick={() => setRole(currentRole)}
        className={`flex flex-col items-center space-y-2 p-4 rounded-xl cursor-pointer transition w-1/2 
        ${selectedRole === currentRole 
            ? 'bg-lime-500/20 border-2 border-lime-600 shadow-md' 
            : 'bg-gray-50 border border-gray-200 hover:bg-lime-500/10'
        }`}
    >
        <div className={`p-2 rounded-full ${selectedRole === currentRole ? 'bg-lime-600 text-white' : 'bg-gray-300 text-gray-700'}`}>
            <Icon className="w-6 h-6" />
        </div>
        <span className="text-md font-semibold text-gray-800">{title}</span>
    </div>
);


const Register = () => {
    const [role, setRole] = useState('Student');

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        setError, 
        clearErrors 
    } = useForm();

    const onSubmit = (data) => {
        if (!role) {
            setError("roleSelection", { type: "manual", message: "Please select your role (Tutor or Student)" });
            return;
        }
        
        clearErrors("roleSelection"); 

        const registrationData = {
            ...data,
            role: role, 
        };
        
        console.log("Registration Data:", registrationData);

    };

    return (
        <div className='flex flex-col lg:flex-row justify-center max-w-[1400px] mx-auto my-10 p-4 lg:my-20'>
            
            <div className='w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0'>
                <img 
                    className='w-full max-w-sm lg:max-w-lg h-auto object-contain rounded-xl shadow-lg' 
                    src={loginImg} 
                    alt="Register Illustration" 
                />
            </div>

            <div className="w-full lg:w-1/2 bg-white shadow-xl p-8 rounded-2xl border border-gray-100">

                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Your Account</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-4 justify-around mb-6 p-4 bg-gray-50 rounded-lg">
                        <RoleCard selectedRole={role} currentRole="Tutor" icon={User} title="Tutor" setRole={setRole} />
                        <RoleCard selectedRole={role} currentRole="Student" icon={GraduationCap} title="Student" setRole={setRole} />
                    </div>
                    {errors.roleSelection && (
                        <p className="text-red-500 text-sm mt-1 mb-4 text-center">{errors.roleSelection.message}</p>
                    )}

                    {/* Name */}
                    <div className="mb-4">
                        <label className="text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="John Wick"
                            {...register("name", { required: "Name is required" })}
                            className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-xl
                            placeholder-gray-600 text-black focus:ring-2 focus:ring-lime-400 outline-none transition"
                        />
                        {errors.name && (<p className="text-red-500 text-sm mt-1">{errors.name.message}</p>)}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="JohnWick@mail.com"
                            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                            className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-xl
                            placeholder-gray-600 text-black focus:ring-2 focus:ring-lime-400 outline-none transition"
                        />
                        {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="•••••••"
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                            className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-xl
                            placeholder-gray-600 text-black focus:ring-2 focus:ring-lime-400 outline-none transition"
                        />
                        {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                        <label className="text-gray-700 font-medium">Phone</label>
                        <input
                            type="tel"
                            placeholder="+880 1XXXXXXXXX"
                            {...register("phone", { required: "Phone number is required" })}
                            className="w-full mt-1 px-4 py-3 border border-gray-400 rounded-xl
                            placeholder-gray-600 text-black focus:ring-2 focus:ring-lime-400 outline-none transition"
                        />
                        {errors.phone && (<p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>)}
                    </div>

                    {/* Google Login Button */}
                    <button type="button" className="w-full rounded-2xl my-4 flex items-center justify-center space-x-2 bg-white text-black py-3 border border-gray-300 shadow-sm hover:bg-gray-50 transition">
                        <FcGoogle className="text-xl" />
                        <span className="font-semibold">Sign Up with Google</span>
                    </button>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#BCE955] text-black font-semibold 
                        py-3 rounded-xl shadow-lg hover:bg-lime-600 transition duration-300">
                        Register
                    </button>
                </form>

                {/* Login Link */}
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