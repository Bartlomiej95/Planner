import { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import ProfabilityProjectSection from '../organisms/ProfitabilityProjectSection';
import timeIcon from '../assets/timeProject.svg';
import { Heading, SubHeading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsProject } from '../store/Projects/actions';
import LoadingWrapper from '../molecules/LoadingWrapper/LoadingWrapper';
import Projects from '../interfaces/Projects/Projects';

const Wrapper = styled.div`
    margin: 100px 36px 0 36px;

    @media(min-width: 600px ) {
        max-width: 600px;
        margin: 100px auto 0 auto;
    }

    @media(min-width: 1366px ) {
        max-width: 800px;
        margin: 100px auto 0 auto;
    }

`;

const DetailsSubHeading = styled(SubHeading)`
    margin: 50px 0;

    @media(min-width: 600px){
        margin: 50px 0;
    }
`;

const TimeProjectHeading = styled(SubHeading)`
    margin-bottom: 67px;
    margin-top: 50px;
`;

const TimeProjectWrapper = styled.div`
    margin: 0 auto 80px auto;
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

interface DefaultRootState {
    projects: {
        detailsProject: Projects,
    }
}


const DetailsProject = (props :any) => {

    // const { name } = props.location.state; // nazwa projektu
    const detailsProject = useSelector((state :DefaultRootState) => state.projects.detailsProject); 
    // const dispatch = useDispatch();
    console.log(detailsProject);

    // useEffect(() => {
    //     dispatch(getDetailsProject(name));
    // }, []);

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
            <ProfabilityProjectSection projectValue={Number(detailsProject.projectValue)} hours={Number(detailsProject.hours)} />
        </Wrapper>
        <Footer/>
        </>
    )
}

export default DetailsProject;