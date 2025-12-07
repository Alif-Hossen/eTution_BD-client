import React from 'react';
import onlineStudy from "../assets/Online test-rafiki.png";
import homeStudy from "../assets/Kids Studying from Home-bro.png";
import groupStudy from "../assets/Shared workspace-amico.png";

const TuitionType = () => {
    return (
        <div className="max-w-[1400px] mx-auto my-12 px-4">

            {/* Heading */}
            <div className="text-center py-6">
                <h1 className="text-4xl font-extrabold ]">Tuition Types</h1>
                <p className="text-lg  mt-2">
                    Find the best tuition type that suits you most
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

                {/* Card 1 */}
                <div className="bg-white borer rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center">
                        <img className="h-[260px] rounded-xl object-contain" src={homeStudy} alt="Home Tutoring" />
                    </div>
                    <h1 className="text-[#1F462D] text-center text-2xl font-bold mt-4">Home Tutoring</h1>
                    <p className="text-center text-gray-600">Looking for one-to-one classes?</p>
                    <p className="text-center text-gray-700 font-medium mt-4">
                        Learn comfortably at home with personalized guidance tailored to your academic needs.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white  rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center">
                        <img className="h-[260px] rounded-xl object-contain" src={onlineStudy} alt="Online Tutoring" />
                    </div>
                    <h1 className="text-[#1F462D] text-center text-2xl font-bold mt-4">Online Tutoring</h1>
                    <p className="text-center text-gray-600">Are you stuck with any doubts?</p>
                    <p className="text-center text-gray-700 font-medium mt-4">
                        Attend classes from anywhere with top tutors using smart online tools — hassle-free learning!
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white  rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-center">
                        <img className="h-[260px] rounded-xl object-contain" src={groupStudy} alt="Group Tutoring" />
                    </div>
                    <h1 className="text-[#1F462D] text-center text-2xl font-bold mt-4">Group Tutoring</h1>
                    <p className="text-center text-gray-600">Want competitive & affordable learning?</p>
                    <p className="text-center text-gray-700 font-medium mt-4">
                        Learn together, share knowledge, and enjoy cost-effective tuition with a friendly group environment.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default TuitionType;
