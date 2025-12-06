import React, { useState } from 'react';

const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
);

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='border-b border-gray-200'>
            <div
                className='flex justify-between items-center bg-white py-4 px-5 rounded-xl cursor-pointer select-none transition duration-300 hover:bg-gray-50'
                onClick={toggleAccordion}
            >
                <h2 className='text-lg font-semibold text-gray-800'>
                    {question}
                </h2>
                <div className='text-gray-500'>
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                </div>
            </div>

            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                }`}
            >
                <p className='text-base text-gray-600 px-5 pb-4 pt-2 bg-white rounded-b-xl'>
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default AccordionItem;