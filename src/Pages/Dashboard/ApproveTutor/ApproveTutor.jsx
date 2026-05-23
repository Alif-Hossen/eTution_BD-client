import React from 'react';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { Check, Trash2, Mail, Phone, BookOpen, GraduationCap, Clock, CheckCircle2, XCircle } from 'lucide-react';
import Swal from 'sweetalert2';

const ApproveTutor = () => {
    const axiosSecure = UseAxiosSecure();

    const { data: tutors = [], refetch } = useQuery({
        queryKey: ['tutors', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/tutors');
            return res.data;
        }
    });

    const handleAccept = (id) => {
        const updatedDoc = { status: 'Approved' };

        Swal.fire({
            title: 'Approve Tutor?',
            text: "This tutor's status will be updated to Approved.",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#BCE955',
            cancelButtonColor: '#0b131f',
            confirmButtonText: 'Yes, Approve!',
            background: '#111c2a',
            color: '#fff',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/tutors/${id}`, updatedDoc)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch(); 
                            Swal.fire({
                                title: 'Approved!',
                                text: 'Tutor application has been accepted.',
                                icon: 'success',
                                confirmButtonColor: '#BCE955',
                                background: '#111c2a',
                                color: '#fff',
                            });
                        }
                    })
                    .catch(err => console.error(err));
            }
        });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Reject Application?',
            text: "Are you sure you want to cancel this tutor request?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f43f5e',
            cancelButtonColor: '#0b131f',
            confirmButtonText: 'Yes, Cancel!',
            background: '#111c2a',
            color: '#fff',
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedDoc = { status: 'Rejected' };
                axiosSecure.patch(`/tutors/${id}`, updatedDoc)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch(); 
                            Swal.fire({
                                title: 'Cancelled!',
                                text: 'Tutor application has been rejected.',
                                icon: 'success',
                                confirmButtonColor: '#f43f5e',
                                background: '#111c2a',
                                color: '#fff',
                            });
                        }
                    })
                    .catch(err => console.error(err));
            }
        });
    };

    const getStatusBadge = (status) => {
        const currentStatus = status || 'Pending';
        
        if (currentStatus === 'Approved') {
            return (
                <span className="text-[11px] uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-emerald-500/20 w-fit mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Approved
                </span>
            );
        }
        
        if (currentStatus === 'Rejected') {
            return (
                <span className="text-[11px] uppercase tracking-widest text-rose-400 font-bold bg-rose-500/10 px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-rose-500/20 w-fit mb-2">
                    <XCircle className="w-3.5 h-3.5" /> Rejected
                </span>
            );
        }
        
        return (
            <span className="text-[11px] uppercase tracking-widest text-[#BCE955] font-bold bg-[#BCE955]/10 px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-[#BCE955]/20 w-fit mb-2">
                <Clock className="w-3.5 h-3.5 animate-pulse" /> Pending
            </span>
        );
    };

    return (
        <div className="p-6 bg-[#090d16] min-h-screen text-white">
            <div className="max-w-7xl mx-auto mb-10 flex justify-between items-center border-b border-gray-800/60 pb-5">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Tutor <span className="text-[#BCE955]">Applications</span></h2>
                    <p className="text-gray-400 mt-1 text-sm">Review and manage tutor access status across the platform</p>
                </div>
                <span className="bg-[#BCE955]/10 text-[#BCE955] font-semibold px-4 py-2 rounded-full border border-[#BCE955]/20 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Total Requests: {tutors.length}
                </span>
            </div>

            {tutors.length === 0 ? (
                <div className="text-center py-20 bg-[#111c2a]/30 rounded-[32px] border border-dashed border-gray-800 max-w-2xl mx-auto mt-10">
                    <GraduationCap className="w-16 h-16 mx-auto text-gray-700 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-400">All Caught Up!</h3>
                    <p className="text-gray-500 text-sm mt-1">No applications found at the moment.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tutors.map((tutor) => (
                        <div 
                            key={tutor._id} 
                            className={`bg-[#111c2a] border rounded-[32px] p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:scale-[1.02] group ${
                                tutor.status === 'Approved' ? 'hover:border-emerald-500/50 border-gray-800/50' :
                                tutor.status === 'Rejected' ? 'hover:border-rose-500/50 border-gray-800/50' :
                                'hover:border-gray-700 border-gray-800/50'
                            }`}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-5">
                                    <div className="overflow-hidden max-w-[75%]">
                                        {getStatusBadge(tutor.status)}
                                        <h3 className={`text-2xl font-bold text-white truncate transition-colors duration-300 ${
                                            tutor.status === 'Approved' ? 'group-hover:text-emerald-400' :
                                            tutor.status === 'Rejected' ? 'group-hover:text-rose-400' :
                                            'group-hover:text-[#BCE955]'
                                        }`}>
                                            {tutor.name}
                                        </h3>
                                    </div>
                                    <div className={`p-3.5 bg-[#0b131f] rounded-2xl border border-gray-800/80 shadow-inner shadow-black/40 ${
                                        tutor.status === 'Approved' ? 'text-emerald-400' :
                                        tutor.status === 'Rejected' ? 'text-rose-400' :
                                        'text-[#BCE955]'
                                    }`}>
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="bg-[#0b131f] rounded-2xl p-4 mb-6 border border-gray-900 flex items-center space-x-3.5 shadow-inner shadow-black/40">
                                    <div className={`w-11 h-11 rounded-full bg-[#1e293b] flex items-center justify-center font-bold text-base border border-gray-800 ${
                                        tutor.status === 'Approved' ? 'text-emerald-400' :
                                        tutor.status === 'Rejected' ? 'text-rose-400' :
                                        'text-[#BCE955]'
                                    }`}>
                                        {tutor.name ? tutor.name.charAt(0).toUpperCase() : 'T'}
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">APPLIED FOR</span>
                                        <span className="text-sm font-semibold text-gray-300 block truncate">{tutor.role || 'Tutor'}</span>
                                    </div>
                                </div>

                                <div className="space-y-3.5 text-xs text-gray-400 mb-6 px-1">
                                    <div className="flex items-center space-x-3.5">
                                        <Mail className="w-4 h-4 text-gray-600 shrink-0" />
                                        <span className="truncate hover:text-gray-200 transition-colors">{tutor.email}</span>
                                    </div>
                                    <div className="flex items-center space-x-3.5">
                                        <Phone className="w-4 h-4 text-gray-600 shrink-0" />
                                        <span className="hover:text-gray-200 transition-colors">{tutor.phone || 'No phone number'}</span>
                                    </div>
                                    <div className="flex items-center space-x-3.5 border-t border-gray-800/50 pt-3.5 mt-2">
                                        <BookOpen className={`w-4 h-4 shrink-0 ${
                                            tutor.status === 'Approved' ? 'text-emerald-400/70' :
                                            tutor.status === 'Rejected' ? 'text-rose-400/70' :
                                            'text-[#BCE955]/70'
                                        }`} />
                                        <span className="truncate font-medium text-gray-300">
                                            {tutor.subject || 'Subject: Not Specified'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3.5 pt-2">
                                <button
                                    onClick={() => handleAccept(tutor._id)}
                                    className="flex-1 bg-[#BCE955] hover:bg-[#a6d043] text-black font-extrabold py-4 px-4 rounded-xl transition-all duration-300 text-xs uppercase tracking-widest shadow-lg shadow-[#BCE955]/5 active:scale-95"
                                >
                                    Accept
                                </button>
                                <button
                                    onClick={() => handleDelete(tutor._id)}
                                    className="p-3.5 bg-[#1c1218] hover:bg-rose-950/30 text-rose-500 hover:text-rose-400 rounded-xl border border-rose-950/60 transition-all duration-300 shadow-md active:scale-95"
                                    title="Cancel Request"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ApproveTutor;