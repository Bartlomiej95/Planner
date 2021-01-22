import styled from 'styled-components';
import Header from '../organisms/Header';
import RegisterSection from '../organisms/RegisterSection';

const Wrapper = styled.div`
    width: 100vw;
`;

const RegisterPage = () => {
    return(
        <Wrapper>
            <Header />
            <RegisterSection />
        </Wrapper>
    )
}

export default RegisterPage;