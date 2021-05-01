import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../components/Paragraph/Paragraph';
import userIcon from '../assets/user.svg';
import { SubHeading } from '../components/Heading/Heading';
import { SliderTheme } from '../molecules/SliderTheme/SliderTheme';
import UserContext from '../context/UserContext';
import { ThemeContext, ThemeType } from '../context/theme';
import LoadingWrapper from '../molecules/LoadingWrapper/LoadingWrapper';

const Wrapper = styled.section`
    height: 400px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: ${ props => props.typeTheme === ThemeType.Light ? '#F9FAFF' : '#09131D'};
`;

const ProfileParagraph = styled(Paragraph)`
    width: 60%;
    text-align: center;
    margin-top: 20px;
    color: ${ props => props.typeTheme === ThemeType.Light ? '#000' : '#FFF'};
`;

const BorderImageUser = styled.div`
    position: relative;
    width: 130px;
    height: 130px;
    border: 2px solid #372FFF;
    border-radius: 50%;
    background-color: transparent;
`;

const ImageUser = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-image: url(${({ icon }) => icon});
    padding: 40px;
`;

const NameHeading = styled(SubHeading)`
    font-size: 30px;
    color: ${props => props.typeTheme === ThemeType.Light ? '#22005F' : '#0903B0'};
`;

const PositionParagprah = styled(Paragraph)`
    font-size: 20px;
    color: ${props => props.typeTheme === ThemeType.Light ? 'black' : 'white'};
`;

const SpanLogout = styled.span`
    color: #0903B0;
    font-weight: 700;
`;

const ProfileSection = () => {

    const { user, getUser } = useContext(UserContext);
    const { typeTheme, ThemeType } = useContext(ThemeContext);

    useEffect(() => {
        getUser()
    }, [])

    if(user === null) {
        return(
            <LoadingWrapper />
        )
    }

    return(
        <Wrapper typeTheme={typeTheme}>
            <ProfileParagraph typeTheme={typeTheme}>Pamiętaj, aby po zakończonej pracy <SpanLogout>wylogować się</SpanLogout> z konta</ProfileParagraph>
            <BorderImageUser>
                <ImageUser icon={userIcon} />
            </BorderImageUser>
            <NameHeading typeTheme={typeTheme}>{`${user[0].name} ${user[0].surname}`}</NameHeading>
            <PositionParagprah typeTheme={typeTheme}>{`${user[0].position}`}</PositionParagprah>
            <SliderTheme />
        </Wrapper>
    )
}

export default ProfileSection;