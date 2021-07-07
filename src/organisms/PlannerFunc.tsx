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

const WrapperFuncCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 340px;
    margin: 0 auto;

    @media(min-width: 1360px){
        width: 800px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
    }
`;

const PlannerFunc = () => {
    return(
        <Wrapper>
            <PlannerFnHeading>Funkcje naszego planera</PlannerFnHeading>
            <WrapperFuncCard>
            {
                data.functions.map(item =>(
                    <FuncPlannerCard 
                    key={item.id}
                    id={item.id}
                    content={item.content}
                    />
                    ) )
            }
            </WrapperFuncCard>
        </Wrapper>
    )
}


export default PlannerFunc;