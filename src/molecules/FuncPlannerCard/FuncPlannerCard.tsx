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
`;

const NumberParagraph = styled(LPParagraph)`
    margin-right: 26px;
    font-weight: 700;
`;

interface Props {
    content: string,
    id: number,
}

const FuncPlannerCard = ({ content, id }: Props) => {
    return(
        <Wrapper>
            <NumberParagraph>{id}</NumberParagraph>
            <SubHeading>{content}</SubHeading>        
        </Wrapper>
    )
}

export default FuncPlannerCard;