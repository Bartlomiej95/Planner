import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import userIcon from '../../assets/user.svg';
import acceptingIcon from '../../assets/accept.svg';
import { SubHeading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0px;

    :first-of-type{
        margin-top: 50px;
    }
`;

const BorderImg = styled.div`
    position: relative;
    width: 51px;
    height: 51px;
    border: 2px solid #372FFF;
    border-radius: 50%;
    background-color: transparent;
`;

const Img = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-image: url(${({ icon }) => icon});
    
`;

const MiddleDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
`;

const RightDiv = styled.div`
    border: 1px solid #D1D1D1;
    width: 41px;
    height: 41px;
    background-color: #D1D1D1;
    border-radius: 50%;
    cursor: pointer;
    background-image: none;

    ${({ userSelect }) => userSelect && css`
        background-image: url(${({ icon }) => icon });
        background-position: center;
        background-repeat: no-repeat;
        background-color: #00BD51;
    `}

    

`;

const PersonToProject = () => {

    const [ isAccept, setIsAccept ] = useState(false);

    console.log(isAccept);

    return(
        <Wrapper>
             <BorderImg>
                 <Img icon={userIcon} />
             </BorderImg>
             <MiddleDiv>
                <SubHeading>Marek Iksiński</SubHeading>
                <Paragraph>Graphic Designer</Paragraph>
             </MiddleDiv>
             <RightDiv icon={acceptingIcon} onClick={() => setIsAccept( prev => !prev)} userSelect={isAccept} />
        </Wrapper>
    )
}

export default PersonToProject;