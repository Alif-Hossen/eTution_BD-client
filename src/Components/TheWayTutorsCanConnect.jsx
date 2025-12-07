import React, { useEffect } from 'react';
import { AiOutlineUserAdd, AiOutlineForm, AiOutlineSearch, AiOutlineTrophy } from 'react-icons/ai'; 
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

const TheWayTutorsCanConnect = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            mirror: false,
        });
    }, []);

    const steps = [
        { 
            icon: AiOutlineUserAdd, 
            title: 'Create Profile', 
            description: 'Create your profile in minutes with sign up information.',
            delay: 100 
        },
        { 
            icon: AiOutlineForm, 
            title: 'Complete your profile', 
            description: 'Make your profile at least 80% to get fast responses.',
            delay: 300
        },
        { 
            icon: AiOutlineSearch, 
            title: 'Apply for Tuition Job', 
            description: 'Visit “Job Board” daily & apply for desired tuition jobs.',
            delay: 500
        },
        { 
            icon: AiOutlineTrophy, 
            title: 'Start tutoring', 
            description: 'Be confident in the first meet & start tutoring.',
            delay: 700 
        }
    ];

    return (
        <div className='my-12'>
            
            <div className='max-w-[1000px] mx-auto rounded-3xl bg-gray-800 p-10 shadow-2xl'>
                
                <div className='text-center mb-8'>
                    <h1 className='text-4xl text-gray-300 py-2 font-bold'>
                        The ways <span className='text-[#BCE955]'>Tutors</span> can connect with us
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

export default TheWayTutorsCanConnect;