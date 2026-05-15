import { useQuery } from '@tanstack/react-query';
import UseAuth from '../../../Hooks/UseAuth';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import {
    HiOutlineLocationMarker,
    HiOutlineCalendar,
    HiOutlineCurrencyBangladeshi,
    HiOutlineUser,
    HiOutlineAcademicCap,
    HiOutlineClock
} from 'react-icons/hi';
import moment from 'moment';
import Swal from 'sweetalert2';

const MyTuitions = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: myTuitions = [], refetch } = useQuery({
        queryKey: ['myTuitions', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myTuitions?email=${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email
    });

    const handleTuitionDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this tuition post!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#BCE955',
            cancelButtonColor: '#f43f5e',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            background: '#1e293b',
            color: '#fff',
            customClass: {
                popup: 'rounded-[2rem] border border-slate-700',
                confirmButton: 'rounded-xl px-6 py-3 text-black font-bold',
                cancelButton: 'rounded-xl px-6 py-3 font-bold'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("Attempting to delete ID:", id);

                axiosSecure.delete(`/myTuitions/${id}`)
                    .then(res => {
                        console.log("Full Server Response:", res.data);

                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your tuition post has been deleted.',        
                                icon: 'success',
                                background: '#1e293b',
                                color: '#fff',
                                customClass: {  
                                    popup: 'rounded-[2rem] border border-slate-700',
                                    confirmButton: 'rounded-xl px-6 py-3 text-black font-bold'
                                }
                            });
                        }

                    })  
                    .catch(err => {
                        console.error("Error deleting tuition:", err);
                    });
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        My Posted <span className="text-[#BCE955]">Tuitions</span>
                    </h2>
                </div>
                <div className="bg-[#BCE955]/10 px-6 py-3 rounded-2xl border border-[#BCE955]/20">
                    <span className="text-sm font-bold text-slate-800 dark:text-[#BCE955]">
                        Total Posts: {myTuitions.length}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {myTuitions.map((post) => (
                    <div
                        key={post._id}
                        className="group relative bg-white dark:bg-slate-900 rounded-[3rem] p-2 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(188,233,85,0.3)] border border-slate-100 dark:border-slate-800"
                    >
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-[2.8rem] p-8 h-full flex flex-col border border-transparent group-hover:border-[#BCE955]/30 transition-all">
                            <div className="flex justify-between items-start mb-8">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#BCE955]">Need Tutor</span>
                                    <h3 className="text-2xl font-black text-slate-800 dark:text-white group-hover:text-[#BCE955] transition-colors">
                                        {post.subject}
                                    </h3>
                                    <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                                        <HiOutlineAcademicCap /> Class: {post.class}
                                    </div>
                                </div>
                                <div className="size-14 bg-white dark:bg-slate-900 rounded-2xl shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                                    📚
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 grow">
                                <div className="flex items-center gap-4 p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-50 dark:border-slate-800">
                                    <div className="size-10 rounded-xl bg-[#BCE955]/10 flex items-center justify-center text-[#BCE955]">
                                        <HiOutlineUser className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold opacity-50">Student</p>
                                        <p className="text-sm font-bold">{post.name}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                        <HiOutlineLocationMarker className="text-[#BCE955]" />
                                        <span className="text-xs font-semibold">{post.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                        <HiOutlineCalendar className="text-[#BCE955]" />
                                        <span className="text-xs font-semibold">{post.schedule} Days/Week</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 col-span-2 mt-2 py-2 px-3 bg-white/50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                                        <HiOutlineClock className="text-[#BCE955]" />
                                        <span className="text-[11px] font-medium">
                                            Posted: {post.createdAt ? moment(post.createdAt).format('MMMM Do YYYY, h:mm a') : 'N/A'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto border-slate-200 dark:border-slate-700">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold opacity-50 uppercase">Budget</span>
                                        <span className="text-xl font-black text-slate-800 dark:text-white flex items-center">
                                            <HiOutlineCurrencyBangladeshi className="text-[#BCE955]" /> {post.budget}
                                        </span>
                                    </div>
                                    <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px] font-bold text-slate-500 border border-slate-200 dark:border-slate-700">
                                        #{post._id?.slice(-4)}
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex-[3] py-4 bg-slate-900 dark:bg-[#BCE955] text-white dark:text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg">
                                        View Details
                                    </button>
                                    <button
                                        onClick={() => handleTuitionDelete(post._id)}
                                        className="flex-1 bg-red-50 dark:bg-red-950/20 text-red-500 rounded-2xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all border border-red-100 dark:border-red-900/30"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyTuitions;