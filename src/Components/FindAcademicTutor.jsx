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
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
    <div className="max-w-[1400px] mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Find Academic Tutors</h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {subjects.map((sub, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-xl transition">
              <img
                src={sub.img}
                alt={sub.title}
                className="h-[180px] object-contain"
              />
              <h3 className="text-lg font-semibold text-gray-700 mt-4">
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
