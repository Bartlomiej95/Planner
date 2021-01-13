import React from 'react';
import styled from 'styled-components';
import { LoginButton } from '../components/Button/Button';
import { Heading, SubHeading } from '../components/Heading/Heading';
import { BannerCardAboutPlanner } from '../molecules/Card/Card';


const Wrapper = styled.section`
    width: 100vw;
    min-height: 800px;
    padding-top: 150px;
`;

const BannerLoginButton = styled(LoginButton)`
    margin: 50px auto 110px auto;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.16);
    border: 0px;
`;

const CardNavigation = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0 auto;
`;

const SingleNav = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #120D45;
    background-color: white;
    margin-right: 10px;
`;

const Banner = () => {
    return(
        <Wrapper>
            <Heading> Zaloguj się lub utwórz konto </Heading>
            <BannerLoginButton>Zaloguj się </BannerLoginButton>
            <SubHeading>Poznaj nasze rozwiązanie</SubHeading>
            <BannerCardAboutPlanner />
            <CardNavigation >
                <SingleNav />
                <SingleNav />
                <SingleNav />
                <SingleNav />
            </CardNavigation>
        </Wrapper>
    )
}

export default Banner;