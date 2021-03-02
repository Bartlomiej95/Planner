import React from 'react';
import styled from 'styled-components';
import { Heading, SubHeading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import AsideSection from '../organisms/AsideSection';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import ProfabilityProjectSection from '../organisms/ProfitabilityProjectSection';

const Wrapper = styled.div`
    margin: 0 36px;
`;

const DetailsSubHeading = styled(SubHeading)`

`;

const TimeProjectHeading = styled(SubHeading)`
    margin-bottom: 67px;
    margin-top: 30px;
`;

const DetailsParagraph = styled(Paragraph)`
    margin: 30px auto;
`;

const DetailsProject = () => {
    return(
        <>
        <Header/>
        <Wrapper>
            <AsideSection />
            <Heading>Projekt XYZ</Heading>
            <DetailsSubHeading>Specyfikacja projektowa</DetailsSubHeading>
            <DetailsParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas.
                Nam sed sapien sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas.
                Nam sed sapien sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas. 
                Nam sed sapien sapien.
            </DetailsParagraph>
            <DetailsSubHeading>Klient</DetailsSubHeading>
            <DetailsParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas. Nam sed sapien sapien.</DetailsParagraph>
            <TimeProjectHeading>Czas pracy nad projektem</TimeProjectHeading>
            <DetailsSubHeading>Zakres pracy <br/> w ramach projektu</DetailsSubHeading>
            <DetailsParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas. Nam sed sapien sapien.</DetailsParagraph>
            <DetailsSubHeading>Rentowność projektu</DetailsSubHeading>
            <ProfabilityProjectSection />
        </Wrapper>
        <Footer/>
        </>
    )
}

export default DetailsProject;