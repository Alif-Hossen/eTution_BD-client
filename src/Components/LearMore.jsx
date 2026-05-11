import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Target, Zap, Shield, Award, Globe } from 'lucide-react';

const LearnMore = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans selection:bg-[#BCE955] selection:text-black">
            
            {/* Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[5%] -left-[5%] w-[30%] h-[30%] bg-[#BCE955]/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#BCE955] transition-all mb-8 shadow-sm text-sm font-semibold"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </button>

                {/* Hero Section */}
                <div className="max-w-3xl mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BCE955]/10 border border-[#BCE955]/20 text-[#BCE955] text-[12px] font-bold uppercase tracking-wider mb-4">
                        <Sparkles size={14} /> Future of Learning
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                        Elevating <span className="text-[#BCE955]">Education</span> Through Innovation.
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                        eTuitionBD isn't just a platform; it's an ecosystem designed to bridge the gap between ambitious students and world-class mentors.
                    </p>
                </div>

                {/* Features Grid - Balanced Gaps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {[
                        { icon: <Target />, title: "Precision Matching", desc: "Our AI-driven algorithm finds the perfect tutor for you." },
                        { icon: <Zap />, title: "Instant Access", desc: "Start your first session within minutes of joining." },
                        { icon: <Shield />, title: "Safety First", desc: "Multi-layer verification for every tutor profile." },
                        { icon: <Award />, title: "Top Excellence", desc: "Only the top-rated mentors make it to our platform." }
                    ].map((item, i) => (
                        <div key={i} className="group p-6 rounded-[24px] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50 hover:bg-white dark:hover:bg-slate-900 transition-all hover:shadow-xl hover:shadow-[#BCE955]/5">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 text-[#BCE955] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* How it Works - More Compact */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 p-10 rounded-[32px] bg-slate-900 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-8">Your Journey to Success</h2>
                        <div className="space-y-6">
                            {[
                                { step: "01", t: "Create Your Profile", d: "Tell us about your learning goals." },
                                { step: "02", t: "Get Matched", d: "Choose from hand-picked recommendations." },
                                { step: "03", t: "Start Learning", d: "Engage in results-driven sessions." }
                            ].map((s, i) => (
                                <div key={i} className="flex gap-4">
                                    <span className="text-[#BCE955] font-mono text-lg font-bold">{s.step}</span>
                                    <div>
                                        <h4 className="text-lg font-bold">{s.t}</h4>
                                        <p className="text-slate-400 text-sm">{s.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-64 bg-gradient-to-br from-[#BCE955] to-[#86a63d] rounded-[24px] flex items-center justify-center shadow-2xl">
                        <div className="text-center">
                            <h3 className="text-black text-5xl font-black mb-1">10k+</h3>
                            <p className="text-black/80 font-bold uppercase tracking-widest text-xs">Active Students</p>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center py-12 border-t border-slate-100 dark:border-slate-800">
                    <h2 className="text-3xl font-black mb-6">Ready to transform your future?</h2>
                    <NavLink to="/register" className="px-10 py-4 rounded-xl bg-[#BCE955] text-black font-black text-lg hover:scale-105 active:scale-95 transition-all">
                        Get Started Now
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;