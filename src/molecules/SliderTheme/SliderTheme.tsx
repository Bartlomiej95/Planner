import React from 'react';
import styled, { StyledComponent, css } from 'styled-components';
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
}

export const SliderTask: React.FC<SliderTaskInterface> = ({activeTask, activeHandle, ...props }) => {

    // w zmiennej activeTask przekazujemy wartość boolean, która wskazuje czy dane zadanie jest akutalnie kliknięte przez użytkownika jako to, którym aktualnie użytkownik chce się zająć
    console.log(activeTask);
    return(
        <WrapperSliderTask active={activeTask} onClick={() => activeHandle()}>
            <SliderTaskBar active={activeTask}/>
        </WrapperSliderTask>
    )
}