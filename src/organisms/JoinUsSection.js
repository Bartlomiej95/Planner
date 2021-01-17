import styled from 'styled-components';
import { Heading } from '../components/Heading/Heading';
import { LoginButton } from '../components/Button/Button';


const Wrapper = styled.section`
    width: 100vw;
    height: 300px;
`;

const JoinUsButton = styled(LoginButton)`
    margin: 50px auto 0 auto;
    border: none;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.16);
`;

const JoinUsSection = () => {
    return(
        <Wrapper>
            <Heading>Chcesz skorzystać z aplikacji? </Heading>
            <JoinUsButton>Dołącz</JoinUsButton>
        </Wrapper>
    )
}

export default JoinUsSection;