import styled from 'styled-components';
import { Logo } from '../components/Heading/Heading';

const Wrapper = styled.footer`
    min-height: 75px;
    background-color: #EFF1F5;
`;

const FooterLogo = styled(Logo)`
    margin-left: 34px;
    padding: 20px 0;
    color: black;

    @media(min-width: 1360px){
        margin-left: 22.5vw;
    }
`;

const Footer = () => {
    return(
        <Wrapper>
            <FooterLogo >Planner</FooterLogo>
        </Wrapper>
    )
}

export default Footer;