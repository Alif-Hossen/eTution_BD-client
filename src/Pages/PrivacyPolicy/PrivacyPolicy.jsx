import React from 'react';
import { Lock, Eye, Database, ShieldAlert, Bell, Globe } from 'lucide-react';
import { NavLink } from 'react-router';

const PrivacyPolicy = () => {
    const policies = [
        {
            icon: Eye,
            title: "Information Collection",
            content: "We collect personal information such as your name, email address, and contact details when you register as a Tutor or Student on eTuitionBD. This helps us provide a personalized experience."
        },
        {
            icon: Database,
            title: "How We Use Data",
            content: "Your data is used to facilitate tutor-student matching, process payments, and send important service updates. We analyze usage patterns to improve our platform's functionality."
        },
        {
            icon: ShieldAlert,
            title: "Data Protection",
            content: "We implement industry-standard security measures, including SSL encryption, to protect your personal information from unauthorized access, disclosure, or alteration."
        },
        {
            icon: Globe,
            title: "Third-Party Sharing",
            content: "eTuitionBD does not sell your personal data. We only share information with trusted partners (like payment gateways) necessary to provide our services, or when required by law."
        },
        {
            icon: Bell,
            title: "Your Rights & Updates",
            content: "You have the right to access, update, or delete your account information at any time. We may update this policy periodically, and we will notify you of significant changes via email."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 py-16 px-4">
            {/* Main Wrapper - 1400px */}
            <div className="max-w-[1400px] mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block p-4 bg-[#BCE955]/20 rounded-2xl mb-4">
                        <Lock className="w-12 h-12 text-[#BCE955]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Your trust is our priority. Learn how we handle and protect your personal information at <span className="font-bold text-[#BCE955]">eTuitionBD</span>.
                    </p>
                </div>

                {/* Policy Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {policies.map((policy, index) => {
                        const Icon = policy.icon;
                        return (
                            <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col items-start group">
                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl mb-6 group-hover:bg-[#BCE955] transition-colors duration-300">
                                    <Icon className="w-8 h-8 text-[#BCE955] group-hover:text-black" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {policy.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {policy.content}
                                </p>
                            </div>
                        );
                    })}

                    {/* Support Contact Card */}
                    <div className="lg:col-span-1 bg-[#BCE955] p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center shadow-lg">
                        <ShieldAlert className="w-12 h-12 text-black mb-4" />
                        <h3 className="text-2xl font-black text-black mb-2">Have Questions?</h3>
                        <p className="text-black/80 mb-6 font-medium">
                            If you have any concerns regarding your privacy, our support team is here to help.
                        </p>
                        <NavLink to="/contact" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                            Contact Support
                        </NavLink>
                    </div>
                </div>

                {/* Bottom Footer Info */}
                <div className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                        Last Modified: May 10, 2026 • © eTuitionBD - All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;