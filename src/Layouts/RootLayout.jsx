import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router';
import ScrollToTop from '../Components/ScrollToTop';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ScrollToTop></ScrollToTop>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;