import React from "react";
import whyChoose from "../assets/whyChoose.png";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 max-w-[1400px] mx-auto my-10 rounded-2xl p-8 md:p-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Why Choose Us
        </h1>
        <h3 className="text-2xl md:text-3xl text-gray-700 mt-3">
          We intend to expand <span className="text-lime-600 font-semibold">Excellent</span> education.
        </h3>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            className="w-[300px] md:w-[420px] lg:w-[500px] rounded-2xl shadow-lg"
            src={whyChoose}
            alt="Why Choose Us"
          />
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="w-14 h-14 bg-lime-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">24/7 Live Support</h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="w-14 h-14 bg-lime-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">Fast Responsive</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="w-14 h-14 bg-lime-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">Safe Community</h3>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="w-14 h-14 bg-lime-200 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">Better Than Others</h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
