import React from 'react';
import { useForm } from 'react-hook-form';
import postTuitionImg from "../../assets/postTuition.png";
// import { data } from 'react-router';

const PostTuition = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Tuition Data:", data);
        reset();
    };


    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white dark:bg-[#020617]">
            {/* Main Container: Mobile এ Column (Image first), Desktop এ Row (Form first) */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl w-full">
                
                {/* Image Section: মোবাইলে উপরে, ডেস্কটপে ডানে (Order-1 on Mobile, Order-2 on Desktop) */}
                <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
                    <img 
                        src={postTuitionImg} 
                        alt="Post Tuition" 
                        className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[550px] h-auto object-contain"
                    />
                </div>

                {/* Form Section: মোবাইলে নিচে, ডেস্কটপে বামে (Order-2 on Mobile, Order-1 on Desktop) */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-[#BCE955]/5">
                        <h2 className="text-3xl md:text-4xl font-black mb-8 text-slate-800 dark:text-white leading-tight">
                            Post Your <br />
                            <span className="text-[#BCE955]">Tuition Request</span>
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Class & Subject - Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Class / Grade</label>
                                    <input
                                        {...register("class", { required: true })}
                                        placeholder="e.g. Class 10"
                                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#BCE955] transition-all outline-none text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Subject</label>
                                    <input
                                        {...register("subject", { required: true })}
                                        placeholder="e.g. Mathematics"
                                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#BCE955] transition-all outline-none text-sm"
                                    />
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Your Location</label>
                                <input
                                    {...register("location", { required: true })}
                                    placeholder="e.g. Mirpur 10, Dhaka"
                                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#BCE955] transition-all outline-none text-sm"
                                />
                            </div>

                            {/* Schedule & Budget - Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Schedule (Days)</label>
                                    <input
                                        {...register("schedule", { required: true })}
                                        placeholder="3 days per week"
                                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#BCE955] transition-all outline-none text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Monthly Budget (৳)</label>
                                    <input
                                        type="number"
                                        {...register("budget", { required: true })}
                                        placeholder="5000"
                                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#BCE955] transition-all outline-none text-sm"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-4 mt-4 rounded-2xl bg-[#BCE955] text-black font-black uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(188,233,85,0.4)] hover:scale-[1.01] active:scale-[0.98] transition-all"
                            >
                                Post Tuition
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostTuition;