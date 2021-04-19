import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SubSubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { ThemeContext, ThemeType } from '../../context/theme';
import { SliderTask } from '../SliderTheme/SliderTheme';

const Wrapper = styled.div<{ readonly typeTheme: string }>`
    width: 315px;
    min-height: 100px;
    padding: 15px 20px;
    margin: 0 auto;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    margin-bottom: 25px;
    background-color: ${props => props.typeTheme === ThemeType.Light ? '#FFF' : '#F8FAFE'};
    
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

const LoadingBar = styled.div<{ readonly percent: string}>`
    height: 2px;
    background-color: green;
    position: relative;
    width: ${props => props.percent};
`;

const WrapperTimeTask = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

`;

interface Props {
    division: String;
    title: String;
    time: number;
    id: Number;
    taskTime: number;
}

const initialTimeObject = {
    hours: '00',
    minutes: '00',
    seconds: '00',
}

const TaskCard: React.FC<Props> = ({ division, title, time, id, taskTime }) => {
    // time - czas całego zadania [min]
    // taskTime - aktualny czas wykonywanego zadania 
    const [activeTask, setActiveTask] = useState(false);
    const [ currentlyTaskTime, setCurrentlyTaskTime ] = useState(initialTimeObject);
    const [ timeForAllTask, setTimeForAllTask ] = useState(initialTimeObject);
    const [ percentCompleteOfTheTask, setPercentCompleteOfTheTask ] = useState(0);
    const { typeTheme, ThemeType } = useContext(ThemeContext);
    
    useEffect(() => {
        setCurrentlyTaskTime(setTaskTime(taskTime));
        setPercentCompleteOfTheTask( countingPercentCompleteOfTheTask(time, taskTime) )
    }, [taskTime]);

    useEffect(()=>{
        setTimeForAllTask(setTaskTime(time));
    }, []);

    const handleClick = (): void => {
        setActiveTask(!activeTask);
    }

    const setTaskTime = (time : any) => {
        const hours = Math.floor(time / 60);
        const minutes = Math.floor(time % 60);
        const seconds = Math.round(((time * 60) % 60));
        

        const stringHours = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}); // ustawiamy takie format 00:00:00
        const stringMinutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        const stringSeconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
       
        return {
            hours: stringHours,
            minutes: stringMinutes,
            seconds: stringSeconds,
        }
    }

    const countingPercentCompleteOfTheTask = (allTime : number, currentlyTime: number) => {
        let percent: number = ( (currentlyTime * 100) /  (allTime) );
        if(percent > 100){
            percent = 100;
        }
        return percent;
    }

    return(
        <Wrapper typeTheme={typeTheme}>
            <HeaderTaskCard>
                <SubSubHeading onClick={() => console.log('click')} >{division}</SubSubHeading>
                <SliderTask onClick={() => console.log('klik')} activeHandle={() => handleClick()} activeTask={activeTask} idTask={id} />
            </HeaderTaskCard>
            <MiddlePart> 
                <Paragraph>{title}</Paragraph>
                <Paragraph>Zakończ</Paragraph>
            </MiddlePart>
            <WrapperLoadingBar>
                <LoadingBar percent={`${percentCompleteOfTheTask}%`}/>
            </WrapperLoadingBar>
            <WrapperTimeTask>
                <Paragraph>{ `${currentlyTaskTime.hours}:${currentlyTaskTime.minutes}:${currentlyTaskTime.seconds} `  }</Paragraph>
                <Paragraph>{`${timeForAllTask.hours}:${timeForAllTask.minutes}:${timeForAllTask.seconds} `}</Paragraph>
            </WrapperTimeTask>
        </Wrapper>
    )
}

export default TaskCard;