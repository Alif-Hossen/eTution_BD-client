import React, { useEffect } from 'react';
import { BsPersonAdd, BsFileEarmarkText, BsPersonLinesFill, BsCheckCircle } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const StepCard = ({ icon: Icon, title, description, animationDelay }) => {
    return (
        <div 
            data-aos="fade-right" 
            data-aos-duration="800"
            data-aos-delay={animationDelay} 
            className='bg-white rounded-xl flex items-start text-gray-800 p-6 my-4 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100'
        >
            <div className='flex-shrink-0 bg-[#BCE955] p-3 rounded-full text-gray-800 mr-6 mt-1'>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-1'>{title}</h3>
                <p className='text-gray-600'>{description}</p>
            </div>
        </div>
    );
};

const TheWaysParentCon = () => {
    useEffect(() => {
        AOS.init({
            once: true, 
            mirror: false, 
        });
    }, []);

    const steps = [
        { 
            icon: BsPersonAdd, 
            title: 'Create Profile', 
            description: 'Create a profile to get more learning benefits from website.',
            delay: 100 
        },
        { 
            icon: BsFileEarmarkText, 
            title: 'Submit Requirements', 
            description: 'Fill up expected tutor requirements & submit the request.',
            delay: 300
        },
        { 
            icon: BsPersonLinesFill, 
            title: "Get Tutors' CV", 
            description: 'On requirements, we will provide some expert tutors\' CVs.',
            delay: 500
        },
        { 
            icon: BsCheckCircle, 
            title: 'Select Your Tutor', 
            description: 'Evaluate tutors & start learning with your favorite one.',
            delay: 700 
        }
    ];

    return (
        <div className='my-12'>
            <div className='max-w-[1000px] mx-auto rounded-3xl bg-gray-800 p-10 shadow-2xl'>
                
                <div className='text-center mb-8'>
                    <h1 className='text-4xl text-gray-300 py-2 font-bold'>
                        The ways <span className='text-[#BCE955]'>Parents/Students</span> can connect with us
                    </h1>
                </div>
                
                <div className='mx-auto max-w-2xl'> 
                    {steps.map((step, index) => (
                        <StepCard
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            animationDelay={step.delay}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TheWaysParentCon;