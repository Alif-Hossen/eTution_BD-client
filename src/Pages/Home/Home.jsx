import React from 'react';
import FindAcademicTutor from '../../Components/FindAcademicTutor';
import Faq from '../../Components/Faq';
import StillHaveQstn from '../../Components/StillHaveQstn';
import TuitionType from '../../Components/TuitionType';
import TheWayTutorsCanConnect from '../../Components/TheWayTutorsCanConnect';
import WhyChooseUs from '../../Components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            
            <TuitionType></TuitionType>
            <FindAcademicTutor></FindAcademicTutor>
            <TheWayTutorsCanConnect></TheWayTutorsCanConnect>
            <WhyChooseUs></WhyChooseUs>
            <Faq></Faq>
            <StillHaveQstn></StillHaveQstn>

        </div>
    );
};

export default Home;