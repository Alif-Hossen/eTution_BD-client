import React from 'react';
import newsOne from "../assets/news1.jpg"
import newsTwo from "../assets/news2.png"
import newsThree from "../assets/news3.webp"
import newsFour from "../assets/news4.jpg"
import newsFive from "../assets/news5.jpg"
import newsSix from "../assets/news6.png"
import newsSeven from "../assets/news7.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const featuredLogos = [
    { img: newsOne, alt: "News Feature 1" },
    { img: newsTwo, alt: "News Feature 2" },
    { img: newsThree, alt: "News Feature 3" },
    { img: newsFour, alt: "News Feature 4" },
    { img: newsFive, alt: "News Feature 5" },
    { img: newsSix, alt: "News Feature 6" },
    { img: newsSeven, alt: "News Feature 7" },
];

const WeFeaturedOn = () => {
    return (
        <div className='max-w-[1400px] mx-auto my-12 py-10 bg-gray-200 rounded-2xl pb-8'>
            
            <h1 className='text-4xl font-bold text-center mb-10 text-gray-800'>We Were Featured On</h1>
            
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                slidesPerView={5} 
                spaceBetween={30}
                grabCursor={true}
                
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    640: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 5, spaceBetween: 30 },
                }}
                className="mySwiper h-24"
            >
                {featuredLogos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center h-full opacity-90 hover:opacity-100 transition duration-300">
                            <img
                                src={logo.img}
                                alt={logo.alt}
                                className="h-[100px] w-[500px] object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default WeFeaturedOn;