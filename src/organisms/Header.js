import React from 'react';
import styled from 'styled-components';
import menuIcon from '../assets/menuIcon.svg';
import { Logo } from '../components/Heading/Heading';

const Wrapper = styled.div`
    width: 100vw;
    height: 50px;
    background-color: #EFF1F5;
    display: flex;
    flex: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 33px;
`;

const Header = () => {
    return(
        <Wrapper>
            <Logo>Planner</Logo>
            <img src={menuIcon} alt="ikona menu" />
        </Wrapper>
    )
}

export default Header;