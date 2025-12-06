

import React from 'react';
import physicsImg from "../assets/physics.png"
import chemistryImg from "../assets/chemistry.png"
import scienceImg from "../assets/Science-amico.png"
import zoologyImg from "../assets/zoology.png"
import botanyImg from "../assets/bootani.png"
import mathImg from "../assets/math.png"
import englishImg from "../assets/English teacher-rafiki.png"
import robo from "../assets/robotics.png"
import socialScienceImg from "../assets/Social distance at school-bro.png"
import IslamEducation from "../assets/Islamic new year-pana.png"


const FindAcademicTutor = () => {
    return (
        <div>
            <div className='pt-8'>
                <h1 className='text-5xl text-center font-bold'>Find Your Academic Tutors</h1>
                <h3 className='text-xl text-center'>
                    Connect with tutors who match your goals and learning style easily.
                </h3>
            </div>
            <div className='grid gap-8 grid-cols-5 max-w-[1400px] mx-auto my-20 text-[#1F462D]'>

                <div className='border border-gray-100 bg-white rounded-2xl overflow-hidden transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl'>
                    <img className=' w-[250px] h-[220px] rounded-2xl ' src={physicsImg} alt="" />
                    <p className='text-center font-bold text-2xl pb-2'>Physics</p>
                </div>



                <div className='border border-gray-100 bg-white rounded-2xl overflow-hidden transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl'>
                    <img className='w-[250px] h-[220px] rounded-2xl ' src={chemistryImg} alt="" />
                    <p className='text-center font-bold text-2xl pb-2'>Chemistry</p>

                </div>


                <div className='border border-gray-100 bg-white rounded-2xl overflow-hidden transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl'>
                    <img className='w-[250px] h-[220px] rounded-2xl ' src={scienceImg} alt="" />
                    <p className='text-center font-bold text-2xl pb-2'>Science</p>
                </div>

                <div className='border border-gray-100 bg-white rounded-2xl overflow-hidden transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl'>
                    <img className='w-[250px] h-[220px] rounded-2xl ' src={zoologyImg} alt="" />
                    <p className='text-center font-bold text-2xl pb-2'>Botany</p>
                </div>

                <div className='border border-gray-100 bg-white rounded-2xl overflow-hidden transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl'>
                    <img className='w-[250px] h-[220px] rounded-2xl ' src={botanyImg} alt="" />
                    <p className='text-center font-bold text-2xl pb-2'>Zoology</p>
                </div>

                <div className='border border-gray-100 bg-white rounded-2xl overflow-hidden transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl'>
                    <img className='w-[250px] h-[220px] rounded-2xl ' src={mathImg} alt="" />
                    <p className='text-center font-bold text-2xl pb-2'>Math</p>
                </div>

                <div className='border border-gray-100 bg-white rounded-2xl overflow-hidden transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl'>
                    <img className='w-[250px] h-[220px] rounded-2xl ' src={englishImg} alt="" />
                    <p className='text-center font-bold text-2xl pb-2'>English</p>
                </div>

                <div className='border border-gray-100 bg-white rounded-2xl overflow-hidden transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl'>
                    <img className='w-[250px] h-[220px] rounded-2xl ' src={robo} alt="" />
                    <p className='text-center font-bold text-2xl pb-2'>Physical Education</p>
                </div>

                <div className='border border-gray-100 bg-white rounded-2xl overflow-hidden transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl'>
                    <img className='w-[250px] h-[220px] rounded-2xl ' src={socialScienceImg} alt="" />
                    <p className='text-center font-bold text-2xl pb-2'>Social Science</p>
                </div>

                <div className='border border-gray-100 bg-white rounded-2xl overflow-hidden transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl'>
                    <img className='w-[250px] h-[220px] rounded-2xl ' src={IslamEducation} alt="" />
                    <p className='text-center font-bold text-2xl pb-2'>Islamic Studies</p>
                </div>
            </div>
        </div>
    );
};

export default FindAcademicTutor;

