import React from 'react';
import { ShieldCheck, FileText, Lock, User, Scale, AlertCircle } from 'lucide-react';
import Swal from 'sweetalert2';

const TermsAndConditions = () => {
    const sections = [
        {
            icon: FileText,
            title: "1. Acceptance of Terms",
            content: "Welcome to eTuitionBD. By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our services."
        },
        {
            icon: User,
            title: "2. User Eligibility & Conduct",
            content: "Users must provide accurate information. Tutors must possess the required qualifications. All users agree to maintain professional conduct, respect intellectual property, and not share personal contact information outside the platform."
        },
        {
            icon: Lock,
            title: "3. Privacy & Data Handling",
            content: "Your privacy is paramount. Personal data is handled according to our Privacy Policy. We use secure encryption to protect your information, and we do not sell your data to third parties."
        },
        {
            icon: Scale,
            title: "4. Disclaimers & Limitations",
            content: "eTuitionBD provides a platform to connect tutors and students. We do not guarantee specific educational outcomes. Our liability is limited to the maximum extent permitted by law."
        }
    ];

    const handleUnderstandAndAccept = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: 'Thank You ',
            showConfirmButton: false,
            timer: 2000,
            toast: true,
        });
    }


    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 py-10">
            {/* Main Wrapper with Max-Width 1400px */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Minimal Header Section */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 mb-8 py-12 px-6 text-center transition-all">
                    <ShieldCheck className="w-16 h-16 text-lime-500 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        Terms & Conditions
                    </h1>
                    <p className="mt-3 max-w-xl mx-auto text-base text-gray-600 dark:text-gray-400">
                        Please read our policies carefully to understand your rights and responsibilities on <span className='font-bold text-lime-600'>eTuitionBD</span>.
                    </p>
                    <div className="mt-6 inline-block bg-lime-50 dark:bg-slate-800 rounded-full px-6 py-2 border border-lime-200 dark:border-lime-900 shadow-inner">
                        <span className="text-sm text-lime-700 dark:text-lime-400 font-medium">Last Updated: May 10, 2026</span>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 hover:border-lime-300 dark:hover:border-lime-800 transition-all hover:shadow-xl group">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="p-3 bg-lime-100 dark:bg-slate-800 rounded-xl text-lime-600 group-hover:bg-lime-500 group-hover:text-white transition-colors">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {section.title}
                                    </h2>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                                    {section.content}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Acceptance Action Card */}
                <div className="bg-[#BCE955] dark:bg-[#BCE955] p-8 md:p-12 rounded-3xl text-center shadow-2xl">
                    <AlertCircle className="w-14 h-14 text-black mx-auto mb-6" />
                    <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Acknowledge to Continue</h3>
                    <p className="text-black mb-8 max-w-2xl mx-auto text-lg">
                        By using the eTuitionBD platform, you agree to abide by these terms. This ensures a safe and effective learning environment for everyone.
                    </p>
                    <button onClick={handleUnderstandAndAccept} className="bg-black hover:bg-gray-100 text-lime-600 font-bold py-4 px-14 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95 text-lg">
                        I Understand & Accept
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TermsAndConditions;