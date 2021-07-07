import styled from 'styled-components';
import { SubHeading } from '../../components/Heading/Heading';
import { LPParagraph, Paragraph } from '../../components/Paragraph/Paragraph';


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0 37px;
    margin: 30px auto;
    
    @media(min-width: 1360px){
        width: 400px;
    }
`;

const NumberParagraph = styled(LPParagraph)`
    margin-right: 26px;
    font-weight: 700;
`;

const SubHeadingFuncPlannerCard = styled(SubHeading)`
    text-align: left;
`;

interface Props {
    content: string,
    id: number,
}

const FuncPlannerCard = ({ content, id }: Props) => {
    return(
        <Wrapper>
            <NumberParagraph>{id}</NumberParagraph>
            <SubHeadingFuncPlannerCard>{content}</SubHeadingFuncPlannerCard>        
        </Wrapper>
    )
}

export default FuncPlannerCard;