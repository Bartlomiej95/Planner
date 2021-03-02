import styled from 'styled-components';
import { SubHeading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import ProfabilityRow from '../molecules/ProfabilityRow/ProfabilityRow';


const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 46px;
    margin-bottom: 50px;
`;

const ProfabilitySubHeading = styled(SubHeading)`
    font-size: 15px;
    font-weight: 800;
    text-align: left;
`;

const BriefDiv = styled.div`
    margin: 30px auto 30px auto;
    width: 70%;
`;

const BriefParagraph = styled(Paragraph)`
    text-align: center;
`;

const ProfabilityProjectSection = () => {
    return(
        <Wrapper>
            <ProfabilitySubHeading>Szczegóły</ProfabilitySubHeading>
            <ProfabilityRow category="value" amount="500 000,00 PLN" />
            <ProfabilityRow category="cost" amount="100 000,00 PLN" />
            <ProfabilityRow category="profit" amount="400 000,00 PLN" />
            <BriefDiv>
                <BriefParagraph>Limit czasu przeznaczonego na wykonanie projektu został osiągnięty. Lorem ipsum solor dolar it.</BriefParagraph>
            </BriefDiv>
        </Wrapper>
    )
}


export default ProfabilityProjectSection;