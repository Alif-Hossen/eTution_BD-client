import React from 'react';
import heroImg from "../assets/heroo.png";

const Hero = () => {
    return (
        <div className='relative bg-gray-200 text-black overflow-hidden max-w-[1400px] mx-auto my-8 rounded-2xl'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className='absolute bg-yellow-200 rounded-full w-72 h-72 -top-20 -left-20 opacity-30'></div>
                <div className='absolute bg-pink-200 rounded-full w-96 h-96 -bottom-28 -right-32 opacity-20'></div>
            </div>

            <div className='relative flex flex-col md:flex-row items-center max-w-[1440px] mx-auto px-6 md:px-12 py-10 md:py-14 gap-8'>
                <div className='flex-1 pt-6 md:pt-10'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight'>
                        Bangladesh's Number One Tutor <br />
                        Matching And Learning Platform
                    </h1>
                    <p className='mt-4 text-base sm:text-lg md:text-xl text-gray-800'>
                        Hire a conversant tutor to make your children's learning fun, comprehensive, and easier.
                    </p>

                    <div className='mt-6 flex flex-col sm:flex-row gap-4'>
                        <button className='btn secondary border-none rounded-2xl text-black px-5 py-2.5 font-medium hover:bg-gray-300 transition'>
                            Get In Touch
                        </button>
                        <button className='btn primary border-none rounded-2xl text-white bg-blue-600 px-5 py-2.5 font-medium hover:bg-blue-700 transition'>
                            Learn More
                        </button>
                    </div>
                </div>

                <div className='flex-1 flex justify-center md:justify-end'>
                    <img 
                        className='h-[260px] sm:h-[300px] md:h-[360px] lg:h-[400px] rounded-4xl shadow-xl object-cover' 
                        src={heroImg} 
                        alt="Hero" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
