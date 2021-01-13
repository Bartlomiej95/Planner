import React from 'react';
import styled from 'styled-components';
import Banner from '../organisms/Banner';
import Header from '../organisms/Header';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

const HomePage = () => {
    return(
        <Wrapper>
            <Header />
            <Banner />
        </Wrapper>
    )
}

export default HomePage;