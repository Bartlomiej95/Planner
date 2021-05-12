import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { startTheTask, stopTheTask, updateTask } from '../../actions/tasks';
import sunIcon from '../../assets/sunIcon.svg';
import moonlightIcon from '../../assets/moonlightIcon.svg';
import { ThemeContext } from '../../context/theme';

const Wrapper = styled.div`
    width: 36px;
    height: 20px;
    border-radius: 20px;
    background-color: ${ props => props.typeTheme === Theme.Light ? '#FEDD2C' : '#FFFFFF'};

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
    background-color: ${ props => props.typeTheme === Theme.Light ? '#120D45' : '#FEDD2C'};
    
    border-radius: 20px;
`;

const SliderIcon = styled.img`
    display: block;
    color: white;
    width: 12px;
    height: 12px;
`;

const WrapperSliderTask = styled(Wrapper)`
    background-color: rgb(112,112,112, 0.4);
    margin-bottom: 0px;
    justify-content: end;
    padding: 0 3px;

    ${({ active }) => active &&
        css`
            background-color: green;         
        `}
`;

const SliderTaskBar = styled(SliderBar)`
    background-color: #FFFFFF;

    ${({ active }) => active &&
        css`
            transform: translateX(14px);
        `}
`;

const Theme = {
    Light: 'light',
    Dark: "dark",
}

export const SliderTheme = () => {

    const [ themeName, setThemeName ] = useState(Theme.Light);
    const { typeTheme, changeTheme} = useContext(ThemeContext);

    useEffect(() => {
        setThemeName(typeTheme);
    }, [typeTheme])

    const handleClick = () => {
        changeTheme();
    }

    return(
        <Wrapper typeTheme={themeName} onClick={() => handleClick()}>
            { themeName === Theme.Light && (<SliderIcon src={sunIcon} alt="ikonka słońca - motyw dnia" />) }
            <SliderBar typeTheme={themeName} />
            { themeName === Theme.Dark && (<SliderIcon src={moonlightIcon} alt="ikonka księżyca - motyw nocy" />) }
        </Wrapper>
    )
}

export const SliderTask = ({activeTask, activeHandle, idTask, taskTime, isFinish, ...props }) => {

    // w zmiennej activeTask przekazujemy wartość boolean, która wskazuje czy dane zadanie jest akutalnie kliknięte przez użytkownika jako to, którym aktualnie użytkownik chce się zająć
    const [ startDate, setStartDate ] = useState(0);
    const dispatch = useDispatch();

    const handleClick = () => {
        activeHandle();
        countingActiveTimeTask(!activeTask);
    }

    const countingActiveTimeTask = (active) => {
        let endDate = 0;
        if(active){
            setStartDate(new Date().getTime()); 
            dispatch(startTheTask(idTask));
        } else {
            endDate = new Date().getTime();         
            const timeActiveTask = Math.abs( endDate - startDate ); 
            const timeTaskInMinutes = Number((timeActiveTask / (1000 * 60)).toFixed(2)); 
            dispatch(stopTheTask(idTask, timeTaskInMinutes));
            dispatch(updateTask(idTask, isFinish, taskTime, timeTaskInMinutes));
        }
    }

    return(
        <WrapperSliderTask active={activeTask} onClick={() => handleClick()}>
            <SliderTaskBar type={Theme.Light} active={activeTask}/>
        </WrapperSliderTask>
    )
}