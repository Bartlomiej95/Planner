import styled from 'styled-components';
import { LPParagraph, Paragraph } from '../../components/Paragraph/Paragraph';


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0 37px;
    margin: 0 auto;
`;

const NumberParagraph = styled(LPParagraph)`
    margin-right: 26px;
`;



const FuncPlannerCard = () => {
    return(
        <Wrapper>
            <NumberParagraph>1</NumberParagraph>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate est eget eros dignissim egestas.</Paragraph>        
        </Wrapper>
    )
}

export default FuncPlannerCard;