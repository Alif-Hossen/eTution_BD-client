

import React from 'react';
import AccordionItem from './AccordionItem'; 
const Faq = () => {
    const faqData = [
        {
            question: "Who can use this platform ?",
            answer: "Anyone can search for tutors and view their profiles. However, only registered tutors can create profiles and access dashboard features."
        },
        {
            question: "Is bdTutor free to use?",
            answer: "Yes, searching for tutors and viewing public profiles is completely free. Tutors can sign up for free and optionally subscribe to premium features."
        },
        {
            question: "How do I create a tutor account ?",
            answer: "Click on the Sign Up button and fill out the required information. Once registered, you can log in and create or edit your tutor profile."
        },
        {
            question: "How do I become a Pro Tutor ?",
            answer: "After logging in, go to your dashboard and click on “Upgrade membership”. Choose a subscription plan and complete the payment process."
        },
        {
            question: "How can I get tuition on bdTutors?",
            answer: "First, create your tutor profile on bdTutors with accurate information about your qualifications, subjects, and preferred areas. Then, browse the list of available tuition posts and apply to the ones that match your interests. Once you apply, the guardian will review your profile, and if it fits their requirements, they’ll contact you directly to discuss and confirm the tuition."
        },
        {
            question: "What payment methods are supported for subscriptions ?",
            answer: "We support bkash, nagad payment for now to active premium features."
        },
    ];

    return (
        <div className='bg-[#41574A] my-8 max-w-[1400px] mx-auto py-8 px-4 sm:px-6 lg:px-8 rounded-2xl'> 
            <h1 className='text-4xl text-center font-bold py-2 text-gray-900'>
                Frequently asked questions
            </h1>
            <p className='text-xl text-center py-2 max-w-3xl mx-auto mb-10'>
                Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.
            </p>

            <div className='secondary flex justify-center mb-8'>
                <button className='px-6 py-2 bg-white border border-gray-300 rounded-full font-medium text-gray-800 shadow-md hover:bg-gray-50 transition duration-150'>
                    <span className=''>Tutor</span>
                </button>
                
            </div>

            <div className='max-w-4xl mx-auto space-y-4'> 
                {faqData.map((item, index) => (
                    <AccordionItem 
                        key={index} 
                        question={item.question} 
                        answer={item.answer} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Faq;