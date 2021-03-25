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
import timeIcon from '../assets/timeProject.svg';

const Wrapper = styled.div`
    margin: 0 36px;
`;

const DetailsSubHeading = styled(SubHeading)`

`;

const TimeProjectHeading = styled(SubHeading)`
    margin-bottom: 67px;
    margin-top: 30px;
`;

const TimeProjectWrapper = styled.div`
    margin: 0 auto 50px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
`;

const LeftSide = styled.div`
    width: 35px;
    height: 35px;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.16);
    border-radius: 5px;
    background-image: url(${timeIcon});
    background-repeat: no-repeat;
    background-position: center;
    
`;

const MiddleSide = styled.div`
    flex-grow: 3;
    margin-left: 30px;
`;

const RightSide = styled.div`

`;

const DetailsParagraph = styled(Paragraph)`
    margin: 30px auto;
`;

const TitleParagraph = styled(Paragraph)`
    font-weight: 800;
`;

const SubtitleParagraph = styled(Paragraph)`
    color: #A5A5A5;
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
            <TimeProjectWrapper>
                <LeftSide/>
                <MiddleSide>
                    <TitleParagraph>Realizacja</TitleParagraph>
                    <SubtitleParagraph>W realizacji</SubtitleParagraph>
                </MiddleSide>
                <RightSide>
                    {project.hours}H
                </RightSide>
            </TimeProjectWrapper>
            <DetailsSubHeading>Zakres pracy <br/> w ramach projektu</DetailsSubHeading>
            <DetailsParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas. Nam sed sapien sapien.</DetailsParagraph>
            <DetailsSubHeading>Rentowność projektu</DetailsSubHeading>
            <ProfabilityProjectSection projectValue={project.projectValue}/>
        </Wrapper>
        <Footer/>
        </>
    )
}

export default DetailsProject;