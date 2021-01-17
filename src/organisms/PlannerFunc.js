import styled from 'styled-components';
import { Heading } from '../components/Heading/Heading';
import FuncPlannerCard from '../molecules/FuncPlannerCard/FuncPlannerCard';

const Wrapper = styled.section`
    width: 100vw;
    min-height: 500px;
`;

const PlannerFnHeading = styled(Heading)`
    padding: 0 30px;
    margin-bottom: 50px;
`;

const PlannerFunc = () => {
    return(
        <Wrapper>
            <PlannerFnHeading>Funkcje naszego planera</PlannerFnHeading>
            <FuncPlannerCard />
            <FuncPlannerCard />
            <FuncPlannerCard />
            <FuncPlannerCard />
        </Wrapper>
    )
}


export default PlannerFunc;