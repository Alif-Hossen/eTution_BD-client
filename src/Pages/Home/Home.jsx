import React from 'react';
import FindAcademicTutor from '../../Components/FindAcademicTutor';
import Faq from '../../Components/Faq';
import StillHaveQstn from '../../Components/StillHaveQstn';
import TuitionType from '../../Components/TuitionType';

const Home = () => {
    return (
        <div>
            
            <TuitionType></TuitionType>
            <FindAcademicTutor></FindAcademicTutor>
            <Faq></Faq>
            <StillHaveQstn></StillHaveQstn>

        </div>
    );
};

export default Home;