import styled from 'styled-components';
import { SubHeading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import Projects from '../interfaces/Projects/Projects';
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

const BriefParagraph = styled(Paragraph)<{ textColor: boolean}>`
    text-align: center;
    color: ${ props => props.textColor ? 'green' : 'red'};
`;

interface IProps {
    projectValue: number,
    hours: number,
}

const ProfabilityProjectSection = ({ projectValue, hours } :IProps) => {

    const value = Number(projectValue).toFixed(2);
    const costRateForOneHour = 1000; 
    
    const countTotalCostOfProject = (hourRate: number, allHoursOfProject: number): number => {
        return hourRate * allHoursOfProject;
    }

    const totalCost = countTotalCostOfProject(costRateForOneHour, hours);

    const countEstimatedProfit = (totalCost: number, projectValue: number): number => {
        return projectValue - totalCost;
    }

    return(
        <Wrapper>
            <ProfabilitySubHeading>Szczegóły</ProfabilitySubHeading>
            <ProfabilityRow category="value" amount={`${value} PLN`} />
            <ProfabilityRow category="cost" amount={`${totalCost} PLN`} />
            <ProfabilityRow category="profit" amount={`${countEstimatedProfit(totalCost, projectValue)} PLN`} />
            <BriefDiv>
                {
                    countEstimatedProfit(totalCost, projectValue) > 0 ? (
                        <BriefParagraph textColor={true} >Limit czasu przeznaczonego na wykonanie projektu 
                        został osiągnięty. Projekt jest rentowny i osiągnął planowany zysk.</BriefParagraph>
                    ) : (
                        <BriefParagraph textColor={false}>Limit czasu przeznaczonego na wykonanie projektu został 
                        przekroczony. Projekt poniósł stratę.</BriefParagraph>
                    )
                }
            </BriefDiv>
        </Wrapper>
    )
}


export default ProfabilityProjectSection;