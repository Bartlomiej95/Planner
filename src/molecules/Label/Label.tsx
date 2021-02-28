import { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ readonly isClick: boolean; }>`
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
    isSelect: boolean;
}

const Label = ({ division, isSelect } : Props) : React.ReactNode => {

    const [isActive, setIsActive] = useState(false);

    return(
        <Wrapper isClick={isActive} onClick={() => setIsActive(isActive => !isActive) }>
            <LabelName>{division}</LabelName>
        </Wrapper>
    )
}

export default Label;