import React from 'react';
import onlineStudy from "../assets/Online test-rafiki.png"
import homeStudy from "../assets/Kids Studying from Home-bro.png"
import groupStudy from "../assets/Shared workspace-amico.png"

const TuitionType = () => {
    return (
        <div className=' max-w-[1400px] mx-auto'>
            <div className='text-center py-8'>
                <h1 className='text-3xl font-bold'>Tuition Types</h1>
                <p className='text-lg text-gray-300'>Find the Best Tuition Type which suits you most</p>
            </div>
            <div className='grid xl:grid-cols-3  gap-4'>
                <div className='bg-white flex flex-col border py-4 px-4 rounded-2xl'>
                    <img className='bg-white rounded-2xl h-[300px] items-center justify-center' src={homeStudy} alt="" />
                    <div>
                        <h1 className='text-[#1F462D] text-center text-2xl font-bold '>Home Tutoring</h1>
                        <p className='text-center text-gray-200'>Looking For One-To-One Classes?</p>
                        <p className='text-center text-gray-200 font-bold pt-6'>It’s a unique opportunity to learn in the home with your expected future in different categories everything is in favor of your need

                        </p>
                    </div>
                </div>
                <div className='bg-white flex flex-col border py-4 px-4 rounded-2xl'>
                    <img className='rounded-2xl h-[300px] items-center' src={onlineStudy} alt="" />
                    <div>
                        <h1 className='text-[#1F462D] text-center text-2xl font-bold '>Online Tutoring</h1>
                        <p className='text-center text-gray-200'>Are you left with any doubts?</p>
                        <p className='text-center text-gray-200 font-bold pt-6'>Connect with the best tutors from anywhere and take online classes by using different tools Make your life more easier with this process.
                        </p>
                    </div>
                </div>
                <div className='bg-white flex flex-col border py-4 px-4 rounded-2xl'>
                    <img className='rounded-2xl h-[300px]' src={groupStudy} alt="" />
                    <div>
                        <h1 className='text-[#1F462D] text-center text-2xl font-bold '>Group Tutoring</h1>
                        <p className='text-center text-gray-200'>Need the Compititive & Effordable experience?</p>
                        <p className='text-center text-gray-200 font-bold pt-6'>A group of students can full fill their hunger for learning within more affordable tuition fees. Get the opportunity of learning with knowledge sharing!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitionType;