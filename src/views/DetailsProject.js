import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getDetailsProject } from '../actions/projects';
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

const DetailsProject = (props) => {

    const dispatch = useDispatch();
    const project = useSelector(state => state.projects);
    const { name, id } = props.location.state;

    useEffect(() => {
        dispatch(getDetailsProject(name));
    }, [])

    console.log(project);
    return(
        <>
        <Header/>
        <Wrapper>
            <AsideSection />
            <Heading>{project.name}</Heading>
            <DetailsSubHeading>Specyfikacja projektowa</DetailsSubHeading>
            <DetailsParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas.
                Nam sed sapien sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas.
                Nam sed sapien sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas. 
                Nam sed sapien sapien.
            </DetailsParagraph>
            <DetailsSubHeading>{project.customer}</DetailsSubHeading>
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