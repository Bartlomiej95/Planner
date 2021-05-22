import styled from 'styled-components';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Wrapper = styled.div`
    width: 325px;
    height: 75px;
    background-color: #EFF1F5;
    margin: 25px auto;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;

    :first-of-type {
        margin-top: 50px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }

    :last-of-type{
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }
`;

const TitleCard = styled.div`
    display: flex;
`;

const Sign = styled.p`
    font-size: 40px;
    font-weight: 200;
    margin-top: 8px;
    margin-left: 20px;
`;

const QuestionHeading = styled(SubHeading)`
    padding-left: 10px;
    margin-top: 26px;
`;

const QAParagraphCard = styled(Paragraph)`
    margin-left: 57px;
    margin-top: 16px;
`;


const QAPlannerCard = () => {
    return(
        <Wrapper>
            <TitleCard>
                <Sign>+</Sign>
                <QuestionHeading>Lorem ipsum dolor sit amet ?</QuestionHeading>
            </TitleCard>
            <QAParagraphCard>Lorem ipsum dupa sipsum</QAParagraphCard>
        </Wrapper>
    )
}

export default QAPlannerCard;