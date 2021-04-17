import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { StyledComponent, css } from 'styled-components';
import { startTheTask, stopTheTask } from '../../actions/tasks';
import sunIcon from '../../assets/sunIcon.svg';

const Wrapper = styled.div`
    width: 36px;
    height: 20px;
    border-radius: 20px;
    background-color: #FEDD2C;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;
`;

const SliderBar = styled.div`
    width: 16px;
    height: 16px;
    background-color: #120D45;
    border-radius: 20px;

`;

const SliderIcon = styled.img`
    display: block;
    color: white;
    width: 12px;
    height: 12px;

`;

const WrapperSliderTask = styled(Wrapper)<{ readonly active: boolean;}>`
    background-color: rgb(112,112,112, 0.4);
    margin-bottom: 0px;
    justify-content: end;
    padding: 0 3px;

    ${({ active }) => active &&
        css`
            background-color: green;
            
        `}
    
`;

const SliderTaskBar = styled(SliderBar)<{ readonly active: boolean}>`
    background-color: #FFFFFF;

    ${({ active }) => active &&
        css`
            transform: translateX(14px);
            
        `}
    
`;

export const SliderTheme: React.FC = () => {
    return(
        <Wrapper>
            <SliderIcon src={sunIcon} alt="ikonka"/>
            <SliderBar/>
        </Wrapper>
    )
}

interface SliderTaskInterface {
    activeTask: boolean;
    onClick: () => void;
    activeHandle: () => void;
    idTask: Number
}


export const SliderTask: React.FC<SliderTaskInterface> = ({activeTask, activeHandle, idTask, ...props }) => {

    // w zmiennej activeTask przekazujemy wartość boolean, która wskazuje czy dane zadanie jest akutalnie kliknięte przez użytkownika jako to, którym aktualnie użytkownik chce się zająć
    const [ startDate, setStartDate ] = useState(0);
    const dispatch = useDispatch();

    const handleClick = () => {
        activeHandle();
        countingActiveTimeTask(!activeTask);
    }

    const countingActiveTimeTask = (active : Boolean) => {
        let endDate = 0;
        if(active){
            setStartDate(new Date().getTime()); 
            dispatch(startTheTask(idTask));
        } else {
            endDate = new Date().getTime();         
            const timeActiveTask = Math.abs( endDate - startDate ); 
            const timeTaskInMinutes = (timeActiveTask / (1000 * 60)).toFixed(2); 
            dispatch(stopTheTask(idTask, timeTaskInMinutes))
        }
    }

    return(
        <WrapperSliderTask active={activeTask} onClick={() => handleClick()}>
            <SliderTaskBar active={activeTask}/>
        </WrapperSliderTask>
    )
}