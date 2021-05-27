import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Wrapper = styled.div<{ readonly active: boolean}>`
    width: 325px;
    height: 75px;
    height: ${({ active }) => active === true ? '200px' : '75px'};
    background-color: #EFF1F5;
    margin: 25px auto;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    transition: 0.5s;

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

    :hover{
        cursor: pointer;
    }
`;

const TitleCard = styled.div`
    display: flex;
`;

const Sign = styled.p<{ readonly active: boolean}>`
    font-size: 40px;
    font-weight: 200;
    margin-top: 8px;
    margin-left: 20px;
    transform: rotate(${({ active }) => active ? '45deg' : '0'});
    transition: 0.2s;
`;

const QuestionHeading = styled(SubHeading)`
    padding-left: 10px;
    margin-top: 26px;
`;

const QAParagraphCard = styled(Paragraph)`
    margin-left: 57px;
    margin-top: 16px;
`;

interface Props {
    id: number,
    question: string,
    answer: string,
}

const QAPlannerCard = ({ id, question, answer}: Props) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault();
        setIsActive(!isActive);
    }

    return(
        <Wrapper onClick={(e) => handleClick(e)} active={isActive}>
            <TitleCard>
                <Sign active={isActive}>+</Sign>
                <QuestionHeading>{question}</QuestionHeading>
            </TitleCard>
            <QAParagraphCard>{answer}</QAParagraphCard>
        </Wrapper>
    )
}

export default QAPlannerCard;