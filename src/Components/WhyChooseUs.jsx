import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='bg-gray-400 max-w-[1400px] mx-auto my-8 rounded-2xl p-8'>
            <div>
                <h1 className='text-4xl text-center'>Why Choose Us</h1>
                <h3 className='text-3xl text-center pb-8'>We intend to expand <span>Excellent</span> education.</h3>
            </div>
            <div className='flex gap-4'>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='bg-white rounded-2xl'>
                        <img src="" alt="" />
                        <h3 className='text-black text-xl px-8 py-4 '>24/7 Live Support</h3>
                    </div>
                    <div className='bg-white rounded-2xl'>
                        <img src="" alt="" />
                        <h3 className='text-black text-xl px-8 py-4 '>Fast Responsive</h3>
                    </div>
                    <div className='bg-white rounded-2xl'>
                        <img src="" alt="" />
                        <h3 className='text-black text-xl px-8 py-4 '>Safe Community</h3>
                    </div>
                    <div className='bg-white rounded-2xl'>
                        <img src="" alt="" />
                        <h3 className='text-black text-xl px-8 py-4 '>Better Than Others</h3>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;