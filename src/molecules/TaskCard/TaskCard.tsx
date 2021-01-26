import React, { useState } from 'react';
import styled from 'styled-components';
import { SubSubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { SliderTask } from '../SliderTheme/SliderTheme';

const Wrapper = styled.div`
    width: 315px;
    min-height: 100px;
    padding: 15px 20px;
    margin: 0 auto;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    margin-bottom: 25px;
    
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

`;

const HeaderTaskCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 12px;
`;

const MiddlePart = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`;

const WrapperLoadingBar = styled.div`
    width: 275px;
    height: 2px;
    background-color: rgb(112,112,112, 0.4);
    margin: 12px 0 5px 0;
`;

const WrapperTimeTask = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

`;

interface Props {
    division: String;
}

const TaskCard: React.FC<Props> = ({ division }) => {

    const [activeTask, setActiveTask] = useState(false);

    const handleClick = (): void => {
        setActiveTask(!activeTask);
    }

    return(
        <Wrapper>
            <HeaderTaskCard>
                <SubSubHeading onClick={() => console.log('click')} >{division}</SubSubHeading>
                <SliderTask onClick={() => console.log('klik')} activeHandle={() => handleClick()} activeTask={activeTask} />
            </HeaderTaskCard>
            <MiddlePart> 
                <Paragraph>Przygotuj opisy produktowe do sklepu internetowego.</Paragraph>
                <Paragraph>Zakończ</Paragraph>
            </MiddlePart>
            <WrapperLoadingBar></WrapperLoadingBar>
            <WrapperTimeTask>
                <Paragraph>00:00:00</Paragraph>
                <Paragraph>02:00:00</Paragraph>
            </WrapperTimeTask>
        </Wrapper>
    )
}

export default TaskCard;