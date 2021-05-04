import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AsideSection from '../organisms/AsideSection';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import ProfabilityProjectSection from '../organisms/ProfitabilityProjectSection';
import timeIcon from '../assets/timeProject.svg';
import { Heading, SubHeading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsProject } from '../actions/projects';
import LoadingWrapper from '../molecules/LoadingWrapper/LoadingWrapper';

const Wrapper = styled.div`
    margin: 100px 36px 0 36px;
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

    const { name } = props.location.state;
    const detailsProject = useSelector(state => state.projects.detailsProject);
    const dispatch = useDispatch();
    console.log(detailsProject);

    useEffect(() => {
        dispatch(getDetailsProject(name));
    }, []);

    if(detailsProject === null || detailsProject === undefined || Object.keys(detailsProject).length === 0 ){
        return(
            <LoadingWrapper/>
        )
    }

    return(
        <>
        <Header/>
        <Wrapper>
            <Heading>{detailsProject.name}</Heading>
            <DetailsSubHeading>Specyfikacja projektowa</DetailsSubHeading>
            <DetailsParagraph>
                {detailsProject.assumptions} <br/>
                {detailsProject.content}
            </DetailsParagraph>
            <DetailsSubHeading>{detailsProject.customer}</DetailsSubHeading>
            <DetailsParagraph>{detailsProject.customerInfo}</DetailsParagraph>
            <TimeProjectHeading>Czas pracy nad projektem</TimeProjectHeading>
            <TimeProjectWrapper>
                <LeftSide/>
                <MiddleSide>
                    <TitleParagraph>Realizacja</TitleParagraph>
                    <SubtitleParagraph>W realizacji</SubtitleParagraph>
                </MiddleSide>
                <RightSide>
                    {detailsProject.hours}H
                </RightSide>
            </TimeProjectWrapper>
            <DetailsSubHeading>Zakres pracy <br/> w ramach projektu</DetailsSubHeading>
            <DetailsParagraph>{detailsProject.scopeOfWork}</DetailsParagraph>
            <DetailsSubHeading>Rentowność projektu</DetailsSubHeading>
            <ProfabilityProjectSection projectValue={detailsProject.projectValue}/>
        </Wrapper>
        <Footer/>
        </>
    )
}

export default DetailsProject;