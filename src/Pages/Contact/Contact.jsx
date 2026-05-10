import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 py-16 px-4">
            {/* Main Wrapper - 1400px */}
            <div className="max-w-[1400px] mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                        Let’s <span className="text-[#BCE955]">Get in Touch</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have questions about eTuitionBD? Whether you are a student or a tutor, our team is here to help you 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    
                    {/* Left Side: Contact Information (2 Columns) */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-slate-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <MessageSquare className="text-[#BCE955]" /> Contact Details
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#BCE955]/10 rounded-xl">
                                        <Mail className="w-6 h-6 text-[#BCE955]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Us</p>
                                        <p className="text-lg font-semibold dark:text-white">support@etuitionbd.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#BCE955]/10 rounded-xl">
                                        <Phone className="w-6 h-6 text-[#BCE955]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Call Anytime</p>
                                        <p className="text-lg font-semibold dark:text-white">+880 1700-000000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#BCE955]/10 rounded-xl">
                                        <MapPin className="w-6 h-6 text-[#BCE955]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Our Office</p>
                                        <p className="text-lg font-semibold dark:text-white">Dhanmondi, Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extra Info Card */}
                        <div className="bg-[#BCE955] p-8 rounded-[2.5rem] shadow-lg text-black relative overflow-hidden group">
                            <Clock className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-black mb-2">Support Hours</h3>
                            <p className="font-medium opacity-90">Monday - Friday: 9 AM - 8 PM</p>
                            <p className="font-medium opacity-90">Saturday - Sunday: 10 AM - 6 PM</p>
                            <div className="mt-4 flex items-center gap-2 font-bold underline cursor-pointer">
                                <Globe className="w-4 h-4" /> Visit Help Center
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form (3 Columns) */}
                    <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 dark:border-slate-800">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold dark:text-gray-300 ml-1">Your Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter name" 
                                    className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-[#BCE955] outline-none transition-all dark:text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold dark:text-gray-300 ml-1">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-[#BCE955] outline-none transition-all dark:text-white"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-2 space-y-2">
                                <label className="text-sm font-bold dark:text-gray-300 ml-1">Subject</label>
                                <select className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-[#BCE955] outline-none transition-all dark:text-white">
                                    <option>General Inquiry</option>
                                    <option>Tutor Support</option>
                                    <option>Student Support</option>
                                    <option>Payment Issue</option>
                                </select>
                            </div>
                            <div className="col-span-1 md:col-span-2 space-y-2">
                                <label className="text-sm font-bold dark:text-gray-300 ml-1">Message</label>
                                <textarea 
                                    rows="5" 
                                    placeholder="How can we help you?" 
                                    className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-[#BCE955] outline-none transition-all dark:text-white"
                                ></textarea>
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <button className="w-full bg-[#BCE955] hover:bg-[#a8d14b] text-black font-black py-4 rounded-2xl transition-all shadow-lg hover:shadow-[#BCE955]/30 flex items-center justify-center gap-2 group">
                                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

                {/* FAQ Link / Bottom Section */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 dark:text-gray-400">
                        Prefer social media? Find us on <span className="text-[#BCE955] font-bold cursor-pointer hover:underline">Facebook</span>, <span className="text-[#BCE955] font-bold cursor-pointer hover:underline">LinkedIn</span>, or <span className="text-[#BCE955] font-bold cursor-pointer hover:underline">Instagram</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;