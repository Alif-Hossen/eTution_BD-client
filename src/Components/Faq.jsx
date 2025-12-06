

import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import FAQ from "../assets/FAQ.png"

const Faq = () => {
    const faqData = {
        Tutor: [
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
        ],

        GuardianStudent: [
            {
                question: "How do I find a tutor?",
                answer: "You can use the search bar on our homepage to filter tutors by subject, class, and location. You can view their profiles and contact them directly."
            },
            {
                question: "Is there any service charge for guardians?",
                answer: "Posting tuition and contacting tutors on bdTutors is completely free.Your job post will be reviewed and approved by our team to ensure quality and safety for both tutors and guardians.However, if you want your tuition job to be approved instantly and appear immediately to tutors, you can choose our Express Post option for a small fee of ৳50.This helps your job get noticed faster by active tutors in your area."
            },
            {
                question: "How do I know a tutor is trustworthy?",
                answer: "Every tutor on bdTutors goes through a strict verification process, including academic and identity checks. You can also see their ratings, reviews, and background before making a decision."
            },
            {
                question: "Can I talk to a tutor before finalizing?",
                answer: "Yes, definitely. You can call the tutor through bdTutors who has applied to your tuition post and discuss your requirements before confirming the tuition."
            },
            {
                question: "How will I ask for a tutor",
                answer: "You can submit a tutor request by filling up the required form from ask for tutor page.If you pay for a job post it will be posted immediately otherwise your post will go through admin verification process and after carefully verification your job will be posted if it aligns with our terms & policy"
            },
            {
                question: "How do I report an issue or get support?",
                answer: "You can reach our bdTutors Support Team anytime through chat or email. We take user safety and satisfaction very seriously and act quickly on all reports."
            },
            {
                question: "What payment methods are supported?",
                answer: "We support Bkash, Nagad payment for now to make job payment instantly."
            },
        ],
    };

    const [activeTab, setActiveTab] = useState('Tutor');

    const currentFaq = faqData[activeTab];

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    const getButtonClasses = (tabName) => {
        const baseClasses = 'px-6 py-2 rounded-full font-medium transition duration-200 shadow-md whitespace-nowrap';

        if (activeTab === tabName) {
            return `${baseClasses} bg-[#BCE955] text-black hover:bg-green-700`;
        } else {
            return `${baseClasses} bg-white border border-gray-300 text-black hover:bg-gray-100`;
        }
    };


    return (
        <div className='max-w-[1400px] mx-auto bg-[#41574A] rounded-2xl my-10 px-4 sm:px-6 lg:px-8 py-12'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center flex flex-col'> 
                
                <div className='order-1 lg:order-2 w-full mb-8 lg:mb-0'> 
                    <img className='w-full h-auto rounded-xl shadow-2xl' src={FAQ} alt="Frequently Asked Questions Illustration" />
                </div>
                
                <div className='order-2 lg:order-1 text-white'>
                    <h1 className='text-4xl sm:text-5xl font-extrabold mb-4'>
                        Frequently Asked Questions
                    </h1>
                    <p className='text-lg sm:text-xl text-gray-300 max-w-2xl mb-10'>
                        Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </p>

                    <div className='flex flex-wrap justify-start gap-4 mb-10'>
                        <button
                            onClick={() => handleTabChange('Tutor')}
                            className={getButtonClasses('Tutor')}
                        >
                            <span>Tutor</span>
                        </button>

                        <button
                            onClick={() => handleTabChange('GuardianStudent')}
                            className={getButtonClasses('GuardianStudent')}
                        >
                            <span>Guardian/Student</span>
                        </button>
                    </div>

                    <div className='space-y-4'>
                        {currentFaq.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Faq;