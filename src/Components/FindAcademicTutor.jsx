import React from "react";
import physicsImg from "../assets/physics.png";
import chemistryImg from "../assets/chemistry.png";
import scienceImg from "../assets/Science-amico.png";
import zoologyImg from "../assets/zoology.png";
import botanyImg from "../assets/bootani.png";
import mathImg from "../assets/math.png";
import englishImg from "../assets/English teacher-rafiki.png";
import robo from "../assets/robotics.png";
import socialScienceImg from "../assets/Social distance at school-bro.png";
import IslamEducation from "../assets/Islamic new year-pana.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const subjects = [
    { img: physicsImg, title: "Physics" },
    { img: chemistryImg, title: "Chemistry" },
    { img: scienceImg, title: "General Science" },
    { img: zoologyImg, title: "Zoology" },
    { img: botanyImg, title: "Botany" },
    { img: mathImg, title: "Mathematics" },
    { img: englishImg, title: "English" },
    { img: robo, title: "Robotics" },
    { img: socialScienceImg, title: "Social Science" },
    { img: IslamEducation, title: "Islamic Studies" },
];

const FindAcademicTutor = () => {
    return (
        <div className="max-w-[1400px] h-[500px] rounded-2xl mx-auto my-10 bg-gray-50 py-10"> 
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Find Academic Tutors</h2>

            <Swiper
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 50, 
                    stretch: 0,
                    depth: 100, 
                    modifier: 1,
                    slideShadows: true, 
                }}
                slidesPerView={3} 
                spaceBetween={0}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCoverflow]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 }, 
                }}
                className="mySwiper h-[450px]"
            >
                {subjects.map((sub, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center h-[350px] justify-center border border-gray-200">
                            <img
                                src={sub.img}
                                alt={sub.title}
                                className="h-[180px] w-full object-contain"
                            />
                            <h3 className="text-xl font-bold text-gray-700 mt-6">
                                {sub.title}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FindAcademicTutor;