import React from 'react';
import AccordionItem from '../AccordionItem';
import Faq from '../Faq';
import FindAcademicTutor from '../FindAcademicTutor';
import Hero from '../Hero';
import HowItWorks from '../HowItWorks';
import StillHaveQstn from '../StillHaveQstn';
import TheWayTutorsCanConnect from '../TheWayTutorsCanConnect';
import TheWaysParentCon from '../TheWaysParentCon';
import TuitionType from '../TuitionType';
import WeFeaturedOn from '../WeFeaturedOn';
import WhyChooseUs from '../WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            {/* <AccordionItem></AccordionItem> */}
            
            <FindAcademicTutor></FindAcademicTutor>
            
            <HowItWorks></HowItWorks>
            
            <TheWayTutorsCanConnect></TheWayTutorsCanConnect>
            <TheWaysParentCon></TheWaysParentCon>
            <TuitionType></TuitionType>
            <WhyChooseUs></WhyChooseUs>
            <Faq></Faq>
            <WeFeaturedOn></WeFeaturedOn>
            <StillHaveQstn></StillHaveQstn>
        </div>
    );
};

export default Home;