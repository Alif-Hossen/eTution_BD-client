import React from 'react';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { Check, Trash2, Mail, Phone, BookOpen, GraduationCap } from 'lucide-react';
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
        Swal.fire({
            title: 'Approve Tutor?',
            text: "This tutor will be active on the platform.",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#BCE955',
            cancelButtonColor: '#111827',
            confirmButtonText: 'Yes, Approve!',
            background: '#111827',
            color: '#fff',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/tutors/approve/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: 'Approved!',
                                text: 'Tutor application has been accepted.',
                                icon: 'success',
                                confirmButtonColor: '#BCE955',
                            });
                        }
                    })
                    .catch(err => console.error(err));
            }
        });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You are going to reject this tutor application!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#111827',
            confirmButtonText: 'Yes, Delete!',
            background: '#111827',
            color: '#fff',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/tutors/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Tutor has been removed.',
                                icon: 'success',
                                confirmButtonColor: '#ef4444',
                            });
                        }
                    })
                    .catch(err => console.error(err));
            }
        });
    };

    return (
        <div className="p-6 bg-[#090d16] min-h-screen text-white">
            <div className="max-w-7xl mx-auto mb-10 flex justify-between items-center border-b border-gray-800 pb-5">
                <div>
                    <h2 className="text-3xl font-bold">Pending <span className="text-[#BCE955]">Tutors</span></h2>
                    <p className="text-gray-400 mt-1 text-sm">Review and manage new tutor registration requests</p>
                </div>
                <span className="bg-[#BCE955]/10 text-[#BCE955] font-semibold px-4 py-2 rounded-full border border-[#BCE955]/20 text-sm">
                    Pending: {tutors.length}
                </span>
            </div>

            {tutors.length === 0 ? (
                <div className="text-center py-20 bg-[#111827]/40 rounded-3xl border border-dashed border-gray-800 max-w-2xl mx-auto">
                    <GraduationCap className="w-14 h-14 mx-auto text-gray-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-400">No Pending Applications</h3>
                    <p className="text-gray-500 text-sm mt-1">Everything is caught up! No tutors waiting for approval.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tutors.map((tutor) => (
                        <div key={tutor._id} className="bg-[#111c2a] border border-gray-800/60 rounded-[32px] p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                            
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-wider text-[#BCE955] font-bold block mb-1">NEED APPROVAL</span>
                                        <h3 className="text-2xl font-bold text-white truncate max-w-[180px]">{tutor.name}</h3>
                                    </div>
                                    <div className="p-3 bg-[#1e293b]/60 rounded-xl border border-gray-800 text-[#BCE955]">
                                        <GraduationCap className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="bg-[#0b131f] rounded-2xl p-4 mb-5 border border-gray-900 flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-gray-300 font-semibold text-sm">
                                        {tutor.name ? tutor.name.charAt(0).toUpperCase() : 'T'}
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="text-[10px] text-gray-500 block uppercase font-semibold">ROLE</span>
                                        <span className="text-sm font-medium text-gray-300 block truncate">{tutor.role || 'Tutor'}</span>
                                    </div>
                                </div>

                                <div className="space-y-3 text-xs text-gray-400 mb-6 px-1">
                                    <div className="flex items-center space-x-3">
                                        <Mail className="w-4 h-4 text-gray-600 shrink-0" />
                                        <span className="truncate">{tutor.email}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Phone className="w-4 h-4 text-gray-600 shrink-0" />
                                        <span>{tutor.phone || 'No phone number'}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <BookOpen className="w-4 h-4 text-gray-600 shrink-0" />
                                        <span className="truncate">{tutor.subject || 'Subject: N/A'}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 pt-2">
                                <button
                                    onClick={() => handleAccept(tutor._id)}
                                    className="flex-1 bg-[#BCE955] hover:bg-[#a6d043] text-black font-bold py-3.5 px-4 rounded-xl transition-all duration-300 text-xs uppercase tracking-wider shadow-lg shadow-[#BCE955]/10"
                                >
                                    Accept
                                </button>
                                <button
                                    onClick={() => handleDelete(tutor._id)}
                                    className="p-3.5 bg-[#1c1218] hover:bg-red-950/40 text-red-500 hover:text-red-400 rounded-xl border border-red-950 transition-all duration-300 shadow-md"
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