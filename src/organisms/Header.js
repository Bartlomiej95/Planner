import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import menuIcon from '../assets/menuIcon.svg';
import logoutIcon from '../assets/logoutIcon.svg';
import messageIcon from '../assets/messageIcon.svg';
import { Logo } from '../components/Heading/Heading';
import UserContext from '../context/UserContext';
import { logoutUser } from '../actions/users';

const Wrapper = styled.div`
    height: 50px;
    background-color: #EFF1F5;
    display: flex;
    flex: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 33px;
`;

const IconsDiv = styled.div``;

const Img = styled.img`
    padding-left: 20px;
    cursor: pointer;
`;

const Header = () => {

    const { user } = useContext(UserContext);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogoutClick = () => {
        history.push('/homepage/logout');
        dispatch(logoutUser());
    }

    return(
        <Wrapper>
            <Logo>Planner</Logo>
            <IconsDiv>
                {
                    user && (
                        <>
                            <Img src={messageIcon} alt="ikona wiadomości" />
                            <Img src={logoutIcon} alt="ikona wylogowywania" onClick={ () => handleLogoutClick() } />
                        </>
                    )
                }
                <Img src={menuIcon} alt="ikona menu" />
            </IconsDiv>
        </Wrapper>
    )
}

export default Header;