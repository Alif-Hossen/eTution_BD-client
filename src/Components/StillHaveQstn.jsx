import React from 'react';

import userOne from "../assets/user1.avif"
import userTwo from "../assets/user2.avif"
import userThree from "../assets/user3.avif"

const StillHaveQstn = () => {
    return (
        <div className='max-w-[1400px] mx-auto my-8 bg-[#41574A] py-8 rounded-2xl'>
            <div className='flex justify-center items-center'>
                <img className='w-[70px] h-[70px] rounded-full' src={userOne} alt="" />
                <img className='w-[90px] h-[90px] rounded-full -mx-4 z-10 border-2 border-white' src={userTwo} alt="" />
                <img className='w-[70px] h-[70px] rounded-full' src={userThree} alt="" />
            </div>
            <div>
                <h1 className='text-5xl text-center font-bold py-4'>Still Have Question?</h1>
                <p className='text-center  text-2xl'>
                    Can’t find the answer you’re looking for? Please chat to our friendly team.
                </p>
            </div>
            <div className='flex justify-center my-4'>
                <button className='btn secondary text-black border-none rounded-2xl'>Get In Touch</button>
            </div>
        </div>
    );
};

export default StillHaveQstn;