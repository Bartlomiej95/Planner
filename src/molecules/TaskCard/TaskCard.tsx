import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchAllTask, updateTask } from '../../actions/tasks';
import { SubSubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { ThemeContext, ThemeType } from '../../context/theme';
import { SliderTask } from '../SliderTheme/SliderTheme';

const Wrapper = styled.div<{ readonly typeTheme: string; readonly isFinish: boolean }>`
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

const CloseTaskParagraph = styled(Paragraph)<{ onClick: any }>`
    cursor: pointer;
    font-weight: 500;

    :hover{
        color: #0903B0;
    }
`;

const WrapperLoadingBar = styled.div`
    width: 275px;
    height: 2px;
    background-color: rgb(112,112,112, 0.4);
    margin: 12px 0 5px 0;
`;

const LoadingBar = styled.div<{ readonly percent: string, readonly activeTask: boolean}>`
    height: 2px;
    background-color: ${({ activeTask }) => activeTask ? 'green' : '#707070' };
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
    isFinish: boolean;
}

const initialTimeObject = {
    hours: '00',
    minutes: '00',
    seconds: '00',
}

const TaskCard: React.FC<Props> = ({ division, title, time, id, taskTime, isFinish }) => {
    // time - czas całego zadania [min]
    // taskTime - aktualny czas wykonywanego zadania 
    const [activeTask, setActiveTask] = useState(false);
    const [ currentlyTaskTime, setCurrentlyTaskTime ] = useState(initialTimeObject);
    const [ timeForAllTask, setTimeForAllTask ] = useState(initialTimeObject);
    const [ update, setUpdate ] = useState(false); //zmienna ma rejestrować zmianę, która jest wysyłana do bazy danych
    const [ percentCompleteOfTheTask, setPercentCompleteOfTheTask ] = useState(0);
    const { typeTheme, ThemeType } = useContext(ThemeContext);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setCurrentlyTaskTime(setTaskTime(taskTime));
        setPercentCompleteOfTheTask( countingPercentCompleteOfTheTask(time, taskTime) )
    }, [taskTime]);

    useEffect(()=>{
        setTimeForAllTask(setTaskTime(time));
    }, []);

    const handleClick = (): void => {
        if(isFinish){
            return;
        }
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

    const handleUpdateTask = (e: React.SyntheticEvent): void => {
        isFinish = !isFinish;
        setUpdate(!update);
        dispatch(updateTask(id, isFinish, taskTime));
        
    }

    return(
        <Wrapper typeTheme={typeTheme} isFinish={isFinish}>
            <HeaderTaskCard>
                <SubSubHeading >{division}</SubSubHeading>
                <SliderTask activeTask={activeTask} idTask={id} taskTime={taskTime} isFinish={isFinish} activeHandle={() => handleClick()} />
            </HeaderTaskCard>
            <MiddlePart> 
                <Paragraph>{title}</Paragraph>
                <CloseTaskParagraph onClick={(e: React.SyntheticEvent) => handleUpdateTask(e)}>
                    { isFinish === true ? 'Przywróć' : 'Zakończ' }
                </CloseTaskParagraph>
            </MiddlePart>
            <WrapperLoadingBar>
                <LoadingBar activeTask={activeTask} percent={`${percentCompleteOfTheTask}%`}/>
            </WrapperLoadingBar>
            <WrapperTimeTask>
                <Paragraph>{ `${currentlyTaskTime.hours}:${currentlyTaskTime.minutes}:${currentlyTaskTime.seconds} `}</Paragraph>
                <Paragraph>{`${timeForAllTask.hours}:${timeForAllTask.minutes}:${timeForAllTask.seconds} `}</Paragraph>
            </WrapperTimeTask>
        </Wrapper>
    )
}

export default TaskCard;