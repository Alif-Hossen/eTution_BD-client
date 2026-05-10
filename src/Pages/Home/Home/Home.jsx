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
import ExtraOne from '../ExtraOne';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FindAcademicTutor></FindAcademicTutor>
            <HowItWorks></HowItWorks>
            <TheWayTutorsCanConnect></TheWayTutorsCanConnect>
            <TheWaysParentCon></TheWaysParentCon>
            <TuitionType></TuitionType>
            <WhyChooseUs></WhyChooseUs>
            <ExtraOne></ExtraOne>
            <Faq></Faq>
            <StillHaveQstn></StillHaveQstn>
            <WeFeaturedOn></WeFeaturedOn>
            
        </div>
    );
};

export default Home;