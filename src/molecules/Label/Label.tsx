import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { addActiveDepartment } from '../../actions/departments.js';

const Wrapper = styled.div<{ readonly isClick: boolean; departmentName: String}>`
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
    division: String;
    name: String;
    getStatus: Function,
}

const Label = ({ division, name, getStatus} : Props) : React.ReactNode => {

    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch()

    const getActiveStatus = () =>{
        setIsActive(isActive => !isActive);
        dispatch(addActiveDepartment(name, !isActive));
        getStatus();
        return isActive;
    }

    return(
        <Wrapper departmentName={name} isClick={isActive} onClick={() => getActiveStatus() }>
            <LabelName>{division}</LabelName>
        </Wrapper>
    )
}

export default Label;