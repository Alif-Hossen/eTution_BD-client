import React from 'react';
import { FaSearch, FaChalkboardTeacher, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-4xl text-blue-600 mb-4" />,
    title: "Find a Tutor",
    description: "Search and connect with the best tutors available in your area or online."
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-green-600 mb-4" />,
    title: "Book a Session",
    description: "Schedule classes easily based on your convenience and learning goals."
  },
  {
    icon: <FaSmile className="text-4xl text-yellow-600 mb-4" />,
    title: "Learn & Grow",
    description: "Enjoy personalized learning and track your progress effectively."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-200 text-black max-w-[1400px] mx-auto my-8 rounded-2xl">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            How the Platform Works
          </h2>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold mt-4">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
