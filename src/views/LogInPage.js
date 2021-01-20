import styled from 'styled-components';
import Header from '../organisms/Header';
import LoginSection from '../organisms/LoginSection';

const Wrapper = styled.div`
    width: 100vw;
`;

const LogInPage = () => {
    return(
        <Wrapper>
            <Header/>
            <LoginSection />
        </Wrapper>
    )
}

export default LogInPage;