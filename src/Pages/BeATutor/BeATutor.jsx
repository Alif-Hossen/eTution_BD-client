import { useForm } from 'react-hook-form';
import postTuitionImg from "../../assets/BeATutor.png";
import UseAuth from '../../Hooks/UseAuth';

const BeATutor = () => {
    // const { user } = UseAuth(); 
    
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log("Submitting Tutor Data:", data);
        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white dark:bg-[#020617]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl w-full">
                
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[550px]  flex items-center justify-center  dark:border-slate-700">
                        <img src={postTuitionImg} alt="Be a Tutor" />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-[#BCE955]/5">
                        <h2 className="text-3xl md:text-4xl font-black mb-8 text-slate-800 dark:text-white leading-tight">
                            Start Journey as a <br />
                            <span className="text-[#BCE955]">Premium Tutor</span>
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Full Name</label>
                                    <input
                                        type="text"
                                        // ২. এখানে register যোগ করতে হবে
                                        {...register("name", { required: true })}
                                        placeholder="Enter your name"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#BCE955] text-slate-800 dark:text-white outline-none text-sm font-medium transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Email Address</label>
                                    <input
                                        type="email"
                                        // ৩. এখানেও register যোগ করতে হবে
                                        {...register("email", { required: true })}
                                        placeholder="Enter your email"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#BCE955] text-slate-800 dark:text-white outline-none text-sm font-medium transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Qualifications</label>
                                <input
                                    {...register("qualifications", { required: true })}
                                    placeholder="e.g. B.Sc in Software Engineering"
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#BCE955] transition-all outline-none text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Experience</label>
                                    <input
                                        {...register("experience", { required: true })}
                                        placeholder="e.g. 2 Years"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#BCE955] transition-all outline-none text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Expected Salary (৳)</label>
                                    <input
                                        type="number"
                                        {...register("salary", { required: true })}
                                        placeholder="e.g. 10000"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-[#BCE955] transition-all outline-none text-sm"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4.5 mt-2 rounded-2xl bg-[#BCE955] text-black font-black uppercase tracking-[0.2em] hover:shadow-[0_10px_25px_rgba(188,233,85,0.3)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeATutor;