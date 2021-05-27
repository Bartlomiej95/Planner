import styled from 'styled-components';
import FuncPlannerCard from '../molecules/FuncPlannerCard/FuncPlannerCard';
import { Heading } from '../components/Heading/Heading';
import { data } from '../data/index';

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
            { data.functions.map(item =>(
                <FuncPlannerCard 
                    key={item.id}
                    id={item.id}
                    content={item.content}
                />
            ) )}
            {/* <FuncPlannerCard />
            <FuncPlannerCard />
            <FuncPlannerCard />
            <FuncPlannerCard /> */}
        </Wrapper>
    )
}


export default PlannerFunc;