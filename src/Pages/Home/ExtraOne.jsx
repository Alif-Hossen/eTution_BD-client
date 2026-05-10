import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Zap, Star, UserPlus, Users, Award, MoveRight } from 'lucide-react';
import { NavLink } from 'react-router';

const TuitionBDHeroSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    const stats = [
        {
            icon: Award,
            number: 150000,
            label: "Experienced Tutors",
            position: "lg:absolute right-0 top-20",
        },
        {
            icon: Users,
            number: 50000,
            label: "Students Helped",
            position: "lg:absolute right-10 bottom-20",
        }
    ];

    return (
        <div ref={ref} className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden flex items-center justify-center py-20 px-4 max-w-[1400px] mx-auto rounded-2xl">
            
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-lime-200/40 dark:bg-lime-900/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-300/40 dark:bg-lime-950/10 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center w-full z-10">
                
                {/* Left Side Content */}
                <div className="col-span-2 text-center lg:text-left space-y-8">
                    <div className="inline-flex items-center gap-2 p-2 px-4 bg-white dark:bg-slate-900 rounded-full border border-gray-100 dark:border-slate-800 shadow-sm">
                        <Briefcase className="w-5 h-5 text-lime-500" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Start Your Tutoring Journey</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Become an <span className="bg-gradient-to-r from-[#BCE955] to-lime-600 bg-clip-text text-transparent">eTuition Tutor</span> <br /> & Shape <span className="bg-gradient-to-r from-[#BCE955] to-lime-400 bg-clip-text text-transparent">Future Minds</span>
                    </h1>

                    <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Join thousands of top educators providing quality private and online home tuition in Bangladesh. Flexible schedules and professional growth.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <div className="flex items-center gap-2 text-sm font-medium p-2 bg-lime-50 dark:bg-slate-800 rounded-full px-5 border border-lime-200 dark:border-lime-900">
                            <Zap className="w-4 h-4 text-lime-600" /> Quick Registration
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium p-2 bg-lime-50 dark:bg-slate-800 rounded-full px-5 border border-lime-200 dark:border-lime-900">
                            <Star className="w-4 h-4 text-lime-600" /> Trusted Platform
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center lg:justify-start">
                        <NavLink to="/register" className="bg-[#BCE955] dark:bg-#BCE955] hover:bg-lime-600 text-black font-bold py-4 px-12 rounded-full transition-all shadow-lg hover:shadow-lime-500/20 hover:scale-105 active:scale-95 flex items-center justify-center">
                            Apply Now <MoveRight className="w-5 h-5 ml-2" />
                        </NavLink>
                        <NavLink to="/tuitions" className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-bold py-4 px-12 rounded-full border border-gray-200 dark:border-slate-800 hover:border-lime-500 transition-all shadow-sm flex items-center justify-center">
                            Browse Tutors <UserPlus className="w-5 h-5 ml-2 text-lime-500" />
                        </NavLink>
                    </div>
                </div>

                {/* Right Side Stats */}
                <div className="relative h-[400px] lg:h-[600px] flex flex-col justify-center items-center gap-6 lg:block">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div 
                                key={index} 
                                className={`${stat.position} bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-slate-800 hover:border-lime-400 transition-all hover:-translate-y-2 flex items-center gap-6 w-full max-w-[320px]`}
                            >
                                <div className="p-4 bg-lime-100 dark:bg-slate-800 rounded-2xl text-lime-600">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-black text-gray-900 dark:text-white">
                                        {inView ? (
                                            <CountUp 
                                                end={stat.number} 
                                                duration={3} 
                                                formattingFn={(value) => `${(value / 1000).toFixed(0)}K+`}
                                            />
                                        ) : "0K+"}
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider text-xs">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default TuitionBDHeroSection;