import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import logoutIcon from '../assets/logoutIcon.svg';
import { SubHeading, SubSubHeading } from '../components/Heading/Heading';
import { BackSpan } from '../components/Paragraph/Paragraph';

const Wrapper = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 50px);

    > * {
        margin-top: 15px;
    }
`;

const Img = styled.img`
    display: block;
    /* margin: 100px auto 0 auto; */
    padding-bottom: 20px;
  
`;


const LogoutSection = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return(
        <Wrapper>
            <Img src={logoutIcon} alt="ikonka zatwierdzające udane wylogowanie" />
            <SubHeading>Miłego popołudnia</SubHeading>
            <SubSubHeading>Zostałeś pomyślnie wylogowany z konta.</SubSubHeading>
            <BackSpan onClick={() => handleClick()}>Wróc do strony głównej</BackSpan>
        </Wrapper>
    )
}

export default LogoutSection;