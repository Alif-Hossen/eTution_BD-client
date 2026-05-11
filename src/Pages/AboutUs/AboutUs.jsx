import React from 'react';
import { Target, Users, Heart, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 py-16 px-4">
            {/* Main Wrapper - 1400px */}
            <div className="max-w-[1400px] mx-auto space-y-24">
                
                {/* Hero Section of About Us */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1.5 bg-[#BCE955]/20 rounded-full border border-[#BCE955]/30">
                            <span className="text-sm font-bold text-[#BCE955] uppercase tracking-widest">Our Story</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                            Connecting Minds, <br />
                            <span className="text-[#BCE955]">Empowering Futures.</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            eTuitionBD is Bangladesh’s premier tutoring platform, born from a simple idea: making quality education accessible to everyone. We bridge the gap between dedicated tutors and ambitious students through a seamless digital experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <div className="flex items-center gap-2 font-bold dark:text-white">
                                <CheckCircle2 className="text-[#BCE955]" /> Verified Tutors
                            </div>
                            <div className="flex items-center gap-2 font-bold dark:text-white">
                                <CheckCircle2 className="text-[#BCE955]" /> Flexible Learning
                            </div>
                        </div>
                    </div>
                    {/* Placeholder for Image - use your project assets here */}
                    <div className="relative">
                        <div className="aspect-video bg-gray-100 dark:bg-slate-900 rounded-[3rem] shadow-inner flex items-center justify-center border-4 border-dashed border-[#BCE955]/20">
                            <Users className="w-24 h-24 text-[#BCE955] opacity-20" />
                            <p className="absolute bottom-10 font-bold text-gray-400">Insert Team/Culture Photo</p>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-[#BCE955] p-8 rounded-[2rem] shadow-xl hidden md:block">
                            <p className="text-4xl font-black text-black">5+</p>
                            <p className="text-sm font-bold text-black/70">Years of Excellence</p>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 dark:bg-slate-900 p-10 rounded-[3rem] border border-transparent hover:border-[#BCE955] transition-all group">
                        <div className="w-14 h-14 bg-[#BCE955] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#BCE955]/20">
                            <Target className="text-black w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                        <p className="text-gray-600 dark:text-gray-400">To revolutionize the private tuition industry in Bangladesh by providing a secure and efficient platform for knowledge sharing.</p>
                    </div>

                    <div className="bg-gray-50 dark:bg-slate-900 p-10 rounded-[3rem] border border-transparent hover:border-[#BCE955] transition-all group">
                        <div className="w-14 h-14 bg-black dark:bg-white rounded-2xl flex items-center justify-center mb-6">
                            <Heart className="text-[#BCE955] w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                        <p className="text-gray-600 dark:text-gray-400">To be the most trusted educational partner for every household, ensuring no student is left behind due to a lack of resources.</p>
                    </div>

                    <div className="bg-[#BCE955] p-10 rounded-[3rem] shadow-xl shadow-[#BCE955]/10 flex flex-col justify-center">
                        <Award className="w-12 h-12 text-black mb-6" />
                        <h3 className="text-2xl font-black text-black mb-4">Why eTuitionBD?</h3>
                        <p className="text-black/80 font-medium mb-6">We don't just find tutors; we build relationships that foster academic and personal growth.</p>
                        <NavLink to="/tutors" className="flex items-center gap-2 font-bold text-black border-b-2 border-black w-fit hover:gap-4 transition-all">
                            Join Our Team <ArrowRight className="w-5 h-5" />
                        </NavLink>
                    </div>
                </div>

                {/* Founder/Team Philosophy Section */}
                <div className="bg-black dark:bg-slate-900 rounded-[4rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#BCE955] opacity-10 blur-[100px]"></div>
                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl font-black italic">"Education is not the filling of a pail, but the lighting of a fire."</h2>
                        <div className="w-20 h-1 bg-[#BCE955] mx-auto rounded-full"></div>
                        <p className="text-gray-400 font-medium text-lg">
                            At eTuitionBD, we believe in the power of quality mentorship. Our platform is built by students, for students, to ensure that the flame of learning stays alive.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;