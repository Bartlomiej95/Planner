import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { addActiveDepartment } from '../../store/Departments/actions';
import { selectTypeOfTask } from '../../store/Tasks/actions';
import DefaultRootState from '../../interfaces/DefaultRootState/DefaultRootState.js';
import Departments from '../../interfaces/Departments/Departments.js';

const Wrapper = styled.div<{ readonly isClick: any; departmentName: string | undefined}>`
    height: 24px;
    background-color: #D1D1D1;
    padding: 7px 14px;
    border-radius: 15px;
    margin-bottom: 10px;
    margin-right: 10px;
    cursor: pointer;

  ${({ isClick }) => isClick && 
    css`
        background-color: #F37B01;
    `}
`;

const LabelName = styled.p`
    font-size: 10px;
    line-height: 10px;
    color: white;
    font-weight: 600;
`;

interface Props {
    division: string;
    name: string;
    getStatus: () => void,
    type?: string,
    status?: boolean,
}

const Label = ({ division, name, getStatus, type} : Props) => {

    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch()
    const departements = useSelector( (state: DefaultRootState) => state.departments );

    const getActiveStatus = () =>{
        // jeśli mamy etykietę z widoku projektu, a nie etykietę wyboru z formularza
        // mamy ten sam komponent Label dla obu przypadków, dlatego musimy je rozróżnica właściwością type 
        if(type === "card"){
            return null
        }
        if(type === "task"){
            dispatch(selectTypeOfTask(division));
            setIsActive(isActive => !isActive);
            getStatus();
            return 
        }
        setIsActive(isActive => !isActive);
        dispatch(addActiveDepartment(name, !isActive));
        getStatus();
        return isActive;
    }
    
    const handleColor = () => {
        if(type === "card"){
            return true;   
        }
        if(type === "task"){
            return isActive;
        }
        const searchedDepartment = departements.filter( ( item: Departments ) => item.name === name);
        return searchedDepartment[0].active; 
        // return isActive;
    }

    return(
        <Wrapper departmentName={name} isClick={handleColor() } onClick={() => getActiveStatus() } >
            <LabelName>{division}</LabelName>
        </Wrapper>
    )
}

export default Label;