import React from 'react';
import styled from 'styled-components';
import Banner from '../organisms/Banner';
import FAQSection from '../organisms/FAQSection';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import JoinUsSection from '../organisms/JoinUsSection';
import PlannerFunc from '../organisms/PlannerFunc';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

const HomePage = () => {
    return(
        <Wrapper>
            <Header />
            <Banner />
            <PlannerFunc />
            <FAQSection />
            <JoinUsSection />
            <Footer />
        </Wrapper>
    )
}

export default HomePage;