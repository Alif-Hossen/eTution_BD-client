import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#1F462D] text-white rounded-3xl max-w-[1400px] mx-auto mt-10 p-10 mb-2">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo + About Platform */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img 
                            src={logo} 
                            alt="logo" 
                            className="h-[80px] w-[80px] object-contain" 
                        />
                        <h2 className="text-3xl font-bold">
                            e<span className="text-[#BCE955]">Tuition</span>BD
                        </h2>
                    </div>

                    <p className="text-gray-200 leading-relaxed mt-3">
                        eTuitionBD is a modern online tuition platform connecting students with qualified tutors across Bangladesh. 
                        Our goal is to make learning easier, accessible, and reliable for everyone.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-bold mb-3">Quick Links</h2>
                    <ul className="space-y-2 text-gray-200">
                        <li className="hover:text-[#BCE955] cursor-pointer">Home</li>
                        <li className="hover:text-[#BCE955] cursor-pointer">Find Tuitions</li>
                        <li className="hover:text-[#BCE955] cursor-pointer">Find Tutors</li>
                        <li className="hover:text-[#BCE955] cursor-pointer">About Us</li>
                        <li className="hover:text-[#BCE955] cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-bold mb-3">Contact Information</h2>
                    <ul className="space-y-2 text-gray-200">
                        <li>Email: support@etuitionbd.com</li>
                        <li>Phone: +880 1234-567890</li>
                        <li>Address: Dhaka, Bangladesh</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-xl font-bold mb-3">Follow Us</h2>
                    <div className="flex items-center gap-4">
                        <a className="bg-white/20 p-3 rounded-full hover:bg-[#BCE955] hover:text-black transition cursor-pointer">
                            <FaFacebookF size={18} />
                        </a>
                        <a className="bg-white/20 p-3 rounded-full hover:bg-[#BCE955] hover:text-black transition cursor-pointer">
                            <SiX size={18} />
                        </a>
                        <a className="bg-white/20 p-3 rounded-full hover:bg-[#BCE955] hover:text-black transition cursor-pointer">
                            <FaInstagram size={18} />
                        </a>
                        <a className="bg-white/20 p-3 rounded-full hover:bg-[#BCE955] hover:text-black transition cursor-pointer">
                            <FaLinkedinIn size={18} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="mt-10 border-t border-white/20 pt-5 text-center text-gray-300 text-sm">
                © {new Date().getFullYear()} eTuitionBD — All Rights Reserved.
            </div>

        </footer>
    );
};

export default Footer;
