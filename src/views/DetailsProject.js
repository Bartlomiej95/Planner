import styled from 'styled-components';
import AsideSection from '../organisms/AsideSection';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import ProfabilityProjectSection from '../organisms/ProfitabilityProjectSection';
import timeIcon from '../assets/timeProject.svg';
import { Heading, SubHeading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';

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

    const { name, id, customer, projectValue, hours } = props.location.state;

    return(
        <>
        <Header/>
        <Wrapper>
            <AsideSection />
            <Heading>{name}</Heading>
            <DetailsSubHeading>Specyfikacja projektowa</DetailsSubHeading>
            <DetailsParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas.
                Nam sed sapien sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas.
                Nam sed sapien sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas. 
                Nam sed sapien sapien.
            </DetailsParagraph>
            <DetailsSubHeading>{customer}</DetailsSubHeading>
            <DetailsParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas. Nam sed sapien sapien.</DetailsParagraph>
            <TimeProjectHeading>Czas pracy nad projektem</TimeProjectHeading>
            <TimeProjectWrapper>
                <LeftSide/>
                <MiddleSide>
                    <TitleParagraph>Realizacja</TitleParagraph>
                    <SubtitleParagraph>W realizacji</SubtitleParagraph>
                </MiddleSide>
                <RightSide>
                    {hours}H
                </RightSide>
            </TimeProjectWrapper>
            <DetailsSubHeading>Zakres pracy <br/> w ramach projektu</DetailsSubHeading>
            <DetailsParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas. Nam sed sapien sapien.</DetailsParagraph>
            <DetailsSubHeading>Rentowność projektu</DetailsSubHeading>
            <ProfabilityProjectSection projectValue={projectValue}/>
        </Wrapper>
        <Footer/>
        </>
    )
}

export default DetailsProject;