import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="group relative p-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:border-[#BCE955] dark:hover:border-[#BCE955] hover:shadow-lg hover:shadow-[#BCE955]/10 active:scale-90 overflow-hidden"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            <div className="relative z-10 transition-transform duration-500 transform group-hover:rotate-[20deg]">
                {isDark ? (
                    <Sun className="w-6 h-6 text-[#BCE955]" />
                ) : (
                    <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-[#BCE955]" />
                )}
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-[#BCE955] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
        </button>
    );
};

export default ThemeToggle;